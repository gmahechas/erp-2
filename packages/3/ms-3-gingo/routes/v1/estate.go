package routes

import (
	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitEstateRoutes(router *ginGoUtils.GinRouterGroup) {
	routes := router.Group("/estate")
	{
		routes.GET("/create/one", ginGoUtils.GinHandlerFunc(createOneEstate))
		routes.GET("/update/one", ginGoUtils.GinHandlerFunc(createOneEstate))
		routes.GET("/delete/one", ginGoUtils.GinHandlerFunc(deleteOneEstate))
		routes.GET("/search/one", ginGoUtils.GinHandlerFunc(searchOneEstate))
		routes.GET("/search/many", ginGoUtils.GinHandlerFunc(searchManyEstate))
	}
}

func createOneEstate(context *ginGoUtils.GinContext) {
	context.String(200, "createOneEstate !!!")
}

func updateOneEstate(context *ginGoUtils.GinContext) {
	context.String(200, "updateOneEstate !!!")
}

func deleteOneEstate(context *ginGoUtils.GinContext) {
	context.String(200, "deleteOneEstate !!!")
}

func searchOneEstate(context *ginGoUtils.GinContext) {
	context.String(200, "searchOneEstate !!!")
}

func searchManyEstate(context *ginGoUtils.GinContext) {
	context.String(200, "searchManyEstate !!!")
}
