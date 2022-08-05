package routes

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitV1Routes(router *ginGo.GinRouterGroup) {
	routes := router.Group("/v1/3")
	{
		InitCountryRoutes(ginGo.NewGinRouterGroup(routes))
		InitEstateRoutes(ginGo.NewGinRouterGroup(routes))
	}
}
