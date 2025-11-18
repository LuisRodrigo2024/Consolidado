import React from 'react';

// ============================================================================
// 1. NAVEGACIÓN GLOBAL (Consolidada)
// ============================================================================
export enum Screen {
  // --- Módulo Abastecimiento (Principal) ---
  MainMenu = 'MainMenu',
  ProvidersList = 'ProvidersList',
  ProviderFormStep1 = 'ProviderFormStep1',
  ProviderFormStep2 = 'ProviderForm-Step2',
  ProviderDetails = 'ProviderDetails',
  ProductsList = 'ProductsList',
  ProductForm = 'ProductForm',
  ProductDetails = 'ProductDetails',
  PedidosList = 'PedidosList',
  PedidoDetails = 'PedidoDetails',
  SolicitudesList = 'SolicitudesList',
  GroupItemsForQuotation = 'GroupItemsForQuotation',
  SolicitudDetails = 'SolicitudDetails',
  RegisterQuote = 'RegisterQuote',
  EvaluateQuotes = 'EvaluateQuotes',
  OrdersList = 'OrdersList',
  OrderDetailMonitoring = 'OrderDetailMonitoring',
  ScheduleReceptionsList = 'ScheduleReceptionsList',
  ScheduleReceptionForm = 'ScheduleReceptionForm',
  RemissionGuideList = 'RemissionGuideList',
  RemissionGuideValidation = 'RemissionGuideValidation',
  IncidentsList = 'IncidentsList',
  
  // --- Módulo Clientes (Nuevas Pantallas) ---
  Clients = 'Clients',               // Directorio de Clientes
  ClientDetail = 'ClientDetail',     // Detalle de un cliente
  Maestros = 'Maestros',             // Lista de Maestros (si la tienes separada)
  Premios = 'Premios',               // Catálogo de Premios / Canjes
  Reports = 'Reports',               // Dashboard de Reportes CRM

  // --- AI Screens ---
  AIHub = 'AIHub',
  AIChat = 'AIChat',
  AIVision = 'AIVision',
  AIEmailGenerator = 'AIEmailGenerator',
  AIProductCataloger = 'AIProductCataloger',
  AIStrategy = 'AIStrategy',
}

// ============================================================================
// 2. TIPOS DE ABASTECIMIENTO & LOGÍSTICA
// ============================================================================

// Product-related types
export interface ProductDefinition {
  nombre: string;
  rubro: string;
  familia: string;
  clase: string;
  marca: string;
  unidad: string;
}

export type UnidadMedida = 'UNIDAD' | 'PAQUETE' | 'SACO' | 'CAJA' | 'ROLLO' | 'LATA' | 'BOTELLA' | 'm' | 'Kg' | 'L' | 'm²' | '';

export interface Product {
  id_producto: string;
  nombre: string;
  rubro: string;
  familia: string;
  clase: string;
  marca?: string;
  unidad: UnidadMedida;
  precio_base: string;
}

export interface OfferedProduct {
  producto: string;
  rubro: string;
  familia: string;
  clase: string;
  marca: string;
  unidad: string;
  precioUnitario: string;
}

// Provider-related types
export interface Provider {
  id: string;
  nombre: string;
  ruc: string;
  contacto: string;
  razonSocial: string;
  direccion: string;
  correo: string;
  telefono: string;
  whatsapp: string;
  productos: OfferedProduct[];
}

// Pedido (Internal Request) types
export interface PedidoProducto {
  nombre_producto: string;
  cantidad_requerida: number;
  unidad_medida: string;
  fecha_requerida: string;
  tipo_destino: 'Interno' | 'Externo';
  direccion: string;
  estado_item?: 'En Cotización' | 'Adjudicado' | 'Pendiente';
}

export interface Pedido {
  id_pedido: string;
  fecha_pedido: string;
  hora_pedido: string;
  estado_pedido: 'Pendiente' | 'Revisado' | 'En Proceso' | 'Atendido' | 'Cancelado';
  empleadoGenerador: {
    nombre: string;
    area: string;
  };
  productos: PedidoProducto[];
}

// Solicitud de Cotización (Quotation Request) types
export interface ItemPendiente extends PedidoProducto {
  origen_pedido_id: string;
}

export interface CotizacionRecibidaItem {
  nombre_producto: string;
  cantidad_requerida: number;
  unidad_medida: string;
  monto_total_ofertado: number;
  modalidad_pago_ofrecida: 'Contado' | 'Crédito' | 'Ambos';
}

export interface CotizacionRecibida {
  id_proveedor: string;
  nombre_proveedor: string;
  fecha_emision_cotizacion: string;
  fecha_garantia: string;
  plazo_entrega: string;
  monto_total: number;
  items: CotizacionRecibidaItem[];
}

export interface SolicitudCotizacion {
  id_solicitud: string;
  fecha_emision_solicitud: string;
  estado: 'Generada' | 'Enviada' | 'Cotizada' | 'Adjudicada';
  items: ItemPendiente[];
  proveedores_enviados_ids?: string[];
  cotizaciones_recibidas?: CotizacionRecibida[];
}

// Orden de Compra (Purchase Order) types
export interface OrdenCompraItem {
  nombre_producto: string;
  cantidad_adjudicada: number;
  unidad_medida: string;
  monto_total: number;
}

