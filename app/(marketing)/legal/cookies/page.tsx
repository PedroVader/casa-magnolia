import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookies",
  description: "Politica de cookies de Casa Magnolia, Laboratorio Floral.",
};

export default function CookiesPage() {
  return (
    <div className="bg-magnolia-cream pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl text-magnolia-green font-light mb-12">
          Politica de Cookies
        </h1>

        <div className="space-y-8 font-body text-base leading-relaxed text-magnolia-ink/80">
          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Que son las cookies
            </h2>
            <p>
              Las cookies son pequenos archivos de texto que los sitios web
              almacenan en el dispositivo del usuario cuando este los visita. Se
              utilizan para recordar preferencias, mejorar la experiencia de
              navegacion y recopilar informacion estadistica.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Cookies utilizadas en este sitio
            </h2>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-magnolia-green/20">
                    <th className="text-left py-3 pr-4 font-body tracking-wide uppercase text-magnolia-ink/50 text-xs">
                      Cookie
                    </th>
                    <th className="text-left py-3 pr-4 font-body tracking-wide uppercase text-magnolia-ink/50 text-xs">
                      Tipo
                    </th>
                    <th className="text-left py-3 pr-4 font-body tracking-wide uppercase text-magnolia-ink/50 text-xs">
                      Duracion
                    </th>
                    <th className="text-left py-3 font-body tracking-wide uppercase text-magnolia-ink/50 text-xs">
                      Finalidad
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-magnolia-ink/10">
                  <tr>
                    <td className="py-3 pr-4">Cookies tecnicas</td>
                    <td className="py-3 pr-4">Propias</td>
                    <td className="py-3 pr-4">Sesion</td>
                    <td className="py-3">
                      Necesarias para el funcionamiento basico del sitio web.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Cookies de Stripe</td>
                    <td className="py-3 pr-4">Terceros</td>
                    <td className="py-3 pr-4">Variable</td>
                    <td className="py-3">
                      Necesarias para el procesamiento seguro de pagos.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Como gestionar las cookies
            </h2>
            <p>
              El usuario puede configurar su navegador para rechazar las cookies o
              para que le avise cuando un sitio web intente instalar una cookie.
              Los principales navegadores ofrecen esta opcion en sus ajustes de
              privacidad.
            </p>
            <p className="mt-3">
              La desactivacion de cookies puede afectar al funcionamiento de
              algunas funcionalidades del sitio, como el proceso de pago.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-magnolia-green font-light mb-4">
              Actualizacion de la politica
            </h2>
            <p>
              Casa Magnolia se reserva el derecho de modificar esta politica de
              cookies para adaptarla a novedades legislativas o cambios en las
              funcionalidades del sitio web. Los cambios se publicaran en esta
              misma pagina.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
