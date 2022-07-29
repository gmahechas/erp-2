package environments

import (
	"fmt"
	"ms-3-gingo/vault"

	"github.com/spf13/viper"
)

func InitEnv() {
	viper.SetConfigFile(".env")
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %w", err))
	}

	vault.InitVault()

}
