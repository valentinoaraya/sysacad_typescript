interface FacultadAtributos {
  nombre: string;
  abreviatura: string;
  directorio: string;
  sigla: string;
  codigoPostal: string;
  ciudad: string;
  domicilio: string;
  telefono: string;
  contacto: string;
  email: string;
}
class Facultad {
  public nombre: string;
  public abreviatura: string;
  public directorio: string;
  public sigla: string;
  public codigoPostal: string;
  public ciudad: string;
  public domicilio: string;
  public telefono: string;
  public contacto: string;
  public email: string;

  constructor(params: FacultadAtributos) {
    this.nombre = params.nombre;
    this.abreviatura = params.abreviatura;
    this.directorio = params.directorio;
    this.sigla = params.sigla;
    this.codigoPostal = params.codigoPostal;
    this.ciudad = params.ciudad;
    this.domicilio = params.domicilio;
    this.telefono = params.telefono;
    this.contacto = params.contacto;
    this.email = params.email;
  }
}
