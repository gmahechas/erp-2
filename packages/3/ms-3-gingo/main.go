package main

import (
	"ms-3-gingo/routes"

	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func main() {
	server := ginGo.NewGinServer()
	routes.InitRoutes(server)
	server.Run(":50003")
}
