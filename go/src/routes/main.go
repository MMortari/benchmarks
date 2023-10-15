package routes

import "github.com/gofiber/fiber/v2"

func Main(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello from go")
	})
	app.Get("/routes", func(c *fiber.Ctx) error {
		return c.JSON(app.Stack())
	})

	UserRoutes(app)
}
