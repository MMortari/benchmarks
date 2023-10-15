package controllers

import (
	"benchmark-go/src/models"
	"benchmark-go/src/repositories"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func ListUsers(c *fiber.Ctx) error {
	response, err := repositories.List()

	if err != nil {
		fmt.Println(err)
		return c.Status(500).SendString("Error to list users")
	}

	return c.JSON(response)
}
func GetUser(c *fiber.Ctx) error {
	id, err := uuid.Parse(c.Params("id"))

	if err != nil {
		fmt.Println(err)
		return c.Status(400).SendString("Invalid id")
	}

	response, err := repositories.FindById(id)

	if err != nil {
		fmt.Println(err)
		return c.Status(500).SendString("Error to get user")
	}

	return c.JSON(response)
}
func CreateUser(c *fiber.Ctx) error {
	user := new(models.User)

	if err := c.BodyParser(user); err != nil {
		return err
	}

	if user.Name == "" || user.Email == "" {
		return c.Status(400).SendString("Name and email is required")
	}

	response, err := repositories.Create(*user)
	if err != nil {
		fmt.Println(err)
		return c.Status(500).SendString("Error to create user")
	}

	return c.JSON(response)
}
