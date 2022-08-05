package utils

import (
	"fmt"

	"github.com/spf13/viper"
)

type env struct {
	environment string
}

func InitEnv() {
	viper.SetConfigFile(".env")
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %w", err))
	}
	vaultUrl, vaultRoleId, vaultSecretId := viper.GetString("VAULT_URL"), viper.GetString("VAULT_ROLE_ID"), viper.GetString("VAULT_SECRET_ID")
	fmt.Println(vaultUrl)
	fmt.Println(vaultRoleId)
	fmt.Println(vaultSecretId)
}
