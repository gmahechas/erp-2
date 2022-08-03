package routes

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitV1Routes(router *ginGo.GinRouterGroup) {
	routes := router.Group("/v1")
	{
		InitCountryRoutes(&ginGo.GinRouterGroup{RouterGroup: routes})
		InitEstateRoutes(&ginGo.GinRouterGroup{RouterGroup: routes})
	}
}
