import { useState } from "react";
import faqIcon from "../assets/faq.png";
import faqNaranja from "../assets/faqnaranja-removebg-preview.png";
import faqVerde from "../assets/faqverde-removebg-preview.png";

function Faqs() {
  return (
    <div className="container py-5">
      <h1 className="d-flex align-items-center">
        <img src={faqIcon} alt="FAQS" style={{ height: 28, marginRight: 8 }} />
        FAQS
      </h1>

      <p>Página de preguntas frecuentes</p>

      <div className="mt-4">
        <div
          className="d-block"
          style={{
            background: "#0d6efd",
            color: "#ffffff",
            padding: "10px 16px",
            borderRadius: 6,
            width: "100%",
            maxWidth: "900px",
          }}
        >
          Preguntas Frecuentes
        </div>

        <div
          className="mt-2"
          style={{
            background: "#ffffff",
            padding: 16,
            borderRadius: 6,
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            maxWidth: "900px",
          }}
        >
          <FAQItem
            question={"¿Qué es una boleta electrónica?"}
            answer={"Las boletas electrónicas de ventas y servicios son un documento digital que reemplaza a las anteriores boletas manuales de talonario. Estas se envían de manera automática al registro de ventas del SII, por lo que ya no es necesario hacer una suma del total de boletas emitidas en el mes para realizar la declaración de impuestos. Tienen las mismas atribuciones que la boleta manual, pero ahora en lugar de un talonario de imprenta, es necesario un software (aplicación) para poder emitirlas. Las boletas manuales dejaron de ser un documento válido desde el 01/03/2021 para todos los contribuyentes. (Resolución exenta N°74 del SII)."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Qué se necesita para emitir boletas electrónicas de ventas y servicios?"}
            answer={"Tener iniciación de actividades en el SII con una actividad de primera categoría, ya sea como persona natural o jurídica (empresas).Nosotros nos encargaremos de todo el proceso de certificación, para lo cual te pediremos una serie de datos que el SII nos solicita para realizar el trámite."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Qué es una firma electrónica?"}
            answer={"Una firma electrónica, también llamado certificado digital, es un documento virtual que acredita tu identidad ante el SII y otros organismos. También puede ser utilizada para firmar otros documentos sin la necesidad de hacerlo a mano alzada."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Es necesaria una firma electrónica para emitir boletas?"}
            answer={"Sí, nuestro sistema requiere de una firma electrónica para sincronizarse con el SII y realizar el envío y validación de documentos electrónicos."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Cuánto se demora la puesta en marcha?"}
            answer={"Dependiendo de los tiempos de respuesta del SII, puede tomar entre 3 días hábiles a una semana. Este plazo se podría prolongar en caso de contar con situaciones pendientes ante el SII que impidan la autorización de folios. (verificación de actividades, verificación de domicilio, declaraciones de impuestos pendientes, etc.)Recomendamos proporcionarnos toda la información y/o documentación necesaria para agilizar el proceso de certificación ante el SII."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Cómo contrato con Sipymex?"}
            answer={"Es muy simple, solo compra directamente en nuestra página web y rellena el formulario con tus datos, o contáctanos para que un ejecutivo resuelva todas tus dudas. Nosotros nos encargaremos de toda la tramitación de la certificación ante el SII."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Si se corta el internet, puedo seguir vendiendo?"}
            answer={"Sí, una característica de nuestra solución es la posibilidad de emisión de boleta electrónica sin conexión a internet. Cabe destacar que sistemas de pagos con tarjetas y sistemas de control de inventario en la nube dependen de la conexión a internet para funcionar, es por esto que se incluye de forma gratuita un chip de internet 4G* al contratar un plan con el equipo Sunmi P2.Otros dispositivos, como el PAX A910 o el Sumup Solo, incorporan también de forma gratuita un chip de internet 4G.**La disponibilidad de servicios de red celular depende de la infraestructura instalada por las diferentes compañías de telecomunicaciones en el área geográfica en donde se utilizan los dispositivos."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Por qué si compro el POS debo seguir pagando mensual?"}
            answer={"Al comprar un equipo POS se adquiere una herramienta física que permite la impresión en papel de las boletas electrónicas, sin embargo, para que estas boletas puedan ser generadas y enviadas al SII, se requiere de un software (aplicación) que está sujeto a un plan de suscripción mensual.Esta suscripción mensual incorpora además otros beneficios, como la entrega de rollos de papel térmico, asesoría y soporte técnico, visitas en terreno al local, o el servicio de internet según el plan contratado."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Puedo operar con los equipos que ya tengo?"}
            answer={"Sí, siempre y cuando estos sean compatibles. Nuestro sistema puede ser utilizado en smartphone con sistema operativo Android v6.0 o superior conectado a una impresora bluetooth de 58mm compatible, y en computadores Windows o Mac."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Puedo desistir del contrato en cualquier momento?"}
            answer={"Sí, nuestros clientes prefieren Sipymex porque les brinda una solución fácil, útil y eficaz para el desarrollo de sus negocios, por lo tanto, la utilizan porque les sirve y les otorga valor agregado. Tratamos de que nuestros clientes se sientan conformes con nuestro servicio, por lo que trabajamos constantemente en mejorar e innovar soluciones para el desarrollo de las Pymes."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Debo emitir una boleta exenta para la venta de cigarrillos?"}
            answer={"No, un contribuyente minorista no debe emitir boletas por las ventas de cigarros, cigarrillos y tabacos manufacturados a sus consumidores, por ser la empresa fabricante o importadora la que retiene y paga el impuesto al fisco, según lo dispuesto en la Resolución Exenta N° 22, de 2007, y en la Resolución Exenta N° 1110, de 1978 del SII."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Debo emitir una boleta exenta para la venta de gas?"}
            answer={"No, los comerciantes minoristas de gas licuado en cilindros no están obligados a emitir boletas por sus ventas a consumidores finales, según lo dispuesto en la Resolución Exenta N° 1.087, de 1978, y en la Resolución Exenta N° 1.110, de 1978."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Necesito tener cuenta en un banco específico para recibir pagos con tarjetas?"}
            answer={"No, puede utilizar una cuenta bancaria de cualquier banco chileno. Únicamente debe tener en cuenta las restricciones operacionales y condiciones comerciales de la cuenta bancaria que va a utilizar, ya que, al superar los límites de saldo o los montos máximos y mínimos por transferencia, su abono no podrá ser realizado, por lo que de forma imperativa deberá configurar una nueva cuenta bancaria que no presente dichas restricciones."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"Si vendo con tarjetas ¿debo imprimir una boleta?"}
            answer={"Dependiendo de la declaración de modelo de emisión registrada en el SII y del proveedor de pagos con tarjetas que utilices, deberás o no emitir una boleta electrónica.Si tu declaración de modelo de emisión es: “siempre emito boletas de ventas y servicios electrónicas, aun cuando recibo métodos de pago electrónico”, se deberá emitir una boleta electrónica por cada venta, independiente del método de pago.Si tu declaración de modelo de emisión es: “No emito boletas de ventas y servicios electrónicas cuando recibo métodos de pagos electrónicos”, o no se ha realizado todavía la declaración en el SII, el comprobante o voucher actuará como reemplazo de la boleta. (únicamente para proveedores de pagos con tarjetas que cuenten con la capacidad de informar las ventas al SII).Para proveedores de pagos con tarjetas que no cuenten con la capacidad de informar al SII de las ventas procesadas (sumup, compre aquí, etc.) se deberá emitir por cada venta una boleta electrónica."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"Un pago con tarjeta fue rechazado, pero a mi cliente se le descontó el dinero ¿debo devolver lo cobrado en efectivo o entregar la mercadería?"}
            answer={"Si una transacción con tarjeta fue rechazada, pero aún así a su cliente se le descontó de su cuenta el monto cobrado, bajo ninguna circunstancia se debe realizar devoluciones de dinero en efectivo o hacer entrega de mercadería; El banco emisor de la tarjeta de su cliente se encargará de restituir los fondos cobrados por error de forma automática, y los plazos dependen de cada banco en cuestión. Su cliente puede estar tranquilo, si la transacción fue rechazada, cualquier monto cobrado por error será restituido de forma íntegra.Todo sistema informático es propenso a sufrir inestabilidades o fallos imprevistos, por lo que recomendamos a todos nuestros clientes que den aviso inmediato en nuestros canales de atención si experimentan este tipo de situaciones, de esta forma podremos revisar a más detalle su caso y/o reportar algún fallo generalizado."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"Al utilizar boleta electrónica ¿Puedo prescindir de mi contador?"}
            answer={"Si bien es decisión de cada comercio, un contador es un apoyo fundamental en el ejercicio de su negocio, no solo por el pago mensual de impuestos, sino para otros asuntos orientativos que le ayudarán a desempeñarse mejor en el rubro y evitar desafortunados impases ocasionados por el desconocimiento de las nuevas legislaciones."}
          />

          <div style={{ height: 16 }} />

          <FAQItem
            question={"¿Qué necesito para recibir pagos con tarjetas?"}
            answer={"Tener una cuenta corriente, vista o de ahorro en un banco chileno y un equipo preparado para esta característica, como el Sunmi P2, PAX A910 Redelcom o cualquier modelo de Sumup."}
          />
        </div>
      </div>
    </div>
  );
}

export default Faqs;

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src={open ? faqVerde : faqNaranja} alt="icon" style={{ height: 22 }} />
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            color: open ? "#198754" : "#ff8c00",
            fontSize: 16,
            cursor: "pointer",
            textAlign: "left",
            flex: 1,
          }}
        >
          {question}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: 12 }}>
          <div>
            <p style={{ margin: 0, color: "#6c757d" }}>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
