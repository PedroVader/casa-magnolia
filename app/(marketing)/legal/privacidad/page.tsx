import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description: "Politica de privacidad de Casa Magnolia, Laboratorio Floral.",
};

export default function PrivacidadPage() {
  return (
    <div className="bg-magnolia-cream pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl text-magnolia-green font-light mb-12">
          Politica de Privacidad
        </h1>

        <div className="space-y-8 font-body text-base leading-relaxed text-magnolia-ink/80">
          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Responsable del tratamiento
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <strong>Responsable:</strong>{" "}
                {/* <!-- TODO: completar con datos reales --> */}
                Lola Gonzalez Gomez-Pallete y Manuela Gil Vargas
              </li>
              <li>
                <strong>NIF:</strong> [Pendiente]
              </li>
              <li>
                <strong>Direccion:</strong> [Pendiente], Bilbao, Bizkaia
              </li>
              <li>
                <strong>Email:</strong> hola@casamagnolia.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Finalidad del tratamiento
            </h2>
            <p>Los datos personales recogidos se tratan con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Gestionar las consultas realizadas a traves del formulario de contacto.
              </li>
              <li>
                Gestionar las reservas de talleres y los pagos asociados.
              </li>
              <li>
                Gestionar las suscripciones del servicio de flores para hoteles y restaurantes.
              </li>
              <li>
                Enviar comunicaciones relacionadas con los servicios contratados.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Legitimacion
            </h2>
            <p>
              La base legal para el tratamiento de los datos es el consentimiento
              del usuario al rellenar y enviar el formulario de contacto, asi como
              la ejecucion de un contrato en el caso de reservas de talleres y
              suscripciones.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Conservacion de datos
            </h2>
            <p>
              Los datos se conservaran durante el tiempo necesario para cumplir con
              la finalidad para la que se recogieron y para determinar las posibles
              responsabilidades que se pudieran derivar de dicha finalidad y del
              tratamiento de los datos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Derechos del usuario
            </h2>
            <p>
              El usuario puede ejercer los siguientes derechos dirigiendose a
              hola@casamagnolia.com:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Derecho de acceso a sus datos personales.</li>
              <li>Derecho de rectificacion de datos inexactos.</li>
              <li>Derecho de supresion de sus datos.</li>
              <li>Derecho a la limitacion del tratamiento.</li>
              <li>Derecho a la portabilidad de los datos.</li>
              <li>Derecho de oposicion al tratamiento.</li>
            </ul>
            <p className="mt-3">
              Asimismo, tiene derecho a presentar una reclamacion ante la Agencia
              Espanola de Proteccion de Datos (www.aepd.es).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Seguridad
            </h2>
            <p>
              Casa Magnolia adopta las medidas tecnicas y organizativas necesarias
              para garantizar la seguridad de los datos personales y evitar su
              alteracion, perdida, tratamiento o acceso no autorizado.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
