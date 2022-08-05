package main

import (
	"ms-3-gingo/routes"

	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
)

func main() {
	server := ginGoUtils.NewGinServer()
	routes.InitRoutes(server)
	server.Run(":50003")
}
