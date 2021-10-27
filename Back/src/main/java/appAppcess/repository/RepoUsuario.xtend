package repository

import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository
import domain.Usuario

@Repository
interface RepoUsuario extends CrudRepository<Usuario, Long> {
	
	override findAll();
	
}