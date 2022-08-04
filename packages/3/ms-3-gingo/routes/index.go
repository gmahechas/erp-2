package routes

import (
	v1 "ms-3-gingo/routes/v1"

	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitRoutes(server *ginGo.GinServer) {
	routes := server.Router.Group("/rest")
	{
		v1.InitV1Routes(ginGo.NewGinRouterGroup(routes))
	}
}
