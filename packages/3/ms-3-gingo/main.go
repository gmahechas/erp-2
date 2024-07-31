package main

import (
	"ms-3-gingo/routes"

	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
	msUtilsGoHelpers "github.com/gmahechas/erp-common-ms-utils-go/helpers"
)

func main() {
	server := ginGoUtils.NewGinServer()
	msUtilsGoHelpers.InitEnv()
	routes.InitRoutes(server)
	server.Run(":50003")
}
