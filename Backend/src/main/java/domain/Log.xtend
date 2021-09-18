package domain

import java.time.LocalDate
import javax.persistence.Id
import javax.persistence.GeneratedValue
import javax.persistence.Column
import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class Log {
	@Id
	@GeneratedValue
	Long id
	
	@Column(name = "idEvento", insertable = false, updatable = false)
	Long idEvento	
	LocalDate fechaYHora	
}