package appAppcess.repository

import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository
import appAppcess.domain.Usuario

@Repository
interface RepoUsuario extends CrudRepository<Usuario, Long> {
	
	override findAll();
	
}
