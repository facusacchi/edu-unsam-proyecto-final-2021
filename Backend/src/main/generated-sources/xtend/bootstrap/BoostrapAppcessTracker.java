package bootstrap;

import domain.Administrador;
import domain.Evento;
import domain.Supervisor;
import domain.Ubicacion;
import org.eclipse.xtext.xbase.lib.ObjectExtensions;
import org.eclipse.xtext.xbase.lib.Procedures.Procedure1;
import org.uqbar.arena.bootstrap.Bootstrap;

@SuppressWarnings("all")
public class BoostrapAppcessTracker implements Bootstrap {
  private Administrador mcabeledo;
  
  private Administrador bmenchon;
  
  private Administrador fsacchi;
  
  private Administrador cmaggiorano;
  
  private Administrador dsalamida;
  
  private Administrador mcuellar;
  
  private Administrador cmaccarrone;
  
  private Supervisor pepe;
  
  private Supervisor usuarioHabilitado;
  
  private Ubicacion tornavias;
  
  private Ubicacion facultadSociales;
  
  private Evento entrada;
  
  private Evento salida;
  
  public void inicializarUsuariosAdministradores() {
    Administrador _administrador = new Administrador();
    final Procedure1<Administrador> _function = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("María Claudia");
        it.setApellido("Abeledo");
        it.setApodo("mcabeledo");
      }
    };
    Administrador _doubleArrow = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador, _function);
    this.mcabeledo = _doubleArrow;
    Administrador _administrador_1 = new Administrador();
    final Procedure1<Administrador> _function_1 = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("Barbara");
        it.setApellido("Menchon");
        it.setApodo("bmenchon");
      }
    };
    Administrador _doubleArrow_1 = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador_1, _function_1);
    this.bmenchon = _doubleArrow_1;
    Administrador _administrador_2 = new Administrador();
    final Procedure1<Administrador> _function_2 = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("Facundo");
        it.setApellido("Sacchi");
        it.setApodo("fsacchi");
      }
    };
    Administrador _doubleArrow_2 = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador_2, _function_2);
    this.fsacchi = _doubleArrow_2;
    Administrador _administrador_3 = new Administrador();
    final Procedure1<Administrador> _function_3 = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("Cristian");
        it.setApellido("Maggiorano");
        it.setApodo("cmaggiorano");
      }
    };
    Administrador _doubleArrow_3 = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador_3, _function_3);
    this.cmaggiorano = _doubleArrow_3;
    Administrador _administrador_4 = new Administrador();
    final Procedure1<Administrador> _function_4 = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("Diego");
        it.setApellido("Salamida");
        it.setApodo("dsalamida");
      }
    };
    Administrador _doubleArrow_4 = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador_4, _function_4);
    this.dsalamida = _doubleArrow_4;
    Administrador _administrador_5 = new Administrador();
    final Procedure1<Administrador> _function_5 = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("Miguel");
        it.setApellido("Cuellar");
        it.setApodo("mcuellar");
      }
    };
    Administrador _doubleArrow_5 = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador_5, _function_5);
    this.mcuellar = _doubleArrow_5;
    Administrador _administrador_6 = new Administrador();
    final Procedure1<Administrador> _function_6 = new Procedure1<Administrador>() {
      public void apply(final Administrador it) {
        it.setNombre("Carlos");
        it.setApellido("Maccarrone");
        it.setApodo("cmaccarrone");
      }
    };
    Administrador _doubleArrow_6 = ObjectExtensions.<Administrador>operator_doubleArrow(_administrador_6, _function_6);
    this.cmaccarrone = _doubleArrow_6;
  }
  
  public void inicializarUsuariosSupervisores() {
    Supervisor _supervisor = new Supervisor();
    final Procedure1<Supervisor> _function = new Procedure1<Supervisor>() {
      public void apply(final Supervisor it) {
        it.setNombre("Pedro");
        it.setApellido("Perez");
        it.setApodo("pepe");
      }
    };
    Supervisor _doubleArrow = ObjectExtensions.<Supervisor>operator_doubleArrow(_supervisor, _function);
    this.pepe = _doubleArrow;
    Supervisor _supervisor_1 = new Supervisor();
    final Procedure1<Supervisor> _function_1 = new Procedure1<Supervisor>() {
      public void apply(final Supervisor it) {
        it.setNombre("Supervisor");
        it.setApellido("Ya habilitado");
        it.setApodo("habilitado");
        it.setHabilitado(true);
      }
    };
    Supervisor _doubleArrow_1 = ObjectExtensions.<Supervisor>operator_doubleArrow(_supervisor_1, _function_1);
    this.usuarioHabilitado = _doubleArrow_1;
  }
  
  public void inicializarUbicaciones() {
    Ubicacion _ubicacion = new Ubicacion();
    final Procedure1<Ubicacion> _function = new Procedure1<Ubicacion>() {
      public void apply(final Ubicacion it) {
        it.setNombre("Tornavías");
      }
    };
    Ubicacion _doubleArrow = ObjectExtensions.<Ubicacion>operator_doubleArrow(_ubicacion, _function);
    this.tornavias = _doubleArrow;
    Ubicacion _ubicacion_1 = new Ubicacion();
    final Procedure1<Ubicacion> _function_1 = new Procedure1<Ubicacion>() {
      public void apply(final Ubicacion it) {
        it.setNombre("Facultad Ciencias Sociales");
      }
    };
    Ubicacion _doubleArrow_1 = ObjectExtensions.<Ubicacion>operator_doubleArrow(_ubicacion_1, _function_1);
    this.facultadSociales = _doubleArrow_1;
  }
  
  public void inicializarEventos() {
    Evento _evento = new Evento();
    final Procedure1<Evento> _function = new Procedure1<Evento>() {
      public void apply(final Evento it) {
        it.setNombre("Entrada");
      }
    };
    Evento _doubleArrow = ObjectExtensions.<Evento>operator_doubleArrow(_evento, _function);
    this.entrada = _doubleArrow;
    Evento _evento_1 = new Evento();
    final Procedure1<Evento> _function_1 = new Procedure1<Evento>() {
      public void apply(final Evento it) {
        it.setNombre("Salida");
      }
    };
    Evento _doubleArrow_1 = ObjectExtensions.<Evento>operator_doubleArrow(_evento_1, _function_1);
    this.salida = _doubleArrow_1;
  }
  
  public boolean isPending() {
    return true;
  }
  
  public void run() {
    this.inicializarUsuariosAdministradores();
    this.inicializarUbicaciones();
    this.inicializarEventos();
  }
}
