import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Casa Magnolia, Laboratorio Floral.",
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-magnolia-cream pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl text-magnolia-green font-light mb-12">
          Aviso Legal
        </h1>

        <div className="prose-magnolia space-y-8 font-body text-base leading-relaxed text-magnolia-ink/80">
          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Datos identificativos
            </h2>
            <p>
              En cumplimiento del deber de informacion recogido en el articulo 10
              de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
              la Informacion y del Comercio Electronico, a continuacion se
              reflejan los siguientes datos:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li>
                <strong>Titular:</strong>{" "}
                {/* <!-- TODO: completar con datos reales --> */}
                Lola Gonzalez Gomez-Pallete y Manuela Gil Vargas
              </li>
              <li>
                <strong>NIF:</strong>{" "}
                {/* <!-- TODO: completar con datos reales --> */}
                [Pendiente]
              </li>
              <li>
                <strong>Domicilio:</strong>{" "}
                {/* <!-- TODO: completar con datos reales --> */}
                [Pendiente], Bilbao, Bizkaia
              </li>
              <li>
                <strong>Email:</strong> hola@casamagnolia.com
              </li>
              <li>
                <strong>Sitio web:</strong> casamagnolia.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Objeto
            </h2>
            <p>
              El presente sitio web tiene por objeto facilitar informacion sobre
              los servicios de diseno floral, talleres, suscripciones y demas
              actividades ofrecidas por Casa Magnolia.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografias,
              graficos, imagenes, iconos, tecnologia, software, enlaces y demas
              contenidos audiovisuales o sonoros, asi como su diseno grafico y
              codigos fuente, son propiedad intelectual de Casa Magnolia o de
              terceros, sin que puedan entenderse cedidos al usuario ninguno de
              los derechos de explotacion sobre los mismos mas alla de lo
              estrictamente necesario para el correcto uso del sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Condiciones de uso
            </h2>
            <p>
              El usuario se compromete a hacer un uso adecuado de los contenidos
              y servicios que Casa Magnolia ofrece a traves de su sitio web y a
              no emplearlos para incurrir en actividades ilicitas o contrarias a
              la buena fe y al ordenamiento legal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Legislacion aplicable y jurisdiccion
            </h2>
            <p>
              Para la resolucion de todas las controversias o cuestiones
              relacionadas con el presente sitio web o de las actividades en el
              desarrolladas, sera de aplicacion la legislacion espanola, a la que
              se someten expresamente las partes, siendo competentes para la
              resolucion de todos los conflictos derivados o relacionados con su
              uso los Juzgados y Tribunales de Bilbao.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
