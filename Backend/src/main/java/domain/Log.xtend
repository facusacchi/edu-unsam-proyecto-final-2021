package domain

import java.time.LocalDate
import javax.persistence.Id
import javax.persistence.GeneratedValue
import javax.persistence.Column
import org.eclipse.xtend.lib.annotations.Accessors
import javax.persistence.Entity

@Accessors
@Entity
class Log {
	@Id
	@GeneratedValue
	Long id
	
	@Column(name = "idEvento", insertable = false, updatable = false)
	Long idEvento	
	
	@Column(name = "idUbicacion", insertable = false, updatable = false)
	Long idUbicacion
	LocalDate fechaYHora	
}