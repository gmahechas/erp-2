package routes

import (
	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitV1Routes(router *ginGoUtils.GinRouterGroup) {
	routes := router.Group("/v1/3")
	{
		InitCountryRoutes(ginGoUtils.NewGinRouterGroup(routes))
		InitEstateRoutes(ginGoUtils.NewGinRouterGroup(routes))
	}
}
