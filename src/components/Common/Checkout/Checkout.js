import React, { useState } from "react";

const regionsAndCommunes = {
    "Región de Arica y Parinacota": ["Arica", "Putre"],
    "Región de Tarapacá": ["Iquique", "Pozo Almonte"],
    "Región de Antofagasta": ["Antofagasta", "Calama", "Tocopilla"],
    "Región de Atacama": ["Copiapó", "Vallenar", "Huasco"],
    "Región de Coquimbo": ["La Serena", "Coquimbo", "Illapel", "Ovalle"],
    "Región de Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "Concón"],
    "Región del Libertador General Bernardo O'Higgins": ["Rancagua", "San Fernando", "Santa Cruz"],
    "Región del Maule": ["Talca", "Curicó", "Linares"],
    "Región de Ñuble": ["Chillán", "Chillán Viejo", "Bulnes"],
    "Región del Biobío": ["Concepción", "Chillán", "Los Ángeles", "Talcahuano"],
    "Región de La Araucanía": ["Temuco", "Padre Las Casas", "Villarrica"],
    "Región de Los Ríos": ["Valdivia", "La Unión", "Los Lagos"],
    "Región de Los Lagos": ["Puerto Montt", "Osorno", "Ancud"],
    "Región de Aysén del General Carlos Ibáñez del Campo": ["Coyhaique", "Puerto Aysén"],
    "Región de Magallanes y de la Antártica Chilena": ["Punta Arenas", "Puerto Natales"],
    "Región Metropolitana": ["Santiago", "Puente Alto", "Maipú"],
  };  

const CheckoutForm = () => {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    direccion: "",
    region: "",
    comuna: "",
    codigoPostal: "",
  });

 const [crearCuenta, setCrearCuenta] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [communes, setCommunes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((direccionEnvio) => ({
      ...direccionEnvio,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setCrearCuenta(e.target.checked);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setShippingAddress((direccionEnvio) => ({
      ...direccionEnvio,
      region,
      comuna: "",
    }));
    setCommunes(regionsAndCommunes[region] || []);
  };

  const handleComunaChange = (e) => {
    const comuna = e.target.value;
    setShippingAddress((direccionEnvio) => ({
      ...direccionEnvio,
      comuna,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dirección de Envío:", shippingAddress);
    console.log("Crear Cuenta:", crearCuenta);
    // Aquí podrías enviar los datos al servidor o realizar otras acciones
  };


  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <h3>Datos personales</h3>
        <label>
          Nombre:
          <input
            type="text"
            name="firstName"
            value={shippingAddress.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="lastName"
            value={shippingAddress.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
            Correo electrónico:
            <input></input>
        </label>

        <h3>Dirección de Envío</h3>
        <label>
          Región:
          <select name="region" value={shippingAddress.region} onChange={handleRegionChange}>
            <option value="">Selecciona una región</option>
            {Object.keys(regionsAndCommunes).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <label>
          Comuna:
          <select name="comuna" value={shippingAddress.comuna} onChange={handleComunaChange}>
            <option value="">Selecciona una comuna</option>
            {communes.map((comuna) => (
              <option key={comuna} value={comuna}>
                {comuna}
              </option>
            ))}
          </select>
        </label>
        <label>
          Calle y número:
          <input
            type="text"
            name="direccion"
            value={shippingAddress.direccion}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Código Postal:
          <input
            type="text"
            name="codigoPostal"
            value={shippingAddress.codigoPostal}
            onChange={handleInputChange}
          />
        </label>

        <h3>Crear Cuenta</h3>
        <label>
          <input
            type="checkbox"
            checked={crearCuenta}
            onChange={handleCheckboxChange}
          />
          Crear una cuenta para un proceso de pago más rápido la próxima vez
        </label>

        <button type="submit">Realizar Pedido</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
