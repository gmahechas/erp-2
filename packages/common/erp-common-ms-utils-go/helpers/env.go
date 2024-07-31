package helpers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"

	"github.com/spf13/viper"
)

var MyConfig Config

func InitEnv() {
	viper.SetConfigFile(".env")
	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %w", err))
	}

	environment := viper.GetString("ENVIRONMENT")

	config, err := readEnvFile(environment, &MyConfig)
	if err != nil {
		fmt.Println(err)
	}

	enrichEnv(config)
}

func readEnvFile(environment string, config *Config) (*Config, error) {
	envFile, err := ioutil.ReadFile("./environments/" + environment + ".json")
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	err = json.Unmarshal(envFile, &config)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return config, nil
}

func enrichEnv(config *Config) {
	InitVault()
	/* 	environment := viper.GetString("ENVIRONMENT")
	   	appName := viper.GetString("APP_NAME")
	   	data, _ := MyVault.Read("kv/data/erp/" + appName + "/" + environment)
	   	fmt.Println(data) */
}
