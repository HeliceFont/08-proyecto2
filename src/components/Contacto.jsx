

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      <form className="contact" action="mailto:camacho485@gmail.com">
        <input type="text" placeholder="Nombre"/>
        <input type="text" placeholder="Apellidos"/>
        <input type="text" placeholder="Correo"/>
        <textarea placeholder="Motivo de contacto"></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}
