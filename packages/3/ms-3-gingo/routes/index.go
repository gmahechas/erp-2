package routes

import (
	v1 "ms-3-gingo/routes/v1"

	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitRoutes(server *ginGoUtils.GinServer) {
	routes := server.Router.Group("/rest")
	{
		v1.InitV1Routes(ginGoUtils.NewGinRouterGroup(routes))
	}
}
