package routes

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitEstateRoutes(router *ginGo.GinRouterGroup) {
	routes := router.Group("/estate")
	{
		routes.GET("/create/one", ginGo.GinHandleFunc(createOneEstate))
		routes.GET("/update/one", ginGo.GinHandleFunc(createOneEstate))
		routes.GET("/delete/one", ginGo.GinHandleFunc(deleteOneEstate))
		routes.GET("/search/one", ginGo.GinHandleFunc(searchOneEstate))
		routes.GET("/search/many", ginGo.GinHandleFunc(searchManyEstate))
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
