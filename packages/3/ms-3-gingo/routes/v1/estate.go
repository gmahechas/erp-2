package routes

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitEstateRoutes(router *ginGo.GinRouterGroup) {
	routes := router.Group("/estate")
	{
		routes.GET("/create/one", ginGo.GinHandlerFunc(createOneEstate))
		routes.GET("/update/one", ginGo.GinHandlerFunc(createOneEstate))
		routes.GET("/delete/one", ginGo.GinHandlerFunc(deleteOneEstate))
		routes.GET("/search/one", ginGo.GinHandlerFunc(searchOneEstate))
		routes.GET("/search/many", ginGo.GinHandlerFunc(searchManyEstate))
	}
}

func createOneEstate(context *ginGo.GinContext) {
	context.String(200, "createOneEstate !!!")
}

func updateOneEstate(context *ginGo.GinContext) {
	context.String(200, "updateOneEstate !!!")
}

func deleteOneEstate(context *ginGo.GinContext) {
	context.String(200, "deleteOneEstate !!!")
}

func searchOneEstate(context *ginGo.GinContext) {
	context.String(200, "searchOneEstate !!!")
}

func searchManyEstate(context *ginGo.GinContext) {
	context.String(200, "searchManyEstate !!!")
}
