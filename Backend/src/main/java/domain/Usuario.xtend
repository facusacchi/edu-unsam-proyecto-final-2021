package domain

import org.eclipse.xtend.lib.annotations.Accessors
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Accessors
@Entity
class Usuario {
	@Id
	@GeneratedValue
	Long id

	String nombre
	String apellido
	String apodo
	String email
	String password
	String telefono
}