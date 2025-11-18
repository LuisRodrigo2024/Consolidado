// Importamos todos los tipos unificados desde types.ts
import { 
  // Tipos de Abastecimiento
  Provider, Product, Pedido, ProductDefinition, SolicitudCotizacion, OrdenCompra, HorarioOcupado, Incidencia,
  // Tipos de Clientes
  Client, Maestro, Sale, ChartData, Canje, Contact, Address, Premio, Report 
} from './types';

// ============================================================================
// 1. DATOS DE ABASTECIMIENTO & LOGÍSTICA
// ============================================================================

export const PRODUCT_TYPES: string[] = [
    'Herramientas Manuales',
    'Herramientas Eléctricas',
    'Pinturas y Acabados',
    'Tornillería y Fijaciones',
    'Materiales de Construcción',
    'Electricidad',
    'Gasfitería',
];

export const UNIDADES_DE_MEDIDA: string[] = [
    'UNIDAD', 'PAQUETE', 'SACO', 'CAJA', 'ROLLO', 'LATA', 'BOTELLA', 'm', 'Kg', 'L', 'm²',
];

export const PRODUCTS: ProductDefinition[] = [
    { nombre: 'Fierro Corrugado 1/4" x 9m', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Varillas Corrugadas', marca: 'Aceros Arequipa', unidad: 'Unidad' },
    { nombre: 'Fierro Corrugado 3/8" x 9m', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Varillas Corrugadas', marca: 'Aceros Arequipa', unidad: 'Unidad' },
    { nombre: 'Fierro Corrugado 1/2" x 9m', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Varillas Corrugadas', marca: 'Aceros Arequipa', unidad: 'Unidad' },
    { nombre: 'Alambre Negro Recocido N°16', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Alambres', marca: 'Genérico', unidad: 'Rollo 1kg' },
    { nombre: 'Taladro Percutor 500W 220V', rubro: 'Herramientas', familia: 'Herramientas Eléctricas', clase: 'Taladros', marca: 'Bosch', unidad: 'Unidad' },
    { nombre: 'Taladro Inalámbrico 18V', rubro: 'Herramientas', familia: 'Herramientas Eléctricas', clase: 'Taladros', marca: 'Makita', unidad: 'Unidad' },
    { nombre: 'Martillo de Carpintero', rubro: 'Herramientas', familia: 'Herramientas Manuales', clase: 'Martillos', marca: 'Stanley', unidad: 'Unidad' },
    { nombre: 'Grifo Monocomando Cromado Pico Alto', rubro: 'Plomería', familia: 'Grifería', clase: 'Grifos de Cocina', marca: 'Vainsa', unidad: 'Unidad' },
    { nombre: 'Pintura Látex Blanco', rubro: 'Pinturas y Acabados', familia: 'Pinturas', clase: 'Látex', marca: 'CPP', unidad: 'Galón' },
    { nombre: 'Tornillos para Madera 1"', rubro: 'Fijaciones', familia: 'Tornillería', clase: 'Tornillos para Madera', marca: 'Genérico', unidad: 'Caja x 100' },
    { nombre: 'Bolsa de Cemento Sol', rubro: 'Materiales de Construcción', familia: 'Cementos y Morteros', clase: 'Cemento Portland', marca: 'Sol', unidad: 'Bolsa 42.5kg' },
    { nombre: 'Cable Eléctrico Indeco #14', rubro: 'Electricidad', familia: 'Cables Eléctricos', clase: 'Cable THW', marca: 'Indeco', unidad: 'Rollo 100m' },
    { nombre: 'Tubo PVC 1/2 pulg.', rubro: 'Plomería', familia: 'Tuberías y Conexiones', clase: 'Tuberías PVC', marca: 'Matusita', unidad: 'Tira 3m' },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id_producto: 'PROD-01',
    nombre: 'Martillo de Carpintero',
    rubro: 'Herramientas',
    familia: 'Herramientas Manuales',
    clase: 'Martillos',
    marca: 'Stanley',
    unidad: 'UNIDAD',
    precio_base: '25.00',
  },
  {
    id_producto: 'PROD-02',
    nombre: 'Taladro Percutor 1/2"',
    rubro: 'Herramientas',
    familia: 'Herramientas Eléctricas',
    clase: 'Taladros',
    marca: 'Bosch',
    unidad: 'UNIDAD',
    precio_base: '250.00',
  },
  {
    id_producto: 'PROD-03',
    nombre: 'Pintura Látex Blanco',
    rubro: 'Pinturas y Acabados',
    familia: 'Pinturas',
    clase: 'Látex',
    marca: 'CPP',
    unidad: 'LATA',
    precio_base: '45.00',
  },
  {
    id_producto: 'PROD-04',
    nombre: 'Tornillos para Madera 1"',
    rubro: 'Fijaciones',
    familia: 'Tornillería',
    clase: 'Tornillos para Madera',
    marca: '',
    unidad: 'CAJA',
    precio_base: '8.50',
  },
  {
    id_producto: 'PROD-05',
    nombre: 'Bolsa de Cemento Sol',
    rubro: 'Materiales de Construcción',
    familia: 'Cementos',
    clase: 'Portland',
    marca: 'Sol',
    unidad: 'SACO',
    precio_base: '28.00',
  },
];

export const PROVIDERS_DATA: Provider[] = [
  {
    id: 'PROV-01',
    nombre: 'Aceros Arequipa',
    ruc: '20100035310',
    contacto: '998877665',
    razonSocial: 'Corporación Aceros Arequipa S.A.',
    direccion: 'Av. Enrique Meiggs 297, P.I. de Pisco',
    correo: 'ventas@aasa.com.pe',
    telefono: '998877665',
    whatsapp: '998877665',
    productos: [
      { producto: 'Fierro Corrugado 1/4" x 9m', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Varillas Corrugadas', marca: 'Aceros Arequipa', unidad: 'Unidad', precioUnitario: '15.50' },
      { producto: 'Fierro Corrugado 3/8" x 9m', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Varillas Corrugadas', marca: 'Aceros Arequipa', unidad: 'Unidad', precioUnitario: '34.80' },
    ],
  },
  {
    id: 'PROV-02',
    nombre: 'Stanley Tools Perú',
    ruc: '20552736125',
    contacto: '911223344',
    razonSocial: 'Black & Decker del Perú S.A.',
    direccion: 'Av. El Derby 254, Santiago de Surco',
    correo: 'contacto@stanleytools.pe',
    telefono: '911223344',
    whatsapp: '911223344',
    productos: [
      { producto: 'Martillo de Carpintero', rubro: 'Herramientas', familia: 'Herramientas Manuales', clase: 'Martillos', marca: 'Stanley', unidad: 'Unidad', precioUnitario: '22.00' },
      { producto: 'Taladro Percutor 500W 220V', rubro: 'Herramientas', familia: 'Herramientas Eléctricas', clase: 'Taladros', marca: 'Stanley', unidad: 'Unidad', precioUnitario: '235.00' },
      { producto: 'Tornillos para Madera 1"', rubro: 'Fijaciones', familia: 'Tornillería', clase: 'Tornillos para Madera', marca: 'Stanley', unidad: 'Caja x 100', precioUnitario: '8.00' },
    ],
  },
  {
    id: 'PROV-03',
    nombre: 'ACEROS DEL NORTE',
    ruc: '20456789123',
    contacto: '987654321',
    razonSocial: 'Aceros del Norte S.A.C.',
    direccion: 'Av. Industrial 123, Trujillo',
    correo: 'contacto@acerosdelnorte.com',
    telefono: '987654321',
    whatsapp: '987654321',
    productos: [
      { producto: 'Cable Eléctrico Indeco #14', rubro: 'Electricidad', familia: 'Cables Eléctricos', clase: 'Cable THW', marca: 'Indeco', unidad: 'Rollo 100m', precioUnitario: '180.00' },
      { producto: 'Tubo PVC 1/2 pulg.', rubro: 'Plomería', familia: 'Tuberías y Conexiones', clase: 'Tuberías PVC', marca: 'Matusita', unidad: 'Tira 3m', precioUnitario: '9.50' },
      { producto: 'Alambre Negro Recocido N°16', rubro: 'Materiales de Construcción', familia: 'Aceros de Construcción', clase: 'Alambres', marca: 'Genérico', unidad: 'Rollo 1kg', precioUnitario: '6.50' },
    ],
  },
   {
    id: 'PROV-04',
    nombre: 'Aceros del Sur',
    ruc: '20123456789',
    contacto: '912345678',
    razonSocial: 'Aceros del Sur S.A.',
    direccion: 'Av. El Sol 456, Arequipa',
    correo: 'ventas@acerosdelsur.com',
    telefono: '912345678',
    whatsapp: '912345678',
    productos: [],
  },
];

export const PEDIDOS_DATA: Pedido[] = [
    {
        id_pedido: 'PA-01',
        fecha_pedido: '28-07-2024',
        hora_pedido: '09:30',
        estado_pedido: 'Atendido',
        empleadoGenerador: {
            nombre: 'Carlos Santana',
            area: 'Almacén',
        },
        productos: [
            {
                nombre_producto: 'Bolsa de Cemento Sol',
                cantidad_requerida: 200,
                fecha_requerida: '01-08-2024',
                unidad_medida: 'Bolsa 42.5kg',
                tipo_destino: 'Interno',
                direccion: '',
            },
            {
                nombre_producto: 'Tubo PVC 1/2 pulg.',
                cantidad_requerida: 50,
                fecha_requerida: '02-08-2024',
                unidad_medida: 'Tira 3m',
                tipo_destino: 'Interno',
                direccion: '',
            },
        ],
    },
    {
        id_pedido: 'PA-02',
        fecha_pedido: '29-07-2024',
        hora_pedido: '11:00',
        estado_pedido: 'En Proceso',
        empleadoGenerador: {
            nombre: 'Ana Jimenez',
            area: 'Ventas',
        },
        productos: [
            {
                nombre_producto: 'Pintura Látex Blanco',
                cantidad_requerida: 25,
                fecha_requerida: '02-08-2024',
                unidad_medida: 'Galón',
                tipo_destino: 'Externo',
                direccion: 'Av. La Marina 2045, San Miguel',
            },
            {
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 5,
                fecha_requerida: '02-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
            },
        ],
    },
    {
        id_pedido: 'PA-03',
        fecha_pedido: '29-07-2024',
        hora_pedido: '14:15',
        estado_pedido: 'Pendiente',
        empleadoGenerador: {
            nombre: 'Luis Gonzales',
            area: 'Ventas',
        },
        productos: [
            {
                nombre_producto: 'Taladro Percutor 1/2"',
                cantidad_requerida: 5,
                fecha_requerida: '05-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Externo',
                direccion: 'Av. El Sol 123, Cusco',
            },
            {
                nombre_producto: 'Tornillos para Madera 1"',
                cantidad_requerida: 10,
                fecha_requerida: '05-08-2024',
                unidad_medida: 'Caja x 100',
                tipo_destino: 'Externo',
                direccion: 'Av. El Sol 123, Cusco',
            },
            {
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 2,
                fecha_requerida: '06-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
            },
        ],
    },
    {
        id_pedido: 'PA-04',
        fecha_pedido: '30-07-2024',
        hora_pedido: '10:00',
        estado_pedido: 'Revisado',
        empleadoGenerador: {
            nombre: 'Carlos Santana',
            area: 'Almacén',
        },
        productos: [
            {
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 15,
                fecha_requerida: '04-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
                estado_item: 'En Cotización',
            },
            {
                nombre_producto: 'Taladro Percutor 1/2"',
                cantidad_requerida: 3,
                fecha_requerida: '03-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
                estado_item: 'En Cotización',
            },
        ],
    },
    {
        id_pedido: 'PA-05',
        fecha_pedido: '31-07-2024',
        hora_pedido: '08:45',
        estado_pedido: 'Cancelado',
        empleadoGenerador: {
            nombre: 'Carlos Santana',
            area: 'Almacén',
        },
        productos: [
            {
                nombre_producto: 'Tornillos para Madera 1"',
                cantidad_requerida: 50,
                fecha_requerida: '10-08-2024',
                unidad_medida: 'Caja x 100',
                tipo_destino: 'Interno',
                direccion: '',
            },
            {
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 10,
                fecha_requerida: '10-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
            }
        ],
    },
    {
        id_pedido: 'PA-06',
        fecha_pedido: '31-07-2024',
        hora_pedido: '15:20',
        estado_pedido: 'Atendido',
        empleadoGenerador: {
            nombre: 'Ana Jimenez',
            area: 'Ventas',
        },
        productos: [
            {
                nombre_producto: 'Bolsa de Cemento Sol',
                cantidad_requerida: 300,
                fecha_requerida: '08-08-2024',
                unidad_medida: 'Bolsa 42.5kg',
                tipo_destino: 'Externo',
                direccion: 'Av. Arequipa 5040, Miraflores',
            },
            {
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 10,
                fecha_requerida: '08-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Externo',
                direccion: 'Av. Arequipa 5040, Miraflores',
            },
        ],
    },
    {
        id_pedido: 'PA-07',
        fecha_pedido: '01-08-2024',
        hora_pedido: '10:00',
        estado_pedido: 'Pendiente',
        empleadoGenerador: {
            nombre: 'Maria Lopez',
            area: 'Proyectos',
        },
        productos: [
            {
                nombre_producto: 'Taladro Inalámbrico 18V',
                cantidad_requerida: 2,
                fecha_requerida: '11-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
            },
            {
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 5,
                fecha_requerida: '11-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: '',
            },
        ],
    },
    {
        id_pedido: 'PA-08',
        fecha_pedido: '02-08-2024',
        hora_pedido: '09:00',
        estado_pedido: 'Revisado',
        empleadoGenerador: {
            nombre: 'Ana Jimenez',
            area: 'Ventas',
        },
        productos: [
            {
                nombre_producto: 'Fierro Corrugado 1/4" x 9m',
                cantidad_requerida: 100,
                fecha_requerida: '10-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: 'Almacén Central',
            },
            {
                nombre_producto: 'Alambre Negro Recocido N°16',
                cantidad_requerida: 20,
                fecha_requerida: '10-08-2024',
                unidad_medida: 'Rollo 1kg',
                tipo_destino: 'Interno',
                direccion: 'Almacén Central',
            },
        ],
    },
    {
        id_pedido: 'PA-09',
        fecha_pedido: '02-08-2024',
        hora_pedido: '11:30',
        estado_pedido: 'Revisado',
        empleadoGenerador: {
            nombre: 'Carlos Santana',
            area: 'Almacén',
        },
        productos: [
            {
                nombre_producto: 'Grifo Monocomando Cromado Pico Alto',
                cantidad_requerida: 10,
                fecha_requerida: '12-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Externo',
                direccion: 'Obra Miraflores',
            },
            {
                nombre_producto: 'Taladro Inalámbrico 18V',
                cantidad_requerida: 2,
                fecha_requerida: '11-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: 'Taller de Mantenimiento',
            },
        ],
    },
];

export const DEFAULT_PROVIDER_FOR_REGISTRATION: Partial<Provider> = {
    nombre: 'Ferretería El Tornillo Feliz',
    razonSocial: 'El Tornillo Feliz S.A.C.',
    ruc: '20504030201',
    direccion: 'Av. La Molina 123, Lima',
    correo: 'ventas@tornillofeliz.com',
    telefono: '987654321',
};

export const SOLICITUDES_COTIZACION_DATA: SolicitudCotizacion[] = [
    {
        id_solicitud: 'SC-001',
        fecha_emision_solicitud: '30-07-2024',
        estado: 'Generada',
        items: [
            {
                origen_pedido_id: 'PA-02',
                nombre_producto: 'Pintura Látex Blanco',
                cantidad_requerida: 10,
                fecha_requerida: '02-08-2024',
                unidad_medida: 'Galón',
                tipo_destino: 'Externo',
                direccion: 'Av. La Marina 2045, San Miguel',
                estado_item: 'En Cotización',
            }
        ]
    },
    {
        id_solicitud: 'SC-002',
        fecha_emision_solicitud: '31-07-2024',
        estado: 'Enviada',
        items: [
            {
                origen_pedido_id: 'PA-04',
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 15,
                fecha_requerida: '04-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: 'Almacen Principal',
                estado_item: 'En Cotización',
            },
            {
                origen_pedido_id: 'PA-04',
                nombre_producto: 'Taladro Percutor 1/2"',
                cantidad_requerida: 3,
                fecha_requerida: '03-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: 'Almacen Secundario',
                estado_item: 'En Cotización',
            },
        ],
        proveedores_enviados_ids: ['PROV-02', 'PROV-03'],
    },
     {
        id_solicitud: 'SC-003',
        fecha_emision_solicitud: '01-08-2024',
        estado: 'Cotizada',
        items: [
            {
                origen_pedido_id: 'PA-05',
                nombre_producto: 'Tornillos para Madera 1"',
                cantidad_requerida: 50,
                fecha_requerida: '10-08-2024',
                unidad_medida: 'Caja x 100',
                tipo_destino: 'Interno',
                direccion: 'Tienda',
                estado_item: 'En Cotización',
            },
            {
                origen_pedido_id: 'PA-05',
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 10,
                fecha_requerida: '10-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Interno',
                direccion: 'Tienda',
                estado_item: 'En Cotización'
            }
        ],
        cotizaciones_recibidas: [
            {
                id_proveedor: 'PROV-02',
                nombre_proveedor: 'Stanley Tools Perú',
                fecha_emision_cotizacion: '02-08-2024',
                fecha_garantia: '02-08-2025',
                plazo_entrega: '5 días',
                monto_total: 620.00,
                items: [
                      {
                        nombre_producto: 'Tornillos para Madera 1"',
                        cantidad_requerida: 50,
                        unidad_medida: 'Caja x 100',
                        monto_total_ofertado: 400.00,
                        modalidad_pago_ofrecida: 'Ambos',
                    },
                    {
                        nombre_producto: 'Martillo de Carpintero',
                        cantidad_requerida: 10,
                        unidad_medida: 'Unidad',
                        monto_total_ofertado: 220.00,
                        modalidad_pago_ofrecida: 'Crédito',
                    }
                ]
            },
            {
                id_proveedor: 'PROV-03',
                nombre_proveedor: 'ACEROS DEL NORTE',
                fecha_emision_cotizacion: '02-08-2024',
                fecha_garantia: '31-12-2024',
                plazo_entrega: '7 días',
                monto_total: 410.00,
                items: [
                      {
                        nombre_producto: 'Tornillos para Madera 1"',
                        cantidad_requerida: 50,
                        unidad_medida: 'Caja x 100',
                        monto_total_ofertado: 410.00,
                        modalidad_pago_ofrecida: 'Contado',
                    }
                ]
            }
        ]
    },
    {
        id_solicitud: 'SC-004',
        fecha_emision_solicitud: '02-08-2024',
        estado: 'Cotizada',
        items: [
            {
                origen_pedido_id: 'PA-06',
                nombre_producto: 'Bolsa de Cemento Sol',
                cantidad_requerida: 300,
                fecha_requerida: '08-08-2024',
                unidad_medida: 'Bolsa 42.5kg',
                tipo_destino: 'Externo',
                direccion: 'Av. Arequipa 5040, Miraflores',
                estado_item: 'En Cotización',
            },
            {
                origen_pedido_id: 'PA-06',
                nombre_producto: 'Martillo de Carpintero',
                cantidad_requerida: 10,
                fecha_requerida: '08-08-2024',
                unidad_medida: 'Unidad',
                tipo_destino: 'Externo',
                direccion: 'Av. Arequipa 5040, Miraflores',
                estado_item: 'En Cotización',
            },
            {
                origen_pedido_id: 'PA-01',
                nombre_producto: 'Tubo PVC 1/2 pulg.',
                cantidad_requerida: 50,
                fecha_requerida: '02-08-2024',
                unidad_medida: 'Tira 3m',
                tipo_destino: 'Interno',
                direccion: 'Tienda',
                estado_item: 'En Cotización',
            }
        ],
        cotizaciones_recibidas: [
            {
                id_proveedor: 'PROV-01',
                nombre_proveedor: 'Aceros Arequipa',
                fecha_emision_cotizacion: '03-08-2024',
                fecha_garantia: '03-08-2025',
                plazo_entrega: '10 días',
                monto_total: 8900.00,
                items: [
                    {
                        nombre_producto: 'Bolsa de Cemento Sol',
                        cantidad_requerida: 300,
                        unidad_medida: 'Bolsa 42.5kg',
                        monto_total_ofertado: 8400.00,
                        modalidad_pago_ofrecida: 'Crédito',
                    },
                    {
                        nombre_producto: 'Tubo PVC 1/2 pulg.',
                        cantidad_requerida: 50,
                        unidad_medida: 'Tira 3m',
                        monto_total_ofertado: 500.00,
                        modalidad_pago_ofrecida: 'Contado',
                    }
                ]
            },
            {
                id_proveedor: 'PROV-02',
                nombre_proveedor: 'Stanley Tools Perú',
                fecha_emision_cotizacion: '03-08-2024',
                fecha_garantia: '03-02-2025',
                plazo_entrega: '3 días',
                monto_total: 220.00,
                items: [
                    {
                        nombre_producto: 'Martillo de Carpintero',
                        cantidad_requerida: 10,
                        unidad_medida: 'Unidad',
                        monto_total_ofertado: 220.00,
                        modalidad_pago_ofrecida: 'Ambos',
                    }
                ]
            },
            {
                id_proveedor: 'PROV-03',
                nombre_proveedor: 'ACEROS DEL NORTE',
                fecha_emision_cotizacion: '04-08-2024',
                fecha_garantia: '01-01-2025',
                plazo_entrega: '8 días',
                monto_total: 725.00,
                items: [
                    {
                        nombre_producto: 'Tubo PVC 1/2 pulg.',
                        cantidad_requerida: 50,
                        unidad_medida: 'Tira 3m',
                        monto_total_ofertado: 475.00,
                        modalidad_pago_ofrecida: 'Contado',
                    },
                    {
                        nombre_producto: 'Martillo de Carpintero',
                        cantidad_requerida: 10,
                        unidad_medida: 'Unidad',
                        monto_total_ofertado: 250.00,
                        modalidad_pago_ofrecida: 'Contado',
                    }
                ]
            }
        ]
    }
];

export const ORDENES_COMPRA_DATA: OrdenCompra[] = [
  {
    id_orden: 'OC-001',
    id_solicitud_origen: 'SC-003',
    id_proveedor: 'PROV-02',
    nombre_proveedor: 'Stanley Tools Perú',
    fecha_emision: '03-08-2024',
    modalidad_pago: 'Crédito',
    monto_total_orden: 620.00,
    items: [
      { nombre_producto: 'Tornillos para Madera 1"', cantidad_adjudicada: 50, unidad_medida: 'Caja x 100', monto_total: 400.00 },
      { nombre_producto: 'Martillo de Carpintero', cantidad_adjudicada: 10, unidad_medida: 'Unidad', monto_total: 220.00 }
    ],
    estado: 'En Proceso',
    monitoreo: {
      estado_monitoreo: 'En Progreso',
      fecha_entrega_estimada: '10-08-2024',
      total_recepciones_programadas: 2,
      recepciones_completadas: 1,
    },
    recepciones: [
      { 
        id_recepcion: 'REC-001-1',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '08-08-2024', 
        hora_recepcion_programada: '10:00', 
        estado_recepcion: 'Conforme',
        items: [
          { nombre_producto: 'Tornillos para Madera 1"', unidad_medida: 'Caja x 100', cantidad_programada: 50, cantidad_recibida: 50, estado_calidad: 'Conforme' },
          { nombre_producto: 'Martillo de Carpintero', unidad_medida: 'Unidad', cantidad_programada: 5, cantidad_recibida: 5, estado_calidad: 'Conforme' },
        ]
      },
      { 
        id_recepcion: 'REC-001-2',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '10-08-2024', 
        hora_recepcion_programada: '14:00', 
        estado_recepcion: 'Pendiente',
        items: [
            { nombre_producto: 'Martillo de Carpintero', unidad_medida: 'Unidad', cantidad_programada: 5 },
        ]
      },
    ]
  },
  {
    id_orden: 'OC-002',
    id_solicitud_origen: 'SC-004',
    id_proveedor: 'PROV-01',
    nombre_proveedor: 'Aceros Arequipa',
    fecha_emision: '05-08-2024',
    modalidad_pago: 'Crédito',
    monto_total_orden: 8400.00,
    items: [
      { nombre_producto: 'Bolsa de Cemento Sol', cantidad_adjudicada: 300, unidad_medida: 'Bolsa 42.5kg', monto_total: 8400.00 }
    ],
    estado: 'Programada',
    monitoreo: {
      estado_monitoreo: 'Pendiente',
      fecha_entrega_estimada: '15-08-2024',
      total_recepciones_programadas: 3,
      recepciones_completadas: 0,
    },
    recepciones: [
      { 
        id_recepcion: 'REC-002-1',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '12-08-2024', 
        hora_recepcion_programada: '09:00', 
        estado_recepcion: 'Pendiente',
        items: [{ nombre_producto: 'Bolsa de Cemento Sol', unidad_medida: 'Bolsa 42.5kg', cantidad_programada: 100 }]
      },
      { 
        id_recepcion: 'REC-002-2',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '14-08-2024', 
        hora_recepcion_programada: '09:00', 
        estado_recepcion: 'Pendiente',
        items: [{ nombre_producto: 'Bolsa de Cemento Sol', unidad_medida: 'Bolsa 42.5kg', cantidad_programada: 100 }]
      },
      { 
        id_recepcion: 'REC-002-3',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '15-08-2024', 
        hora_recepcion_programada: '09:00', 
        estado_recepcion: 'Pendiente',
        items: [{ nombre_producto: 'Bolsa de Cemento Sol', unidad_medida: 'Bolsa 42.5kg', cantidad_programada: 100 }]
      },
    ]
  },
  {
    id_orden: 'OC-003',
    id_solicitud_origen: 'SC-004',
    id_proveedor: 'PROV-03',
    nombre_proveedor: 'ACEROS DEL NORTE',
    fecha_emision: '05-08-2024',
    modalidad_pago: 'Contado',
    monto_total_orden: 475.00,
    items: [
      { nombre_producto: 'Tubo PVC 1/2 pulg.', cantidad_adjudicada: 50, unidad_medida: 'Tira 3m', monto_total: 475.00 }
    ],
    estado: 'Emitida',
  },
  {
    id_orden: 'OC-004',
    id_solicitud_origen: 'SC-004',
    id_proveedor: 'PROV-02',
    nombre_proveedor: 'Stanley Tools Perú',
    fecha_emision: '06-08-2024',
    modalidad_pago: 'Contado',
    monto_total_orden: 1615.00,
    items: [
      { nombre_producto: 'Taladro Percutor 1/2"', cantidad_adjudicada: 5, unidad_medida: 'Unidad', monto_total: 1175.00 },
      { nombre_producto: 'Martillo de Carpintero', cantidad_adjudicada: 20, unidad_medida: 'Unidad', monto_total: 440.00 }
    ],
    estado: 'Emitida',
  },
  {
    id_orden: 'OC-005',
    id_solicitud_origen: 'SC-003',
    id_proveedor: 'PROV-03',
    nombre_proveedor: 'ACEROS DEL NORTE',
    fecha_emision: '07-08-2024',
    modalidad_pago: 'Crédito',
    monto_total_orden: 2415.00,
    items: [
      { nombre_producto: 'Tornillos para Madera 1"', cantidad_adjudicada: 100, unidad_medida: 'Caja x 100', monto_total: 820.00 },
      { nombre_producto: 'Martillo de Carpintero', cantidad_adjudicada: 20, unidad_medida: 'Unidad', monto_total: 420.00 },
      { nombre_producto: 'Taladro Percutor 1/2"', cantidad_adjudicada: 5, unidad_medida: 'Unidad', monto_total: 1175.00 }
    ],
    estado: 'Emitida',
    recepciones: [
      { 
        id_recepcion: 'REC-005-1',
        modalidad_logistica: 'Recojo por Transporte Propio',
        fecha_recepcion_programada: '15-08-2024', 
        hora_recepcion_programada: '11:00', 
        estado_recepcion: 'Pendiente',
        items: [
            { nombre_producto: 'Tornillos para Madera 1"', unidad_medida: 'Caja x 100', cantidad_programada: 40 },
            { nombre_producto: 'Martillo de Carpintero', unidad_medida: 'Unidad', cantidad_programada: 10 },
            { nombre_producto: 'Taladro Percutor 1/2"', unidad_medida: 'Unidad', cantidad_programada: 2 },
        ]
      },
    ]
  },
  {
    id_orden: 'OC-006',
    id_solicitud_origen: 'SC-004',
    id_proveedor: 'PROV-02',
    nombre_proveedor: 'Stanley Tools Perú',
    fecha_emision: '08-08-2024',
    modalidad_pago: 'Contado',
    monto_total_orden: 1075.00,
    items: [
      { nombre_producto: 'Martillo de Carpintero', cantidad_adjudicada: 20, unidad_medida: 'Unidad', monto_total: 440.00 },
      { nombre_producto: 'Tornillos para Madera 1"', cantidad_adjudicada: 50, unidad_medida: 'Caja x 100', monto_total: 400.00 },
      { nombre_producto: 'Taladro Percutor 1/2"', cantidad_adjudicada: 1, unidad_medida: 'Unidad', monto_total: 235.00 }
    ],
    estado: 'Cerrada',
    recepciones: [
      { 
        id_recepcion: 'REC-006-1',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '16-08-2024', 
        hora_recepcion_programada: '09:00', 
        estado_recepcion: 'Conforme',
        hora_inicio_recepcion: '09:05',
        items: [
            { nombre_producto: 'Martillo de Carpintero', unidad_medida: 'Unidad', cantidad_programada: 20, cantidad_recibida: 20, estado_calidad: 'Conforme' },
            { nombre_producto: 'Tornillos para Madera 1"', unidad_medida: 'Caja x 100', cantidad_programada: 50, cantidad_recibida: 50, estado_calidad: 'Conforme' },
            { nombre_producto: 'Taladro Percutor 1/2"', unidad_medida: 'Unidad', cantidad_programada: 1, cantidad_recibida: 1, estado_calidad: 'Conforme' },
        ],
        guias_remision: [{
            serie_correlativo: 'T001-456',
            fecha_emision_guia: '15-08-2024',
            fecha_traslado_guia: '16-08-2024',
            items: [
                { nombre_producto: 'Martillo de Carpintero', unidad_medida: 'Unidad', cantidad_en_guia: 20 },
                { nombre_producto: 'Tornillos para Madera 1"', unidad_medida: 'Caja x 100', cantidad_en_guia: 50 },
                { nombre_producto: 'Taladro Percutor 1/2"', unidad_medida: 'Unidad', cantidad_en_guia: 1 },
            ]
        }]
      },
    ]
  },
  {
    id_orden: 'OC-007',
    id_solicitud_origen: 'SC-004',
    id_proveedor: 'PROV-01',
    nombre_proveedor: 'Aceros Arequipa',
    fecha_emision: '09-08-2024',
    modalidad_pago: 'Crédito',
    monto_total_orden: 3275.00,
    items: [
      { nombre_producto: 'Bolsa de Cemento Sol', cantidad_adjudicada: 100, unidad_medida: 'Bolsa 42.5kg', monto_total: 2800.00 },
      { nombre_producto: 'Tubo PVC 1/2 pulg.', cantidad_adjudicada: 50, unidad_medida: 'Tira 3m', monto_total: 475.00 }
    ],
    estado: 'Emitida',
    recepciones: [
      { 
        id_recepcion: 'REC-007-1',
        modalidad_logistica: 'Entrega en Almacén',
        fecha_recepcion_programada: '18-08-2024', 
        hora_recepcion_programada: '11:00', 
        estado_recepcion: 'En Curso',
        hora_inicio_recepcion: '11:03',
        items: [
            { nombre_producto: 'Bolsa de Cemento Sol', unidad_medida: 'Bolsa 42.5kg', cantidad_programada: 100 },
            { nombre_producto: 'Tubo PVC 1/2 pulg.', unidad_medida: 'Tira 3m', cantidad_programada: 50 },
        ],
        guias_remision: [{
            serie_correlativo: 'T001-589',
            fecha_emision_guia: '17-08-2024',
            fecha_traslado_guia: '18-08-2024',
            items: [
                { nombre_producto: 'Bolsa de Cemento Sol', unidad_medida: 'Bolsa 42.5kg', cantidad_en_guia: 100 },
                { nombre_producto: 'Tubo PVC 1/2 pulg.', unidad_medida: 'Tira 3m', cantidad_en_guia: 50 },
            ]
        }]
      },
    ]
  }
];

export const INCIDENCIAS_DATA: Incidencia[] = [
  {
    id_incidencia: 'INC-001',
    id_orden: 'OC-007',
    nombre_proveedor: 'Aceros Arequipa',
    id_recepcion: 'REC-007-1',
    tipo_incidencia: 'CALIDAD',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Bolsa de Cemento Sol',
    producto_marca: 'Sol',
    descripcion: 'Se encontraron 5 bolsas de cemento rotas y con el contenido expuesto.',
    cantidad_afectada: 5,
    cantidad_programada: 100,
    cantidad_en_guia: 100,
    cantidad_recibida: 100,
  },
  {
    id_incidencia: 'INC-002',
    id_orden: 'OC-006',
    nombre_proveedor: 'Stanley Tools Perú',
    id_recepcion: 'REC-006-1',
    tipo_incidencia: 'CANTIDAD_FALTANTE',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Martillo de Carpintero',
    producto_marca: 'Stanley',
    descripcion: 'La guía de remisión indicaba 20 unidades, pero solo se recibieron 19 en el conteo físico.',
    cantidad_afectada: 1,
    cantidad_programada: 20,
    cantidad_en_guia: 20,
    cantidad_recibida: 19,
  },
  {
    id_incidencia: 'INC-003',
    id_orden: 'OC-001',
    nombre_proveedor: 'Stanley Tools Perú',
    id_recepcion: 'REC-001-1',
    tipo_incidencia: 'CANTIDAD_GUIA',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Tornillos para Madera 1"',
    producto_marca: 'Stanley',
    descripcion: 'Se programaron 50 cajas, pero la guía de remisión solo listaba 48.',
    cantidad_afectada: 2,
    cantidad_programada: 50,
    cantidad_en_guia: 48,
    cantidad_recibida: 48,
  },
  {
    id_incidencia: 'INC-004',
    id_orden: 'OC-007',
    nombre_proveedor: 'Aceros Arequipa',
    id_recepcion: 'REC-007-1',
    tipo_incidencia: 'CALIDAD',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Tubo PVC 1/2 pulg.',
    producto_marca: 'Matusita',
    descripcion: 'Se detectaron 3 tubos de PVC con rajaduras en los extremos.',
    cantidad_afectada: 3,
    cantidad_programada: 50,
    cantidad_en_guia: 50,
    cantidad_recibida: 50,
  },
  {
    id_incidencia: 'INC-005',
    id_orden: 'OC-001',
    nombre_proveedor: 'Stanley Tools Perú',
    id_recepcion: 'REC-001-1',
    tipo_incidencia: 'CANTIDAD_FALTANTE',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Martillo de Carpintero',
    producto_marca: 'Stanley',
    descripcion: 'Se programaron 5 martillos en esta recepción, pero solo llegaron 4.',
    cantidad_afectada: 1,
    cantidad_programada: 5,
    cantidad_en_guia: 5,
    cantidad_recibida: 4,
  },
  {
    id_incidencia: 'INC-006',
    id_orden: 'OC-001',
    nombre_proveedor: 'Stanley Tools Perú',
    id_recepcion: 'REC-001-2',
    tipo_incidencia: 'CALIDAD',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Martillo de Carpintero',
    producto_marca: 'Stanley',
    descripcion: 'El mango de uno de los martillos presenta astillas.',
    cantidad_afectada: 1,
    cantidad_programada: 5,
    cantidad_en_guia: 5,
    cantidad_recibida: 5,
  },
  {
    id_incidencia: 'INC-007',
    id_orden: 'OC-002',
    nombre_proveedor: 'Aceros Arequipa',
    id_recepcion: 'REC-002-1',
    tipo_incidencia: 'CALIDAD',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Bolsa de Cemento Sol',
    producto_marca: 'Sol',
    descripcion: 'Las bolsas de cemento muestran signos de humedad.',
    cantidad_afectada: 10,
    cantidad_programada: 100,
    cantidad_en_guia: 100,
    cantidad_recibida: 100,
  },
  {
    id_incidencia: 'INC-008',
    id_orden: 'OC-002',
    nombre_proveedor: 'Aceros Arequipa',
    id_recepcion: 'REC-002-1',
    tipo_incidencia: 'CANTIDAD_GUIA',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Bolsa de Cemento Sol',
    producto_marca: 'Sol',
    descripcion: 'La guía indica 100 bolsas, pero se programaron 105 para esta recepción.',
    cantidad_afectada: 5,
    cantidad_programada: 105,
    cantidad_en_guia: 100,
    cantidad_recibida: 100,
  },
  {
    id_incidencia: 'INC-009',
    id_orden: 'OC-002',
    nombre_proveedor: 'Aceros Arequipa',
    id_recepcion: 'REC-002-2',
    tipo_incidencia: 'CANTIDAD_FALTANTE',
    estado_incidencia: 'Pendiente',
    producto_nombre: 'Bolsa de Cemento Sol',
    producto_marca: 'Sol',
    descripcion: 'Faltaron 2 bolsas en el pallet entregado.',
    cantidad_afectada: 2,
    cantidad_programada: 100,
    cantidad_en_guia: 100,
    cantidad_recibida: 98,
  },
];

export const ALMACENES: string[] = ['Almacén 1', 'Almacén 2', 'Almacén 3'];

// Data for simulating busy schedules for the new scheduler component
function getNextWorkingDay(date: Date, daysToAdd: number): string {
    let newDate = new Date(date);
    let addedDays = 0;
    while (addedDays < daysToAdd) {
        newDate.setDate(newDate.getDate() + 1);
        const dayOfWeek = newDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // 0 = Sunday, 6 = Saturday
            addedDays++;
        }
    }
    return newDate.toISOString().split('T')[0];
}

const today = new Date();
const tomorrow = getNextWorkingDay(today, 1);
const dayAfterTomorrow = getNextWorkingDay(today, 2);

export const HORARIOS_OCUPADOS: HorarioOcupado[] = [
    // Almacén
    { fecha: tomorrow, hora: '09:00', tipo: 'Almacén', recurso_id: 'Almacén 1' },
    { fecha: tomorrow, hora: '10:00', tipo: 'Almacén', recurso_id: 'Almacén 1' },
    { fecha: tomorrow, hora: '10:00', tipo: 'Almacén', recurso_id: 'Almacén 2' },
    { fecha: dayAfterTomorrow, hora: '14:00', tipo: 'Almacén', recurso_id: 'Almacén 3' },
    { fecha: dayAfterTomorrow, hora: '15:00', tipo: 'Almacén', recurso_id: 'Almacén 2' },
    { fecha: dayAfterTomorrow, hora: '15:00', tipo: 'Almacén', recurso_id: 'Almacén 3' },
    // Transporte
    { fecha: tomorrow, hora: '11:00', tipo: 'Transporte' },
    { fecha: dayAfterTomorrow, hora: '08:00', tipo: 'Transporte' },
];


// ============================================================================
// 2. DATOS DEL MÓDULO DE CLIENTES (CRM)
// ============================================================================

export const CLIENT_DATA: Client[] = [
  { id: 1, nombre: 'Luis', apellidos: 'Garcia Morales', ruc: '987654321', distrito: 'San Isidro', telefono: '987-654-321', correo: 'luis.garcia@email.com', fechaRegistro: '2024-05-10', direccion: 'Av. Javier Prado 123' },
  { id: 2, nombre: 'Ana', apellidos: 'Perez Lopez', ruc: '123456789', distrito: 'Miraflores', telefono: '998-765-432', correo: 'ana.perez@email.com', fechaRegistro: '2023-11-25', direccion: 'Calle Las Begonias 456' },
  { id: 3, nombre: 'Carlos', apellidos: 'Sanchez Vargas', ruc: '1090123456', distrito: 'Santiago de Surco', telefono: '976-543-210', correo: 'c.sanchez@email.com', fechaRegistro: '2025-01-15', direccion: 'Jr. Monte Rosa 789' },
  { id: 4, nombre: 'Maria', apellidos: 'Ramirez Ortiz', ruc: '1034567890', distrito: 'La Molina', telefono: '965-432-109', correo: 'maria.ramirez@email.com', fechaRegistro: '2024-08-01', direccion: 'Av. La Molina 1011' },
  { id: 5, nombre: 'Jorge', apellidos: 'Castro Medina', ruc: '1023456789', distrito: 'Barranco', telefono: '954-321-098', correo: 'jorge.castro@email.com', fechaRegistro: '2023-04-12', direccion: 'Psj. Saenz Peña 1213' },
  { id: 6, nombre: 'Sofia', apellidos: 'Mendoza Rojas', ruc: '943210987', distrito: 'Lince', telefono: '943-210-987', correo: 'sofia.mendoza@email.com', fechaRegistro: '2025-03-20', direccion: 'Av. Arequipa 1415' },
  { id: 7, nombre: 'Roberto', apellidos: 'Torres Rios', ruc: '932109876', distrito: 'Pueblo Libre', telefono: '932-109-876', correo: 'roberto.torres@email.com', fechaRegistro: '2024-09-05', direccion: 'Av. Brasil 1617' },
  { id: 8, nombre: 'Lucia', apellidos: 'Diaz Fernandez', ruc: '921098765', distrito: 'San Miguel', telefono: '921-098-765', correo: 'lucia.diaz@email.com', fechaRegistro: '2023-07-30', direccion: 'Av. La Marina 1819' },
  { id: 9, nombre: 'Fernando', apellidos: 'Gomez Silva', ruc: '910987654', distrito: 'San Borja', telefono: '910-987-654', correo: 'f.gomez@email.com', fechaRegistro: '2024-02-18', direccion: 'Av. Aviación 2021' },
  { id: 10, nombre: 'Valeria', apellidos: 'Salazar Nieto', ruc: '909876543', distrito: 'San Miguel', telefono: '909-876-543', correo: 'valeria.salazar@email.com', fechaRegistro: '2025-04-03', direccion: 'Calle Manco Capac 2223' },
  { id: 11, nombre: 'Pedro', apellidos: 'Vilchez Cardenas', ruc: '10123456788', distrito: 'Barranco', telefono: '904-321-098', correo: 'p.vilchez@email.com', fechaRegistro: '12-09-2024', direccion: 'Jirón 28 de Julio 123, Lima' },
];

export const MAESTRO_DATA: Maestro[] = [
  { id: 1, nombre: 'Luis', apellidos: 'Garcia Morales', ruc: '1012345678', distrito: 'San Isidro', telefono: '987-654-321', correo: 'luis.garcia@email.com', especialidad: 'Albañilería', fechaRegistro: '2024-05-10', direccion: 'Av. Javier Prado 123' },
  { id: 2, nombre: 'Ana', apellidos: 'Perez Lopez', ruc: '1045678901', distrito: 'Miraflores', telefono: '998-765-432', correo: 'ana.perez@email.com', especialidad: 'Gasfitería', fechaRegistro: '2023-11-25', direccion: 'Calle Las Begonias 456' },
  { id: 3, nombre: 'Jorge', apellidos: 'Castro Medina', ruc: '1023456789', distrito: 'Barranco', telefono: '954-321-098', correo: 'jorge.castro@email.com', especialidad: 'Electricidad', fechaRegistro: '2023-04-12', direccion: 'Psj. Saenz Peña 1213' },
  { id: 4, nombre: 'Pedro', apellidos: 'Vilchez Cardenas', ruc: '10123456788', distrito: 'Barranco', telefono: '904-321-098', correo: 'p.vilchez@email.com', especialidad: 'GASFITERIA', fechaRegistro: '12-09-2024', direccion: 'Jirón 28 de Julio 123, Lima' },
];

export const SALES_HISTORY_DATA: Sale[] = [
    { fecha: '2025-04-26', monto: 'S/ 80.00', tipoPago: 'Tarjeta de Crédito', nroComprobante: 'F001-000459' },
    { fecha: '2025-04-27', monto: 'S/ 40.00', tipoPago: 'Plin', nroComprobante: 'B001-001237' },
    { fecha: '2025-05-28', monto: 'S/ 35.00', tipoPago: 'Efectivo', nroComprobante: 'F001-000460' },
    { fecha: '2025-05-29', monto: 'S/ 50.00', tipoPago: 'Transferencia Bancaria', nroComprobante: 'B001-001238' },
];

export const CHART_DATA: ChartData[] = [
    { name: '2024-09', value: 300 },
    { name: '2024-10', value: 500 },
    { name: '2024-11', value: 800 },
    { name: '2024-12', value: 250 },
    { name: '2025-1', value: 2500 },
    { name: '2025-2', value: 350 },
    { name: '2025-3', value: 200 },
    { name: '2025-4', value: 150 },
    { name: '2025-5', value: 100 },
];

export const CANJES_HISTORY_DATA: Canje[] = [
    { fecha: '2025-05-01', idPremio: 'PREM-05', cantidad: 1, puntos: 500, estado: 'Entregado' },
    { fecha: '2025-05-02', idPremio: 'PREM-12', cantidad: 2, puntos: 250, estado: 'Entregado' },
    { fecha: '2025-05-03', idPremio: 'PREM-08', cantidad: 1, puntos: 1500, estado: 'Pendiente' },
    { fecha: '2025-05-04', idPremio: 'PREM-03', cantidad: 1, puntos: 800, estado: 'Entregado' },
];

export const CONTACTS_DATA: Contact[] = [
  { id: 1, tipo: 'Telefono Celular', valor: '123-456-789' },
  { id: 2, tipo: 'Whatsapp', valor: '123-456-789' },
  { id: 3, tipo: 'Correo', valor: 'ejemplo.correo@gmail.com' },
  { id: 4, tipo: 'Telefono Celular', valor: '456-789-132' },
];

export const DIRECCIONES_DATA: Address[] = [
  { id: 1, ciudad: 'Lima', distrito: 'Ate', via: 'Jiron Paracas', numero: '954' },
  { id: 2, ciudad: 'Lima', distrito: 'Ate', via: 'Avenida Hermes', numero: '256' },
  { id: 3, ciudad: 'Lima', distrito: 'Barranco', via: 'Jiron 28 de julio', numero: '123' },
  { id: 4, ciudad: 'Lima', distrito: 'Santa Anita', via: 'Avenida Moro solar', numero: '455' },
];

export const PREMIOS_CATALOG_DATA: Premio[] = [
    { id: 'PREM-01', nombre: 'Taladro Inalámbrico', descripcion: 'Modelo: SCD-123...', costo: 30, categoria: 'Herramienta, ...' },
    { id: 'PREM-02', nombre: 'Batidora', descripcion: 'Mod. V2...', costo: 200, categoria: 'Electrodomes...' },
    { id: 'PREM-03', nombre: 'Tornillos', descripcion: 'Tornillos 3cm', costo: 30, categoria: 'Carpintería, ...' },
    { id: 'PREM-04', nombre: 'Cemento', descripcion: 'Saco 50kg', costo: 25, categoria: 'Construcción, ...' },
    { id: 'PREM-05', nombre: 'Pintura Acrílica', descripcion: 'Galón azul', costo: 45, categoria: 'Acabados, ...' },
    { id: 'PR-006', nombre: 'Vales de compra', descripcion: 'S/ 20 en Sodimac', costo: 20, categoria: 'Vales' },
    { id: 'PR-014', nombre: 'Pala', descripcion: 'Pala de jardín', costo: 35, categoria: 'Herramienta' },
    { id: 'PR-035', nombre: 'Televisor', descripcion: 'Smart TV 32"', costo: 270, categoria: 'Electrodomes...' },
];

export const REPORTS_DATA: Report[] = [
  { id: 'REP-001', fechaGeneracion: '2025-03-01', periodoAnalisis: 'Último mes', idUsuarioGenerador: 'USR-005' },
  { id: 'REP-002', fechaGeneracion: '2025-03-05', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-012' },
  { id: 'REP-003', fechaGeneracion: '2025-03-10', periodoAnalisis: 'Trimestre', idUsuarioGenerador: 'USR-003' },
  { id: 'REP-004', fechaGeneracion: '2025-03-15', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-003' },
  { id: 'REP-005', fechaGeneracion: '2025-03-20', periodoAnalisis: 'Anual', idUsuarioGenerador: 'USR-012' },
  { id: 'REP-006', fechaGeneracion: '2025-03-25', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-003' },
  { id: 'REP-007', fechaGeneracion: '2025-04-01', periodoAnalisis: 'Último mes', idUsuarioGenerador: 'USR-005' },
  { id: 'REP-008', fechaGeneracion: '2025-04-05', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-001' },
  { id: 'REP-009', fechaGeneracion: '2025-04-10', periodoAnalisis: 'Trimestre', idUsuarioGenerador: 'USR-005' },
  { id: 'REP-010', fechaGeneracion: '2025-04-15', periodoAnalisis: 'Último mes', idUsuarioGenerador: 'USR-012' },
  { id: 'REP-011', fechaGeneracion: '2025-04-20', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-003' },
];