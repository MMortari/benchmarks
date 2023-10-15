package routes

import (
	"benchmark-go/src/controllers"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App) fiber.Router {
	route := app.Group("/user")

	route.Get("/", controllers.ListUsers)
	route.Get("/:id", controllers.GetUser)
	route.Post("/", controllers.CreateUser)

	return route
}
