package main

import (
	"ms-3-gingo/routes"

	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
	msUtilsGoUtils "github.com/gmahechas/erp-common-ms-utils-go/utils"
)

func main() {
	server := ginGoUtils.NewGinServer()
	msUtilsGoUtils.InitEnv()
	routes.InitRoutes(server)
	server.Run(":50003")
}
