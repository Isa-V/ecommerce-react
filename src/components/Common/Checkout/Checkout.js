import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "../Checkout/checkout.css";
import { useNavigate } from "react-router-dom";

const regionsAndCommunes = {
  "Región de Arica y Parinacota": ["Arica", "Putre"],
  "Región de Tarapacá": ["Iquique", "Pozo Almonte"],
  "Región de Antofagasta": ["Antofagasta", "Calama", "Tocopilla"],
  "Región de Atacama": ["Copiapó", "Vallenar", "Huasco"],
  "Región de Coquimbo": ["La Serena", "Coquimbo", "Illapel", "Ovalle"],
  "Región de Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "Concón"],
  "Región del Libertador General Bernardo O'Higgins": [
    "Rancagua",
    "San Fernando",
    "Santa Cruz",
  ],
  "Región del Maule": ["Talca", "Curicó", "Linares"],
  "Región de Ñuble": ["Chillán", "Chillán Viejo", "Bulnes"],
  "Región del Biobío": ["Concepción", "Chillán", "Los Ángeles", "Talcahuano"],
  "Región de La Araucanía": ["Temuco", "Padre Las Casas", "Villarrica"],
  "Región de Los Ríos": ["Valdivia", "La Unión", "Los Lagos"],
  "Región de Los Lagos": ["Puerto Montt", "Osorno", "Ancud"],
  "Región de Aysén del General Carlos Ibáñez del Campo": [
    "Coyhaique",
    "Puerto Aysén",
  ],
  "Región de Magallanes y de la Antártica Chilena": [
    "Punta Arenas",
    "Puerto Natales",
  ],
  "Región Metropolitana": ["Santiago", "Puente Alto", "Maipú"],
};

const CheckoutForm = () => {
  const { cart, total, setOrderDetails } = useContext(CartContext);
  const [errors, setErrors] = useState({});
  const [communes, setCommunes] = useState([]);

  const [OrderSummary, setOrderSummary] = useState({
    firstName: "",
    lastName: "",
    email: "",
    region: "",
    comuna: "",
    address: "",
    postalCode: "",
    orderNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderSummary((OrderSummary) => ({
      ...OrderSummary,
      [name]: value,
    }));
  };  

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setOrderSummary((OrderSummary) => ({
      ...OrderSummary,
      region,
      comuna: "",
    }));
    setCommunes(regionsAndCommunes[region] || []);
  };

  const handleComunaChange = (e) => {
    const comuna = e.target.value;
    setOrderSummary((OrderSummary) => ({
      ...OrderSummary,
      comuna,
    }));
  };

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 100000);
  };

  const saveOrderData = async () => {
    const orderNumber = generateOrderNumber();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const updatedOrderSummary = {
      ...OrderSummary,
      orderNumber: orderNumber,
    };

    setOrderSummary(updatedOrderSummary);
  
    return orderNumber;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };


  const validateForm = () => {
    const newErrors = {};
  
    if (!OrderSummary.firstName) {
      newErrors.firstName = "Este campo es obligatorio";
    }
  
    if (!OrderSummary.lastName) {
      newErrors.lastName = "Este campo es obligatorio";
    }
    if (!OrderSummary.email) {
      newErrors.email = "Este campo es obligatorio";
    } else if (!isValidEmail(OrderSummary.email)) {
      newErrors.email = "Ingresa un formato de correo electrónico válido";
    }

    if (!OrderSummary.region) {
      newErrors.region = "Este campo es obligatorio";
    }

    if (!OrderSummary.comuna) {
      newErrors.comuna = "Este campo es obligatorio";
    }

    if (!OrderSummary.address) {
      newErrors.address = "Este campo es obligatorio";
    }

    if (!OrderSummary.postalCode) {
      newErrors.postalCode = "Este campo es obligatorio";
    }
  
    return newErrors;
  };


  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    try {
      const orderNumber = await saveOrderData();
      
      const orderDetails = {
        OrderSummary: {
          ...OrderSummary,
          orderNumber: orderNumber,
        },
        cart,
        total: total(),
        orderNumber,
      };
      
      setOrderDetails(orderDetails);
      console.log(orderDetails);
      navigate("/order-summary");
    } catch (error) {
      console.error("Error al guardar los datos de la orden:", error);
    }
  };

  return (
    <div>
      <h2>Ingresa tus datos y finaliza tu compra:</h2>
      <div className="checkoutContainer">
        <form onSubmit={handleSubmit} className="checkoutForm">
          <h3>Datos personales</h3>
          <label>
            Nombre:
            <input
              type="text"
              name="firstName"
              value={OrderSummary.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="lastName"
              value={OrderSummary.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={OrderSummary.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <h3>Dirección de Envío</h3>
          <label>
            Región:
            <select
              name="region"
              value={OrderSummary.region}
              onChange={handleRegionChange}
            >
              <option value="">Selecciona una región</option>
              {Object.keys(regionsAndCommunes).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            {errors.region && <p className="error">{errors.region}</p>}
          </label>
          <label>
            Comuna:
            <select
              name="comuna"
              value={OrderSummary.comuna}
              onChange={handleComunaChange}
            >
              <option value="">Selecciona una comuna</option>
              {communes.map((comuna) => (
                <option key={comuna} value={comuna}>
                  {comuna}
                </option>
              ))}
            </select>
            {errors.comuna && <p className="error">{errors.comuna}</p>}
          </label>
          <label>
            Calle y número:
            <input
              type="text"
              name="address"
              value={OrderSummary.address}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Código Postal:
            <input
              type="number"
              name="postalCode"
              value={OrderSummary.postalCode}
              onChange={handleInputChange}
            />
          </label>
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}

          <button type="submit" onClick={handleSubmit}>
            Realizar Pedido
          </button>
        </form>

        <div className="checkoutSummary">
          <h3>Resumen de la Compra</h3>
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - Cant. {item.quantity}
                </li>
              ))}
            </ul>
            <p>Total a Pagar: ${total()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
