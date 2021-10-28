package appAppcess.services

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import repository.RepoUsuario

@Service
class UsuarioService {
	
	@Autowired
	RepoUsuario repoUsuario;

	def getUsers() {
		return repoUsuario.findAll().toList;
	}
}
