package vault

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/spf13/viper"
)

func InitVault() {
	vaultUrl, vaultRoleId, vaultSecretId := viper.Get("VAULT_URL"), viper.Get("VAULT_ROLE_ID"), viper.Get("VAULT_SECRET_ID")

	if vaultUrl == nil || vaultRoleId == nil || vaultSecretId == nil {
		panic(fmt.Errorf("VAULT_URL, VAULT_ROLE_ID, VAULT_SECRET_ID are required"))
	}

	values := map[string]string{"role_id": vaultRoleId.(string), "secret_id": vaultSecretId.(string)}
	json_data, err := json.Marshal(values)

	if err != nil {
		panic(fmt.Errorf("error marshalling json: %w", err))
	}

	data, err := http.Post(vaultUrl.(string)+"/v1/auth/approle/login", "application/json", bytes.NewBuffer(json_data))
	if err != nil {
		panic(fmt.Errorf("error posting to vault: %w", err))
	}

	bs := make([]byte, data.ContentLength)
	data.Body.Read(bs)

}
