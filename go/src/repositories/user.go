package repositories

import (
	"benchmark-go/src/database"
	"benchmark-go/src/models"

	"github.com/google/uuid"
)

func List() ([]models.User, error) {
	var users []models.User

	err := database.Db.Select(&users, "SELECT * FROM \"user\" ORDER BY created_at")

	if err != nil {
		return users, err
	}

	return users, nil
}
func FindById(id uuid.UUID) (models.User, error) {
	var user models.User

	err := database.Db.Get(&user, "SELECT * FROM \"user\" WHERE \"id\" = $1 LIMIT 1", id)

	if err != nil {
		return user, err
	}

	return user, nil
}
func Create(user models.User) (uuid.UUID, error) {
	id := uuid.New()

	statement, erro := database.Db.Prepare("INSERT INTO \"user\" (\"id\", \"name\", \"email\") VALUES ($1, $2, $3)")
	if erro != nil {
		return uuid.UUID{}, erro
	}

	_, erro = statement.Exec(id, user.Name, user.Email)
	if erro != nil {
		return uuid.UUID{}, erro
	}

	return id, nil
}
