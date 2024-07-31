package helpers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	vault "github.com/hashicorp/vault/api"
	"github.com/spf13/viper"
)

type VaultParameters struct {
	vaultUrl      string
	vaultRoleId   string
	vaultSecretId string
}

type Vault struct {
	*vault.Client
}

func (vault *Vault) Read(path string) (map[string]interface{}, error) {
	data, err := vault.Logical().Read(path)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return data.Data, nil
}

func NewVault(v *Vault, token string, parameters VaultParameters) (*Vault, error) {
	config := vault.DefaultConfig()
	config.Address = parameters.vaultUrl
	client, _ := vault.NewClient(config)
	*v = Vault{client}
	(*v).SetToken(token)
	return v, nil
}

var MyVault Vault

func InitVault() {
	vaultUrl := viper.GetString("VAULT_URL")
	vaultRoleId := viper.GetString("VAULT_ROLE_ID")
	vaultSecretId := viper.GetString("VAULT_SECRET_ID")

	jsonData, _ := json.Marshal(map[string]string{"role_id": vaultRoleId, "secret_id": vaultSecretId})
	data, _ := http.Post(vaultUrl+"/v1/auth/approle/login", "application/json", bytes.NewBuffer(jsonData))
	var res map[string]interface{}
	json.NewDecoder(data.Body).Decode(&res)
	token := res["auth"].(map[string]interface{})["client_token"].(string)

	NewVault(&MyVault, token, VaultParameters{vaultUrl, vaultRoleId, token})
}