export interface GuiaRemisionItem {
  nombre_producto: string;
  unidad_medida: string;
  cantidad_en_guia: number;
}

export interface GuiaRemision {
  serie_correlativo: string;
  fecha_emision_guia: string;
  fecha_traslado_guia: string;
  items?: GuiaRemisionItem[];
}

export interface DetalleRecepcionItem {
    nombre_producto: string;
    unidad_medida: string;
    cantidad_programada: number;
    cantidad_recibida?: number;
    estado_calidad?: 'Conforme' | 'No Conforme' | 'Pendiente';
    observacion?: string;
}

export interface Recepcion {
    id_recepcion: string;
    modalidad_logistica: 'Entrega en Almacén' | 'Recojo por Transporte Propio';
    fecha_recepcion_programada: string;
    hora_recepcion_programada: string;
    recurso_asignado?: string;
    estado_recepcion: 'Pendiente' | 'En Curso' | 'Recibida Parcial' | 'Conforme' | 'No Conforme' | 'Pendiente de Calidad';
    items: DetalleRecepcionItem[];
    guias_remision?: GuiaRemision[];
    hora_inicio_recepcion?: string;
    hora_fin_recepcion?: string;
}

export interface OrdenCompra {
  id_orden: string;
  id_solicitud_origen: string;
  id_proveedor: string;
  nombre_proveedor: string;
  fecha_emision: string;
  modalidad_pago: 'Contado' | 'Crédito';
  monto_total_orden: number;
  items: OrdenCompraItem[];
  estado: 'Emitida' | 'En Proceso' | 'Programada' | 'Cerrada';
  monitoreo?: {
    estado_monitoreo: 'Pendiente' | 'En Progreso' | 'Completado';
    fecha_entrega_estimada: string;
    total_recepciones_programadas: number;
    recepciones_completadas: number;
  };
  recepciones?: Recepcion[];
}

// Incidents and Claims types
export interface Incidencia {
  id_incidencia: string;
  id_orden: string;
  nombre_proveedor: string;
  id_recepcion: string;
  tipo_incidencia: 'CALIDAD' | 'CANTIDAD_GUIA' | 'CANTIDAD_FALTANTE';
  estado_incidencia: 'Pendiente' | 'En Reclamo' | 'Resuelta';
  // Details for modal
  producto_nombre: string;
  producto_marca: string;
  descripcion: string;
  cantidad_afectada: number;
  // Evidence for modal
  cantidad_programada: number;
  cantidad_en_guia: number;
  cantidad_recibida: number;
}

export interface Reclamo {
    id_reclamo: string;
    fecha_reclamo: string;
    incidencias_ids: string[];
    observacion_reclamo?: string;
    accion_correctiva: 'Nota de Crédito' | 'Reemplazo de Producto' | 'Otro';
    estado_reclamo: 'Enviado' | 'En Revision' | 'Resuelto';
}


// Adjudication type
export interface AdjudicatedItem {
    providerId: string;
    providerName: string;
    finalPaymentMethod: 'Contado' | 'Crédito';
    itemDetails: CotizacionRecibidaItem;
    plazo_entrega: string;
}

// Transport types
export interface PedidoTransporte {
    id_pedido_transporte: string;
    id_recepcion_origen: string;
    id_orden_compra: string;
    proveedor: string;
    fecha_recojo: string;
    hora_recojo: string;
    estado: 'Pendiente' | 'En Curso' | 'Completado';
}

// Scheduler types
export interface HorarioOcupado {
    fecha: string;
    hora: string;
    tipo: 'Almacén' | 'Transporte';
    recurso_id?: string;
}

// Modal types
export interface ConfirmationModalData {
    isOpen: boolean;
    title: string;
    message: React.ReactNode;
    onClose?: (...args: any[]) => void;
}

export interface PostQuoteModalData {
    isOpen: boolean;
    title: string;
    message: React.ReactNode;
    onAddAnother: () => void;
    onFinish: () => void;
}

// ============================================================================
// 3. TIPOS DEL MÓDULO DE CLIENTES (CRM)
// ============================================================================

export interface Client {
  id: number;
  nombre: string;
  apellidos: string;
  ruc: string;
  distrito: string;
  telefono: string;
  correo: string;
  fechaRegistro: string;
  direccion: string;
}

export interface Maestro {
  id: number;
  nombre: string;
  apellidos: string;
  ruc: string;
  distrito: string;
  telefono: string;
  correo: string;
  especialidad: string;
  fechaRegistro: string;
  direccion: string;
}

export interface Sale {
  fecha: string;
  monto: string;
  tipoPago: string;
  nroComprobante: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface Canje {
    fecha: string;
    idPremio: string;
    cantidad: number;
    puntos: number;
    estado: string;
}

export interface Contact {
  id: number;
  tipo: string;
  valor: string;
}

export interface Address {
  id: number;
  ciudad: string;
  distrito: string;
  via: string;
  numero: string;
}

export interface Premio {
  id: string;
  nombre: string;
  descripcion: string;
  costo: number;
  categoria: string;
}

export interface Report {
  id: string;
  fechaGeneracion: string;
  periodoAnalisis: string;
  idUsuarioGenerador: string;
}