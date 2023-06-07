(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var body = request.body.dataString;
    var parser = new global.JSON();
    var requestParams = parser.decode(body);

    //---------Campos de Acción------------------------

    var Accion = requestParams.Accion;
    var propiedades = requestParams.Propiedades;

    //Inicio Nombre Bitacora Propiedades de Producto

    //PROPIEDADES DEL PRODUCTO VERIFICADAS

    var Idispo = requestParams.Propiedades[0].Idispo;
    var Capacidad = requestParams.Propiedades[0].Capacidad;
    var CantidadEqp = requestParams.Propiedades[0].CantidadEqp;
    var canSensoTemp = requestParams.Propiedades[0].canSensoTemp;
    var CantidadServi = requestParams.Propiedades[0].CantidadServi;
    var NumeroUs = requestParams.Propiedades[0].NumeroUs;
    var CantidadEn = requestParams.Propiedades[0].CantidadEn;

    var CiudadA = ValidarCiudad(requestParams.Propiedades[0].CiudadA);
    var CiudadB = ValidarCiudad(requestParams.Propiedades[0].CiudadB);
    var ciudActFisMon = ValidarCiudad(requestParams.Propiedades[0].ciudActFisMon);
    var CiudadPPCliente = requestParams.Propiedades[0].CiudadPPCliente;

    var CnSaoPaulo = requestParams.Propiedades[0].CnSaoPaulo;
    var Datacenter = requestParams.Propiedades[0].Datacenter;
    var TiempoEntEstim = requestParams.Propiedades[0].TiempoEntEstim;
    var ServReq = requestParams.Propiedades[0].ServReq;
    var SiglaCiudadA = requestParams.Propiedades[0].SiglaCiudadA;
    var SiglaCiudadB = requestParams.Propiedades[0].SiglaCiudadB;
    var DurServicio = requestParams.Propiedades[0].DurServicio;
    var EquipamientoA = requestParams.Propiedades[0].EquipamientoA;
    var EquipamientoB = requestParams.Propiedades[0].EquipamientoB;
    var EspacioT = requestParams.Propiedades[0].EspacioT;
    var FechaVenc = requestParams.Propiedades[0].FechaVenc;
    var Gama = requestParams.Propiedades[0].Gama;
    var HorarioS = requestParams.Propiedades[0].HorarioS;
    var Idioma = requestParams.Propiedades[0].Idioma;
    var Implementacion = requestParams.Propiedades[0].Implementacion;
    var InterfazA = requestParams.Propiedades[0].InterfazA;
    var InterfazB = requestParams.Propiedades[0].InterfazB;
    var OfIncEqp = requestParams.Propiedades[0].OfIncEqp;
    var Marca = requestParams.Propiedades[0].Marca;

    var Nombre = requestParams.Propiedades[0].Nombre;
    var NombreSede = requestParams.Propiedades[0].NombreSede;
    var NumTotBDCC = requestParams.Propiedades[0].NumTotBDCC;
    var Observaciones = requestParams.Propiedades[0].Observaciones;
    var PorEstCreTresA = requestParams.Propiedades[0].PorEstCreTresA;
    var Redistribucion = requestParams.Propiedades[0].Redistribucion;
    var relationshipReuse = requestParams.Propiedades[0].relationshipReuse;
    var RequiereAnti = requestParams.Propiedades[0].RequiereAnti;
    var ReqArrenEqu = requestParams.Propiedades[0].ReqArrenEqu;
    var Collocation = requestParams.Propiedades[0].Collocation;
    var CollocationB = requestParams.Propiedades[0].CollocationB;
    var ReqOyM = requestParams.Propiedades[0].ReqOyM;
    var ReqServInstA = requestParams.Propiedades[0].ReqServInstA;
    var ReqServTecProfe = requestParams.Propiedades[0].ReqServTecProfe;
    var UltimoKM = requestParams.Propiedades[0].UltimoKM;
    var UltimoKM2 = requestParams.Propiedades[0].UltimoKM2;
    //var UltimoKM = requestParams.Propiedades[0].UltimoKM;
    var ReqVentaEqu = requestParams.Propiedades[0].ReqVentaEqu;
    var Serie = requestParams.Propiedades[0].Serie;
    var SubServi = requestParams.Propiedades[0].SubServi;
    var SiteBackboneA = ValidarSitio(requestParams.Propiedades[0].SiteBackboneA);
    var SiteBackboneB = ValidarSitio(requestParams.Propiedades[0].SiteBackboneB);
    var SitioPuntaA = ValidarSitio(requestParams.Propiedades[0].SitioPuntaA);
    var SitioPuntaB = ValidarSitio(requestParams.Propiedades[0].SitioPuntaB);
    var Sitio = ValidarSitio(requestParams.Propiedades[0].Sitio);
    var TamAtqMit = requestParams.Propiedades[0].TamAtqMit;
    var TReqPTFD = requestParams.Propiedades[0].TReqPTFD;
    var DiasEstimadosInst = requestParams.Propiedades[0].DiasEstimadosInst;
    var TieneCostIntenCiudaA = requestParams.Propiedades[0].TieneCostIntenCiudaA;
    var TieCostInsCiuB = requestParams.Propiedades[0].TieCostInsCiuB;
    var TieServInst = requestParams.Propiedades[0].TieServInst;
    var TipoEqu = requestParams.Propiedades[0].TipoEqu;
    var TipoOpe = requestParams.Propiedades[0].TipoOpe;
    var TipoRed = requestParams.Propiedades[0].TipoRed;
    var TipoServ = requestParams.Propiedades[0].TipoServ;
    var InterfazT = requestParams.Propiedades[0].InterfazT;
    var Ukorigen = requestParams.Propiedades[0].Ukorigen;
    var Ukorigen2 = requestParams.Propiedades[0].Ukorigen2;
    var Umedida = requestParams.Propiedades[0].Umedida;
    var UnFact = requestParams.Propiedades[0].UnFact;
    var UEspacioT = requestParams.Propiedades[0].UEspacioT;
    var VisualizarEstadoPortal = requestParams.Propiedades[0].VisualizarEstadoPortal.toUpperCase();
    var ReqAdminRed = requestParams.Propiedades[0].ReqAdminRed;
    var ReqAnaUbMov = requestParams.Propiedades[0].ReqAnaUbMov;
    var ReqCtrlAccInv = requestParams.Propiedades[0].ReqCtrlAccInv;
    var ReqCtrlAB = requestParams.Propiedades[0].ReqCtrlAB;
    var ReqFilBCSCont = requestParams.Propiedades[0].ReqFilBCSCont;
    var ReqProcAnAv = requestParams.Propiedades[0].ReqProcAnAv;
    var ReqRedSIOT = requestParams.Propiedades[0].ReqRedSIOT;
    var ReqSDN = requestParams.Propiedades[0].ReqSDN;
    var ReqTecOpt = requestParams.Propiedades[0].ReqTecOpt;
    var CapacidadAdic = requestParams.Propiedades[0].CapacidadAdic;
    var TipodeContenidoBrasil = requestParams.Propiedades[0].TipodeContenidoBrasil;
    var LineaServ = requestParams.Propiedades[0].LineaServ;
    var ReqHerr = requestParams.Propiedades[0].ReqHerr;
    var ReqServMigr = requestParams.Propiedades[0].ReqServMigr;
    var TipDatInfAdm = requestParams.Propiedades[0].TipDatInfAdm;
    var categServ = requestParams.Propiedades[0].categServ;
    var criticidad = requestParams.Propiedades[0].criticidad;
    var reqFuncSegu = requestParams.Propiedades[0].reqFuncSegu;
    var ReqPerPC = requestParams.Propiedades[0].ReqPerPC;
    var ReqPorCau = requestParams.Propiedades[0].ReqPorCau;
    var DimenEdificio = requestParams.Propiedades[0].DimenEdificio;
    var numetlsactmopa = requestParams.Propiedades[0].numetlsactmopa;
    var AmbHumeRela = requestParams.Propiedades[0].AmbHumeRela;
    var AmbHumoGases = requestParams.Propiedades[0].AmbHumoGases;
    var AmbTemperatura = requestParams.Propiedades[0].AmbTemperatura;
    var civAperPuertas = requestParams.Propiedades[0].civAperPuertas;
    var civPresMovi = requestParams.Propiedades[0].civPresMovi;
    var DireActFisMon = requestParams.Propiedades[0].DireActFisMon;
    var elecConsElec = requestParams.Propiedades[0].elecConsElec;
    var elecNivCombus = requestParams.Propiedades[0].elecNivCombus;
    var elecPresElec = requestParams.Propiedades[0].elecPresElec;
    var elecUsoBaterias = requestParams.Propiedades[0].elecUsoBaterias;
    var sensoSuminisCliente = requestParams.Propiedades[0].sensoSuminisCliente;
    var nomActFisMon = requestParams.Propiedades[0].nomActFisMon;
    var numDiasInst = requestParams.Propiedades[0].numDiasInst;
    var numTotalGatew = requestParams.Propiedades[0].numTotalGatew;
    var ObseAdicio = requestParams.Propiedades[0].ObseAdicio;
    var reqInstaSensores = requestParams.Propiedades[0].reqInstaSensores;
    var varNoAparListDes = requestParams.Propiedades[0].varNoAparListDes;
    var tiempGarant = requestParams.Propiedades[0].tiempGarant;
    var AlmacenaRS = requestParams.Propiedades[0].AlmacenaRS;
    var AlmacenaRU = requestParams.Propiedades[0].AlmacenaRU;
    var EstBackup = requestParams.Propiedades[0].EstBackup;
    var NumeroServ = requestParams.Propiedades[0].NumeroServ;
    var TipoBackup = requestParams.Propiedades[0].TipoBackup;
    var numerouser = requestParams.Propiedades[0].numerouser;
    var DiasInstCalen = requestParams.Propiedades[0].DiasInstCalen;
    var Nservi = requestParams.Propiedades[0].Nservi;
    var Region = requestParams.Propiedades[0].Region;
    var AreaBodMD = requestParams.Propiedades[0].AreaBodMD;
    var CantTotPKVA_AC = requestParams.Propiedades[0].CantTotPKVA_AC;
    var CantTotPKW_DC = requestParams.Propiedades[0].CantTotPKW_DC;
    var PotAdKVA_AC = requestParams.Propiedades[0].PotAdKVA_AC;
    var PotAdKVA_DC = requestParams.Propiedades[0].PotAdKVA_DC;
    var ReqPotAdKVA_AC = requestParams.Propiedades[0].ReqPotAdKVA_AC;
    var ReqPueTV = requestParams.Propiedades[0].ReqPueTV;
    var ReqServMig = requestParams.Propiedades[0].ReqServMig;
    var TiempoReqBod = requestParams.Propiedades[0].TiempoReqBod;
    var UbicacionRack = requestParams.Propiedades[0].UbicacionRack;
    var PropieT = requestParams.Propiedades[0].PropieT;
    var UnidadEne = requestParams.Propiedades[0].UnidadEne;
    var CantAprxDisp = requestParams.Propiedades[0].CantAprxDisp;
    var CantAprxTelIP = requestParams.Propiedades[0].CantAprxTelIP;
    var ReqGatLA = requestParams.Propiedades[0].ReqGatLA;
    var CapacidadCoe = requestParams.Propiedades[0].CapacidadCoe;
    var coubicacionCXCrackCarrier = requestParams.Propiedades[0].coubicacionCXCrackCarrier;
    var cxcOpeZcarrHilos = requestParams.Propiedades[0].cxcOpeZcarrHilos;
    var cxcOpeZcarrUTP = requestParams.Propiedades[0].cxcOpeZcarrUTP;
    var cxcRackClieHilos = requestParams.Propiedades[0].cxcRackClieHilos;
    var cxcRackDifClieUTP = requestParams.Propiedades[0].cxcRackDifClieUTP;
    var cxcRackMismoClieHilos = requestParams.Propiedades[0].cxcRackMismoClieHilos;
    var cxcRackMismoClieUTP = requestParams.Propiedades[0].cxcRackMismoClieUTP;
    var cxcRutacarrMDAhda12hilos = requestParams.Propiedades[0].cxcRutacarrMDAhda12hilos;
    var cxcRutacarrMDAhda24hilos = requestParams.Propiedades[0].cxcRutacarrMDAhda24hilos;
    var cxcRutacarrMDAhda36hilos = requestParams.Propiedades[0].cxcRutacarrMDAhda36hilos;
    var cxcRutacarrMDAhda48hilos = requestParams.Propiedades[0].cxcRutacarrMDAhda48hilos;
    var cxcRutacarrMDAhdaUTP = requestParams.Propiedades[0].cxcRutacarrMDAhdaUTP;
    var fusionHiloInstal = requestParams.Propiedades[0].fusionHiloInstal;
    var ingresoFOrutPrim = requestParams.Propiedades[0].ingresoFOrutPrim;
    var Canales = requestParams.Propiedades[0].Canales;
    var ConEquip = requestParams.Propiedades[0].ConEquip;
    var DistanciaKm = requestParams.Propiedades[0].DistanciaKm;
    var Topologia = requestParams.Propiedades[0].Topologia;
    var unidad_medida = requestParams.Propiedades[0].unidad_medida;
    var DireccionS = requestParams.Propiedades[0].DireccionS;
    var TipoInter = requestParams.Propiedades[0].TipoInter;
    var Resilencia = requestParams.Propiedades[0].Resilencia;
    var AnchoBandaSedeC = requestParams.Propiedades[0].AnchoBandaSedeC;
    var NumEnl = requestParams.Propiedades[0].NumEnl;
    var ProvEnl = requestParams.Propiedades[0].ProvEnl;
    var FiltPorInf = requestParams.Propiedades[0].FiltPorInf;
    var FiltPorInfPer = requestParams.Propiedades[0].FiltPorInfPer;
    var InterOtt = requestParams.Propiedades[0].InterOtt;
    var PorcRefres = requestParams.Propiedades[0].PorcRefres;
    var ReqAntiDdos = requestParams.Propiedades[0].ReqAntiDdos;
    var SoloBraTip = requestParams.Propiedades[0].SoloBraTip;
    var AsignarDistribucionTrafico = requestParams.Propiedades[0].AsignarDistribucionTrafico;
    var TipoInternet = requestParams.Propiedades[0].TipoInternet;
    var TraficoInternacional = requestParams.Propiedades[0].TraficoInternacional;
    var TraficoNacional = requestParams.Propiedades[0].TraficoNacional;
    var ReqEntSer = requestParams.Propiedades[0].ReqEntSer;
    var AtribAdic = requestParams.Propiedades[0].AtribAdic;
    var ReqArreEq = requestParams.Propiedades[0].ReqArreEq;
    var ReqCap = requestParams.Propiedades[0].ReqCap;
    var ReqSiteS = requestParams.Propiedades[0].ReqSiteS;
    var ReqVentEq = requestParams.Propiedades[0].ReqVentEq;
    var ServicioTeams = requestParams.Propiedades[0].ServicioTeams;
    var Alcance = requestParams.Propiedades[0].Alcance;
    var CanAteAppAdm = requestParams.Propiedades[0].CanAteAppAdm;
    var CanAteAppUs = requestParams.Propiedades[0].CanAteAppUs;
    var CanAteCallC = requestParams.Propiedades[0].CanAteCallC;
    var CanAteCallD = requestParams.Propiedades[0].CanAteCallD;
    var CanAteChatGes = requestParams.Propiedades[0].CanAteChatGes;
    var CanAteEmSC = requestParams.Propiedades[0].CanAteEmSC;
    var CanAteEmSD = requestParams.Propiedades[0].CanAteEmSD;
    var CanAteHerr = requestParams.Propiedades[0].CanAteHerr;
    var CanAteIVR = requestParams.Propiedades[0].CanAteIVR;
    var CanAteLearn = requestParams.Propiedades[0].CanAteLearn;
    var CanAteLinea = requestParams.Propiedades[0].CanAteLinea;
    var CanAteMatF = requestParams.Propiedades[0].CanAteMatF;
    var CanAteOtro = requestParams.Propiedades[0].CanAteOtro;
    var CanAtePorC = requestParams.Propiedades[0].CanAtePorC;
    var CanAtePorO = requestParams.Propiedades[0].CanAtePorO;
    var CanAteRedSoc = requestParams.Propiedades[0].CanAteRedSoc;
    var CanAteRedReq = requestParams.Propiedades[0].CanAteRedReq;
    var CanAteChat = requestParams.Propiedades[0].CanAteChat;
    var ConfBasSerCro = requestParams.Propiedades[0].ConfBasSerCro;
    var ConfBasSerTa = requestParams.Propiedades[0].ConfBasSerTa;
    var ConfBasSerReq = requestParams.Propiedades[0].ConfBasSerReq;
    var ConfBasSerAns = requestParams.Propiedades[0].ConfBasSerAns;
    var ConfBasSerA = requestParams.Propiedades[0].ConfBasSerA;
    var ConfBasSerD = requestParams.Propiedades[0].ConfBasSerD;
    var ConfBasSerL = requestParams.Propiedades[0].ConfBasSerL;
    var ConfBasSerP = requestParams.Propiedades[0].ConfBasSerP;
    var ConfBasSerU = requestParams.Propiedades[0].ConfBasSerU;
    var DispMovilC = requestParams.Propiedades[0].DispMovilC;
    var FaciTipAirA = requestParams.Propiedades[0].FaciTipAirA;
    var FaciTipCabE = requestParams.Propiedades[0].FaciTipCabE;
    var FaciTipO = requestParams.Propiedades[0].FaciTipO;
    var FaciTipU = requestParams.Propiedades[0].FaciTipU;
    var GestContr = requestParams.Propiedades[0].GestContr;
    var HorarioAte = requestParams.Propiedades[0].HorarioAte;
    var IdiomaST = requestParams.Propiedades[0].IdiomaST;
    var ImpreCantImp = requestParams.Propiedades[0].ImpreCantImp;
    var MicroCantEq = requestParams.Propiedades[0].MicroCantEq;
    var Pais = requestParams.Propiedades[0].Pais;
    var ProvEquiBols = requestParams.Propiedades[0].ProvEquiBols;
    var ProvEquiCant = requestParams.Propiedades[0].ProvEquiCant;
    var ProvEquiMovA = requestParams.Propiedades[0].ProvEquiMovA;
    var ProvEquiMov = requestParams.Propiedades[0].ProvEquiMov;
    var ProvEquiOt = requestParams.Propiedades[0].ProvEquiOt;
    var ServCubDispM = requestParams.Propiedades[0].ServCubDispM;
    var ServCubFac = requestParams.Propiedades[0].ServCubFac;
    var ServCubGest = requestParams.Propiedades[0].ServCubGest;
    var ServCubImp = requestParams.Propiedades[0].ServCubImp;
    var ServCubMicro = requestParams.Propiedades[0].ServCubMicro;
    var ServCubOfi = requestParams.Propiedades[0].ServCubOfi;
    var ServCubOtro = requestParams.Propiedades[0].ServCubOtro;
    var ServCubTel = requestParams.Propiedades[0].ServCubTel;
    var ServProCantH = requestParams.Propiedades[0].ServProCantH;
    var ServProOtro = requestParams.Propiedades[0].ServProOtro;
    var ServProRecP = requestParams.Propiedades[0].ServProRecP;
    var ServProSerPro = requestParams.Propiedades[0].ServProSerPro;
    var ServProSopCSD = requestParams.Propiedades[0].ServProSopCSD;
    var ServProSopCRC = requestParams.Propiedades[0].ServProSopCRC;
    var ServProSopCRD = requestParams.Propiedades[0].ServProSopCRD;
    var TeleCantTel = requestParams.Propiedades[0].TeleCantTel;
    var TipoEquiAdap = requestParams.Propiedades[0].TipoEquiAdap;
    var TipoEquiBat = requestParams.Propiedades[0].TipoEquiBat;
    var TipoEquiDisD = requestParams.Propiedades[0].TipoEquiDisD;
    var TipoEquiMRam = requestParams.Propiedades[0].TipoEquiMRam;
    var TipoEquiMou = requestParams.Propiedades[0].TipoEquiMou;
    var TipoEquiOtro = requestParams.Propiedades[0].TipoEquiOtro;
    var TipoEquiTec = requestParams.Propiedades[0].TipoEquiTec;
    var TipoFac = requestParams.Propiedades[0].TipoFac;
    var TipoProEsp = requestParams.Propiedades[0].TipoProEsp;
    var TipoProIng = requestParams.Propiedades[0].TipoProIng;
    var TipoProOt = requestParams.Propiedades[0].TipoProOt;
    var TipoProTec = requestParams.Propiedades[0].TipoProTec;
    var InterEntre = requestParams.Propiedades[0].InterEntre;
    var BackUp = requestParams.Propiedades[0].BackUp;
    var CantidadAlmacenamiento = requestParams.Propiedades[0].CantidadAlmacenamiento;
    var CantidadMemoriaRam = requestParams.Propiedades[0].CantidadMemoriaRam;
    var CantidadProcesadores = requestParams.Propiedades[0].CantidadProcesadores;
    var CantidadVPN = requestParams.Propiedades[0].CantidadVPN;
    var DispEspe = requestParams.Propiedades[0].DispEspe;
    var EspacioBackUp = requestParams.Propiedades[0].EspacioBackUp;
    var NombreAplicativo = requestParams.Propiedades[0].NombreAplicativo;
    var RequiereVPNAdicional = requestParams.Propiedades[0].RequiereVPNAdicional;
    var TipoCobro = requestParams.Propiedades[0].TipoCobro;
    var TipoServicioCloud = requestParams.Propiedades[0].TipoServicioCloud;
    var AdDocAlcanceSN = requestParams.Propiedades[0].AdDocAlcance;
    var DirOrigen = requestParams.Propiedades[0].DirOrigen;
    var NodDestino = requestParams.Propiedades[0].NodDestino;
    var CantidadSed = requestParams.Propiedades[0].CantidadSed;
    var NombreSed = requestParams.Propiedades[0].NombreSed;
    var PorcUserT = requestParams.Propiedades[0].PorcUserT;
    var ReqMoniSeg = requestParams.Propiedades[0].ReqMoniSeg;
    var ReqReporte = requestParams.Propiedades[0].ReqReporte;
    var SAnchoBd = requestParams.Propiedades[0].SAnchoBd;
    var SoporteReq = requestParams.Propiedades[0].SoporteReq;
    var MarModFire = requestParams.Propiedades[0].MarModFire;

    //campos nuevos

    var canSensoHumoGases = requestParams.Propiedades[0].canSensoHumoGases;
    var canSensoHumeRela = requestParams.Propiedades[0].canSensoHumeRela;
    var canSensoConsElec = requestParams.Propiedades[0].canSensoConsElec;
    var canSensoPresElec = requestParams.Propiedades[0].canSensoPresElec;
    var canSensoUsoBaterias = requestParams.Propiedades[0].canSensoUsoBaterias;
    var canSensoNivCombus = requestParams.Propiedades[0].canSensoNivCombus;
    var canSensoPresMovi = requestParams.Propiedades[0].canSensoPresMovi;
    var canSensoAperPuertas = requestParams.Propiedades[0].canSensoAperPuertas;
    var tieneServicioInstala = requestParams.Propiedades[0].tieneServicioInstala;


    //PROPIEDADES EN AGREGADAS

    var ServidorActuCli = requestParams.Propiedades[0].ServidorActuCli;
    var HyperPlaActual = requestParams.Propiedades[0].HyperPlaActual;
    var RequiereTras = requestParams.Propiedades[0].RequiereTras;
    var cantidadAlmacenamiento = requestParams.Propiedades[0].cantidadAlmacenamiento;
    var cantidadProcesador = requestParams.Propiedades[0].cantidadProcesador;
    var cantidadRAM = requestParams.Propiedades[0].cantidadRAM;
    var CantidadUsAPP = requestParams.Propiedades[0].CantidadUsAPP;
    var cantidadVPN = requestParams.Propiedades[0].cantidadVPN;
    var DatacenterBck = requestParams.Propiedades[0].DatacenterBck;
    var modalidadServ = requestParams.Propiedades[0].modalidadServ;
    var nomAppCliente = requestParams.Propiedades[0].nomAppCliente;
    var PoliticaBck = requestParams.Propiedades[0].PoliticaBck;
    var repliAsincronaDatacenter = requestParams.Propiedades[0].repliAsincronaDatacenter;
    var reqServAdminBD = requestParams.Propiedades[0].reqServAdminBD;
    var reqServAdminSO = requestParams.Propiedades[0].reqServAdminSO;
    var reqServMigra = requestParams.Propiedades[0].reqServMigra;
    var reqVPNadd = requestParams.Propiedades[0].reqVPNadd;
    var ServicioBck = requestParams.Propiedades[0].ServicioBck;
    var TipodeReplica = requestParams.Propiedades[0].TipodeReplica;
    var tipoMV = requestParams.Propiedades[0].tipoMV;
    var tiposlicenciaBD = requestParams.Propiedades[0].tiposlicenciaBD;
    var tiposlicenciaSO = requestParams.Propiedades[0].tiposlicenciaSO;
    var tipoVPNadd = requestParams.Propiedades[0].tipoVPNadd;
    var AlcCober = requestParams.Propiedades[0].AlcCober;
    var BandasFrecuencia = requestParams.Propiedades[0].BandasFrecuencia;
    var CantidadEstimadaP = requestParams.Propiedades[0].CantidadEstimadaP;
    var EdificioInteres = requestParams.Propiedades[0].EdificioInteres;
    var NumeroPorSector = requestParams.Propiedades[0].NumeroPorSector;
    var SectoresRequeridos = requestParams.Propiedades[0].SectoresRequeridos;
    var Tecnologias = requestParams.Propiedades[0].Tecnologias;
    var CantidadZona = requestParams.Propiedades[0].CantidadZona;
    var OfertaPlay = requestParams.Propiedades[0].OfertaPlay;
    var ZonaInteres = requestParams.Propiedades[0].ZonaInteres;
    var AlturaTorre = requestParams.Propiedades[0].AlturaTorre;
    var Coordenadas = requestParams.Propiedades[0].Coordenadas;
    var RequiereConec = requestParams.Propiedades[0].RequiereConec;
    var RequiereConecServ = requestParams.Propiedades[0].RequiereConecServ;
    var numerusuardevisual = requestParams.Propiedades[0].numerusuardevisual;
    var proveeactserv = requestParams.Propiedades[0].proveeactserv;
    var Numrepordasbdllo = requestParams.Propiedades[0].Numrepordasbdllo;
    var numintgetls = requestParams.Propiedades[0].numintgetls;
    var numetlsactmopm = requestParams.Propiedades[0].numetlsactmopm;
    var numetlsactmopmb = requestParams.Propiedades[0].numetlsactmopmb;
    var numeltlsnuedllocoma = requestParams.Propiedades[0].numeltlsnuedllocoma;
    var numeltlsnuedllocomm = requestParams.Propiedades[0].numeltlsnuedllocomm;
    var numeltlsnuedllocomb = requestParams.Propiedades[0].numeltlsnuedllocomb;
    var capacalmpabodtosgb = requestParams.Propiedades[0].capacalmpabodtosgb;
    var nivcompdmodrel = requestParams.Propiedades[0].nivcompdmodrel;
    var talldboddedatos = requestParams.Propiedades[0].talldboddedatos;
    var motdebodededat = requestParams.Propiedades[0].motdebodededat;
    var versmotboddedat = requestParams.Propiedades[0].versmotboddedat;
    var tipdbackdacuathun = requestParams.Propiedades[0].tipdbackdacuathun;
    var tallaparmantnimyajus = requestParams.Propiedades[0].tallaparmantnimyajus;
    var TipoNube = requestParams.Propiedades[0].TipoNube;
    var reqConstruKPIS = requestParams.Propiedades[0].reqConstruKPIS;
    var conexiónrespaldoIP = requestParams.Propiedades[0].conexiónrespaldoIP;

    var CaracteristicaUno = requestParams.Propiedades[0].CaracteristicaUno;
    var CaracteristicaDos = requestParams.Propiedades[0].CaracteristicaDos;
    var Categoria = requestParams.Propiedades[0].Categoria;
    var CodigoSerCCE = requestParams.Propiedades[0].CodigoSerCCE;
    var Elasticidad = requestParams.Propiedades[0].Elasticidad;
    var MetricasSupervisar = requestParams.Propiedades[0].MetricasSupervisar;
    var CapacidadUpload = requestParams.Propiedades[0].CapacidadUpload;
    var NivelServicio = requestParams.Propiedades[0].NivelServicio;
    var apliPoliticaBkITXserv = requestParams.Propiedades[0].apliPoliticaBkITXserv;
    var DesemDiscoIOPS = requestParams.Propiedades[0].DesemDiscoIOPS;
    var TipoDataAlmacenar = requestParams.Propiedades[0].TipoDataAlmacenar;
    var TiposAlamacenamiento = requestParams.Propiedades[0].TiposAlamacenamiento;
    var Ethernet = requestParams.Propiedades[0].Ethernet;
    var express_cloud = requestParams.Propiedades[0].express_cloud;
    var Internet = requestParams.Propiedades[0].Internet;
    var NumeroHora = requestParams.Propiedades[0].NumeroHora;
    var RemoteHands = requestParams.Propiedades[0].RemoteHands;
    var Requierebodegaje = requestParams.Propiedades[0].Requierebodegaje;
    var RequierePKva = requestParams.Propiedades[0].RequierePKva;
    var RequierePSilla = requestParams.Propiedades[0].RequierePSilla;
    var RequierePPortatil = requestParams.Propiedades[0].RequierePPortatil;
    var RequierePWifi = requestParams.Propiedades[0].RequierePWifi;
    var TReqPTFDPortatil = requestParams.Propiedades[0].TReqPTFDPortatil;
    var PoyeccionCrecimiento = requestParams.Propiedades[0].PoyeccionCrecimiento;
    var CantAvanzados = requestParams.Propiedades[0].CantAvanzados;
    var CantDisDos = requestParams.Propiedades[0].CantDisDos;
    var SedesReqServi = requestParams.Propiedades[0].SedesReqServi;
    var ClienteReqInteg = requestParams.Propiedades[0].ClienteReqInteg;
    var ClienteReqEstado = requestParams.Propiedades[0].ClienteReqEstado;
    var NombreSedePrin = requestParams.Propiedades[0].NombreSedePrin;
    var ReqDiademas = requestParams.Propiedades[0].ReqDiademas;
    var ReqTerminales = requestParams.Propiedades[0].ReqTerminales;
    var ReqTroncalesAna = requestParams.Propiedades[0].ReqTroncalesAna;
    var ReqTrincalesPRI = requestParams.Propiedades[0].ReqTrincalesPRI;
    var ReqTrincalesSIP = requestParams.Propiedades[0].ReqTrincalesSIP;
    var ReqImpleCall = requestParams.Propiedades[0].ReqImpleCall;
    var ReqSoluSysGrab = requestParams.Propiedades[0].ReqSoluSysGrab;
    var ReqSoluSysTari = requestParams.Propiedades[0].ReqSoluSysTari;
    var ReqConsOpera = requestParams.Propiedades[0].ReqConsOpera;
    var CantidadAgenTeleCall = requestParams.Propiedades[0].CantidadAgenTeleCall;
    var CantidadAgenMulCall = requestParams.Propiedades[0].CantidadAgenMulCall;
    var CantidadSuperCall = requestParams.Propiedades[0].CantidadSuperCall;
    var LanNumSwitches = requestParams.Propiedades[0].LanNumSwitches;
    var CanSoftPhones = requestParams.Propiedades[0].CanSoftPhones;
    var CanSoftTurrets = requestParams.Propiedades[0].CanSoftTurrets;
    var ElCanWanEstaCerSopVoip = requestParams.Propiedades[0].ElCanWanEstaCerSopVoip;
    var ExtensionesAnalogas = requestParams.Propiedades[0].ExtensionesAnalogas;
    var FechaImpAcorConElCli = requestParams.Propiedades[0].FechaImpAcorConElCli;
    var LanCapa2O3 = requestParams.Propiedades[0].LanCapa2O3;
    var LanCatlCableado = requestParams.Propiedades[0].LanCatlCableado;
    var LanEstaCerSopVoip = requestParams.Propiedades[0].LanEstaCerSopVoip;
    var LanMarcaSwitch = requestParams.Propiedades[0].LanMarcaSwitch;
    var LanPoseePoe = requestParams.Propiedades[0].LanPoseePoe;
    var LanSoportaStacking = requestParams.Propiedades[0].LanSoportaStacking;
    var LinGsmActYReq = requestParams.Propiedades[0].LinGsmActYReq;
    var NumSes = requestParams.Propiedades[0].NumSes;
    var NumTelTipo1 = requestParams.Propiedades[0].NumTelTipo1;
    var NumTelTipo2 = requestParams.Propiedades[0].NumTelTipo2;
    var NumTorTipo1 = requestParams.Propiedades[0].NumTorTipo1;
    var NumTorTipo2 = requestParams.Propiedades[0].NumTorTipo2;
    var NumTorTipo3 = requestParams.Propiedades[0].NumTorTipo3;
    var PoseeUpsAut = requestParams.Propiedades[0].PoseeUpsAut;
    var ProCreEnLaDurlCre = requestParams.Propiedades[0].ProCreEnLaDurlCre;
    var ReqCloudInternexa = requestParams.Propiedades[0].ReqCloudInternexa;
    var ReqCollEnSelCli = requestParams.Propiedades[0].ReqCollEnSelCli;
    var ReqEnDatlCli = requestParams.Propiedades[0].ReqEnDatlCli;
    var ReqGtwLinCel = requestParams.Propiedades[0].ReqGtwLinCel;
    var ReqGtwLinTro = requestParams.Propiedades[0].ReqGtwLinTro;
    var ReqSupervivencia = requestParams.Propiedades[0].ReqSupervivencia;

    var SlasAcorConElCli = requestParams.Propiedades[0].SlasAcorConElCli;
    var TroDigEPriActYReq = requestParams.Propiedades[0].TroDigEPriActYReq;
    var TroSipActYReq = requestParams.Propiedades[0].TroSipActYReq;
    var ArqSugerida = requestParams.Propiedades[0].ArqSugerida;
    var RestriCC = requestParams.Propiedades[0].RestriCC;
    var DireccionSB = requestParams.Propiedades[0].DireccionSB;
    var TipoConfi = requestParams.Propiedades[0].TipoConfi;
    var ResilenciaB = requestParams.Propiedades[0].ResilenciaB;
    var TopoRe = requestParams.Propiedades[0].TopoRe;
    var DondeGestiona = requestParams.Propiedades[0].DondeGestiona;
    var Redundante = requestParams.Propiedades[0].Redundante;
    var ReqTorre = requestParams.Propiedades[0].ReqTorre;
    var TipoEnergia = requestParams.Propiedades[0].TipoEnergia;
    var TipoRack = requestParams.Propiedades[0].TipoRack;
    var DireccIP = requestParams.Propiedades[0].DireccIP;
    var PorcResCas = requestParams.Propiedades[0].PorcResCas;
    var Atributo = requestParams.Propiedades[0].Atributo;
    var Bwmax = requestParams.Propiedades[0].Bwmax;
    var ClaseSede = requestParams.Propiedades[0].ClaseSede;
    var DiasCaInst = requestParams.Propiedades[0].DiasCaInst;
    var UkOrig = requestParams.Propiedades[0].UkOrig;
    var UkDest = requestParams.Propiedades[0].UkDest;
    var ReqEspacioT = requestParams.Propiedades[0].ReqEspacioT;
    var TiempoEntCal = requestParams.Propiedades[0].TiempoEntCal;

    var ReqUkorigen = requestParams.Propiedades[0].ReqUkorigen;
    var ReqUltimoKM = requestParams.Propiedades[0].ReqUltimoKM;
    var UmedidaCanal = requestParams.Propiedades[0].UmedidaCanal;
    var NumeroUsGol = requestParams.Propiedades[0].NumeroUsGol;
    var NumeroUsSilVer = requestParams.Propiedades[0].NumeroUsSilVer;
    var NumeroUsBronce = requestParams.Propiedades[0].NumeroUsBronce;

    var DireccionPuntaB = requestParams.Propiedades[0].DireccionPuntaB;
    //var DiasEstimadosInstCal = requestParams.Propiedades[0].DiasEstimadosInstCal;
    var UnidadRack = requestParams.Propiedades[0].UnidadRack;
    //var EquipamentoA = requestParams.Propiedades[0].EquipamentoA;
    //var EquipamentoB = requestParams.Propiedades[0].EquipamentoB;
    var DasSmallCells = requestParams.Propiedades[0].DasSmallCells;
    var RelacionRe = requestParams.Propiedades[0].RelacionRe;


    //SE CREARON DESPUES DEL 31 ENERO 2022
    var ReqCollocationTorreA = requestParams.Propiedades[0].ReqCollocationTorreA;
    var ReqCollocationTorreB = requestParams.Propiedades[0].ReqCollocationTorreB;
    var TipoIntSitioA = requestParams.Propiedades[0].TipoIntSitioA;
    var TipoIntSitioB = requestParams.Propiedades[0].TipoIntSitioB;

    //Fin Nombre Bitacora Propiedades de Producto


    var Backupremservrep = requestParams.Propiedades[0].Backupremservrep;
    var Backupremservrepcf = requestParams.Propiedades[0].Backupremservrepcf;

    //Nombre bitacora cloud thunderecovery

    var ServidorActualVirtual = requestParams.Propiedades[0].ServidorActualVirtual;
    var HypervisorActualrecovery = requestParams.Propiedades[0].HypervisorActualrecovery;
    var CantidadTotalServidoresrecovery = requestParams.Propiedades[0].CantidadTotalServidoresrecovery;
    var CantidadVCPUrecovery = requestParams.Propiedades[0].CantidadVCPUrecovery;
    var ModalidaddeServiciorecovery = requestParams.Propiedades[0].ModalidaddeServiciorecovery;
    var CantidadeMemoriaRamrecovery = requestParams.Propiedades[0].CantidadeMemoriaRamrecovery;
    var CuantosUsuariosAccedenrecovery = requestParams.Propiedades[0].CuantosUsuariosAccedenrecovery;
    var RequiereServiciosdeAdministracionrecovery = requestParams.Propiedades[0].RequiereServiciosdeAdministracionrecovery;
    var TipodeServidorrecovery = requestParams.Propiedades[0].TipodeServidorrecovery;
    var RequiereServiciosdeAdministracionrecoverySO = requestParams.Propiedades[0].RequiereServiciosdeAdministracionrecoverySO;
    var TiposdeLicenciarecoveryBasededatosrecovery = requestParams.Propiedades[0].TiposdeLicenciarecoveryBasededatosrecovery;
    var RequiereServiciosdemigracionrecovery = requestParams.Propiedades[0].RequiereServiciosdemigracionrecovery;
    var TiposdeLicenciarecoverysistemasoperaticosrecovery = requestParams.Propiedades[0].TiposdeLicenciarecoverysistemasoperaticosrecovery;
    var RequiereVPNAdicionalesrecovery = requestParams.Propiedades[0].RequiereVPNAdicionalesrecovery;
    var RequiereServiciosBackup = requestParams.Propiedades[0].RequiereServiciosBackup;
    var TiposdeVPNAdicionalesrecovery = requestParams.Propiedades[0].TiposdeVPNAdicionalesrecovery;
    var CantidaddeVPNAdicionalesRecovery = requestParams.Propiedades[0].CantidaddeVPNAdicionalesRecovery;
    var NombreAplicativoClienterecovery = requestParams.Propiedades[0].NombreAplicativoClienterecovery;
    var incluirprotocoloDR = requestParams.Propiedades[0].incluirprotocoloDR;
	var internetrapido = requestParams.Propiedades[0].internetrapido;
	

    //Nombre bitacora cloud thunder ALMACENAMIENTO Y BackUp 27/04/2023
    var ModeloPrestacionServicioTBaaS = requestParams.Propiedades[0].ModeloPrestacionServicioTBaaS;
    var ServicioTBaaSRepositorio = requestParams.Propiedades[0].ServicioTBaaSRepositorio;
    var Cantidadmaquinasrespaldarrepositorio = requestParams.Propiedades[0].Cantidadmaquinasrespaldarrepositorio;
    var cantidadtotalgbrepositorio = requestParams.Propiedades[0].cantidadtotalgbrepositorio;
    var Avanzadotbassgestionadorepositorio = requestParams.Propiedades[0].Avanzadotbassgestionadorepositorio;
    var basicotbassgestionadoporcliente = requestParams.Propiedades[0].basicotbassgestionadoporcliente;
    var serviciotbasssadministrado = requestParams.Propiedades[0].serviciotbasssadministrado;
    var Cantidadmaquinasarespaldaradministrado = requestParams.Propiedades[0].Cantidadmaquinasarespaldaradministrado;
    var cantidadtotalgbadministrados = requestParams.Propiedades[0].cantidadtotalgbadministrados;
    var avanzadotbaasgestionadoadministrado = requestParams.Propiedades[0].avanzadotbaasgestionadoadministrado;
	var Conectividadparaelservicio = requestParams.Propiedades[0].Conectividadparaelservicio;
	
	
	
	
	



    //----------------------------Elemento de la Orden 

    var Id_OS = OrderID(requestParams.Id_OS);
    var Id_Servicio = ServiceID(requestParams.Id_Servicio);

    if (Id_Servicio == "" || Id_Servicio == null) {
        return {

            StatusCode: ('-203'),
            Mensaje: ('El campo Id de Servicio, no existe ó se encuentra vacío, campo obligatorio'),

        };

    }
    var Nombre_producto = PropiedadTabla(requestParams.Nombre_producto);
    //Variables Division valores
    var Nom_prod = Nombre_producto.split("/");
    var IdServ = Id_Servicio.split("/");

    var Id_Producto = ProductDuplicity(requestParams.Id_Producto, IdServ[0]);


    var Requiere_act = requestParams.Requiere_act;
    var Estado = requestParams.Estado;
    var Obs_solicitante = requestParams.Obs_solicitante;
    var Fecha_comp_entrega = requestParams.Fecha_comp_entrega;
    var Fecha_actualizada = requestParams.Fecha_comp_entrega;
    var Fecha_estim_entrega = requestParams.Fecha_estim_entrega;
    var Fecha_activa_ips = requestParams.Fecha_activa_ips;
    var Valor_mensual = requestParams.Valor_mensual;
    var Cargo_actv = requestParams.Cargo_actv;
    var Cargo_Instalacion = requestParams.Cargo_Instalacion;
    var Contrato_meses = requestParams.Contrato_meses;
    var Inversion_usd = requestParams.Inversion_usd;
    var Producto_asignado_a = requestParams.Producto_asignado_a; //<----------
    //Test
    var test = new GlideRecord("csm_order");
    test.addQuery("sys_id", Id_OS);
    test.query();
    if (test.next()) {
        Producto_asignado_a = test.u_asignado_a_la_instalaci_n;
    }
    //var Producto_asignado_a = requestParams.Producto_asignado_a;// Campo Ingeniero de Proyectos




    //Mensajes/Obligatoriedad de Campos
    if (Id_OS == "" || Id_OS == null) {
        return {

            StatusCode: ('-201'),
            Mensaje: ('El campo Id OS se encuentra vacío, campo obligatorio'),

        };
    } else if (Id_Producto == "" || Id_Producto == null) {
        return {

            StatusCode: ('-202'),
            Mensaje: ('El campo Id de Producto se encuentra vacío, campo obligatorio'),

        };
    }
    /*else if (Id_Servicio == "" || Id_Servicio == null) {
           return {

               StatusCode: ('-203'),
               Mensaje: ('El campo Id de Servicio se encuentra vacío, campo obligatorio'),

           };

       } */
    else if (Nombre_producto == "" || Nombre_producto == null) {
        return {

            StatusCode: ('-204'),
            Mensaje: ('El campo Nombre de Producto se encuentra vacío, campo obligatorio'),

        };

    } else if (Requiere_act == "" || Requiere_act == null) {
        return {

            StatusCode: ('-205'),
            Mensaje: ('El campo Requiere Acta se encuentra vacío, campo obligatorio'),

        };

    } else if (Estado == "" || Estado == null) {
        return {

            StatusCode: ('-206'),
            Mensaje: ('El campo Estado se encuentra vacío, campo obligatorio'),

        };

    }
    /*else if (Obs_solicitante == "" || Obs_solicitante == null) {
           return {

               StatusCode: ('-207'),
               Mensaje: ('El campo Observaciones del Solicitante se encuentra vacío, campo obligatorio'),

           };

       }*/
    else if (Fecha_comp_entrega == "" || Fecha_comp_entrega == null) {
        return {

            StatusCode: ('-208'),
            Mensaje: ('El campo Fecha Compromiso de Entrega se encuentra vacío, campo obligatorio'),

        };



    } else if (Fecha_estim_entrega == "" || Fecha_estim_entrega == null) {
        return {

            StatusCode: ('-210'),
            Mensaje: ('El campo Fechad Estimada de Entrega se encuentra vacío, campo obligatorio'),

        };

    } else if (Fecha_activa_ips == "" || Fecha_activa_ips == null) {
        return {

            StatusCode: ('-211'),
            Mensaje: ('El campo Fecha Activa IPS se encuentra vacío, campo obligatorio'),

        };

    } else if (Valor_mensual == "" || Valor_mensual == null) {
        return {

            StatusCode: ('-212'),
            Mensaje: ('El campo Valor Mensual se encuentra vacío, campo obligatorio'),

        };

    } else if (Cargo_actv == "" || Cargo_actv == null) {
        return {

            StatusCode: ('-213'),
            Mensaje: ('El campo Cargo Activo se encuentra vacío, campo obligatorio'),

        };

    } else if (Cargo_Instalacion == "" || Cargo_Instalacion == null) {
        return {

            StatusCode: ('-214'),
            Mensaje: ('El campo Cargo de Instalación se encuentra vacío, campo obligatorio'),

        };

    } else if (Contrato_meses == "" || Contrato_meses == null) {
        return {

            StatusCode: ('-215'),
            Mensaje: ('El campo Contrato Meses se encuentra vacío, campo obligatorio'),

        };


    } else if (Producto_asignado_a == "" || Producto_asignado_a == null) { // Campo Ingeniero de Proyectos
        return {

            StatusCode: ('-218'),
            Mensaje: ('El campo Producto asignado a se encuentra vacío, campo obligatorio'),

        };

    } else {


        //Creación Propiedades del Servicio o Producto

        var Prop = new GlideRecord(Nom_prod[0]);

        Prop.initialize();

        Prop.name = IdServ[1];

        Prop.u_elemento_os = true;

        //Validacion de campos 



        //-----------------------------------------PROPIEDADES GENERALES-----------------------------// 


        Prop.u_atrib_porc_disponibilidad = Idispo;

        Prop.u_atrib_ancho_de_banda_de_canal_ip_a_proteger = Capacidad;

        Prop.u_atrib_cantidad = Capacidad;

        Prop.u_atrib_cantidad_de_equipos = CantidadEqp;

        Prop.u_atrib_cantidad_de_sensores = canSensoTemp;

        Prop.u_atrib_cantidad_de_servidores = CantidadServi;

        Prop.u_atrib_cantidad_de_usuarios = NumeroUs;

        Prop.u_atrib_cantidad_energia = CantidadEn;

        Prop.u_atrib_capacidad = Capacidad;

        Prop.u_atrib_capacidad_flotante = Capacidad;

        Prop.u_atrib_capacidad_de_servicio = Capacidad;

        Prop.u_atrib_capacidad_download = Capacidad;

        Prop.u_atrib_ciudad = CiudadA;

        Prop.u_atrib_ciudad_a = CiudadA;

        Prop.u_atrib_ciudad_b = CiudadB;

        Prop.u_atrib_ciudad_destino = CiudadB;

        Prop.u_atrib_ciudad_origen = CiudadA;

        Prop.u_atrib_ciudad_principal_de_prestacion_del_servicio = CiudadA;

        Prop.u_atrib_ciudad_principal_de = CiudadA; //------------------------------->se agrego de mas 

        Prop.u_atrib_conexion_ptt_sao_paulo = CnSaoPaulo;

        Prop.u_atrib_datacenter = Datacenter;

        Prop.u_atrib_dias_estimados_de_instalacion = DiasEstimadosInst;

        Prop.u_atrib_dias_instalacion_en_calendario = DiasInstCalen;

        Prop.u_atrib_direccion = SiglaCiudadA;

        Prop.u_atrib_direccion_donde_se_prestara_el_servicio = SiglaCiudadA;

        Prop.u_atrib_direccion_punta_a = SiglaCiudadA;

        Prop.u_atrib_direccion_punta_b = SiglaCiudadB; //Prop.u_atrib_direccion_punta_b = DireccionPuntaB;

        Prop.u_atrib_disponibilidad_del_servicio = Idispo;

        Prop.u_atrib_disponibilidad_requerida = Idispo;

        Prop.u_atrib_disponibilidade = Idispo;

        Prop.u_atrib_duracion_del_servicio = DurServicio;

        Prop.u_atrib_equipamento_a = EquipamientoA;

        Prop.u_atrib_equipamento_b = EquipamientoB;

        Prop.u_atrib_espacio_en_torre = EspacioT;

        Prop.u_atrib_fecha_vencimiento = FechaVenc;

        Prop.u_atrib_gama = Gama;

        Prop.u_atrib_idioma_de_prestacin_del_servicio = Idioma;

        Prop.u_atrib_implementacion = Implementacion;

        Prop.u_atrib_indice_de_disponibilidad = Idispo;

        Prop.u_atrib_indice_de_disponibilidad_decimal = Idispo;

        Prop.u_atrib_interfaz_a = InterfazA;

        Prop.u_atrib_interfaz_b = InterfazB;

        Prop.u_atrib_la_oferta_incluye_equipos = OfIncEqp;

        Prop.u_atrib_marca = Marca;

        Prop.u_atrib_nodo_a = SitioPuntaA;

        Prop.u_atrib_nodo_b = SitioPuntaB;

        Prop.u_atrib_sitio_a = SitioPuntaA;

        Prop.u_atrib_sitio_b = SitioPuntaB;
        Prop.u_atrib_sitio_backbone_a = SiteBackboneA;
        Prop.u_atrib_sitio_backbone_b = SiteBackboneB;



        //Prop.u_atrib_sitio_backbone_a = SiteBackboneA;







        Prop.u_atrib_nombre = Nombre;

        Prop.u_atrib_nombre_sede = NombreSede;

        Prop.u_atrib_numero_de_usuarios = NumeroUs;

        Prop.u_atrib_numero_total_de_bloques_de_direcciones_clase_c = NumTotBDCC;

        Prop.u_atrib_observacion = Observaciones;

        Prop.u_atrib_observaciones = Observaciones;

        Prop.u_atrib_porcentaje_estimado_crecimiento_a_3_aos = PorEstCreTresA;

        Prop.u_atrib_redistribucion_de_capacidad = Redistribucion;

        Prop.u_atrib_relacion_reuso = RelacionRe;

        Prop.u_atrib_requiere_antiddos = RequiereAnti;

        Prop.u_atrib_requiere_arrandamiento_de_equipos = ReqArrenEqu;

        Prop.u_atrib_requiere_arrendamiento_de_equipos = ReqArrenEqu;

        Prop.u_atrib_requiere_collocation_en_ciudad_a = Collocation; //------->NODO ORIGEN

        Prop.u_atrib_requiere_collocation_en_ciudad_b = CollocationB; //------->NODO DESTINO

        Prop.u_atrib_requiere_collocation_en_punta_a = Collocation; //------->NODO ORIGEN

        Prop.u_atrib_requiere_collocation = Collocation;

        Prop.u_atrib_requiere_oym = ReqOyM;

        Prop.u_atrib_requiere_servicio_de_instalacion = ReqServInstA;

        Prop.u_atrib_requiere_servicios_tecnicos_y_profesionales = ReqServTecProfe;

        Prop.u_atrib_requiere_ultimo_kilometro = ReqUltimoKM;

        Prop.u_atrib_requiere_venta_de_equipos = ReqVentaEqu;

        Prop.u_atrib_serie = Serie;

        Prop.u_atrib_servicio_requerido = ServReq;

        Prop.u_atrib_servicios_adicionales = SubServi;

        Prop.u_atrib_tamao_de_ataques_a_mitigar = TamAtqMit;

        Prop.u_atrib_tiempo_requerido_de_puesto_de_trabajo_fisico_dias = TReqPTFD;

        Prop.u_atrib_tiempo_entrega_estimada = TiempoEntEstim;

        Prop.u_atrib_tiene_costo_de_instalacion_en_ciudad_a = TieneCostIntenCiudaA;

        Prop.u_atrib_tiene_costo_de_instalacion_en_ciudad_b = TieCostInsCiuB;

        // Prop.u_atrib_tiene_costos_de_instalacion_en_ciudad_a = TieneCostIntenCiudaA;

        Prop.u_atrib_tiene_servicios_de_instalacion = TieServInst;

        //Prop.u_atrib_tiene_servicios_de_instalacion = tieneServicioInstala; --- SE COMENTA POR CAMBIO DE NOMBRE BITACORA 

        Prop.u_atrib_tipo_de_equipo = TipoEqu;

        Prop.u_atrib_tipo_de_operacion = TipoOpe;

        Prop.u_atrib_tipo_de_red = TipoRed;

        Prop.u_atrib_tipo_de_servicio = TipoServ;

        Prop.u_atrib_tipo_interfaz = InterfazT;

        Prop.u_atrib_ultimo_kilometro_en_punta_a = Ukorigen;

        Prop.u_atrib_ultimo_kilometro_en_punta_b = UltimoKM;

        Prop.u_atrib_requiere_uk_origen = ReqUkorigen;

        Prop.u_atrib_requiere_uk_destino = ReqUltimoKM;

        Prop.u_atrib_unidad = Umedida;

        Prop.u_atrib_unidad_ancho_de_banda_ip = Umedida;

        Prop.u_atrib_unidad_de_facturacion = UnFact;

        Prop.u_atrib_unidad_de_medida = Umedida;

        Prop.u_atrib_unidad_espacio_torre = UEspacioT;

        Prop.u_atrib_unidad_medida = Umedida;

        Prop.u_atrib_visualizar_estado_portal = VisualizarEstadoPortal;

        Prop.u_atrib_requiere_administradores_de_red_en_sitio_describa = ReqAdminRed;

        Prop.u_atrib_requiere_analisis_de_ubicacion_movil = ReqAnaUbMov;

        Prop.u_atrib_requiere_control_de_acceso_para_invitados = ReqCtrlAccInv;

        Prop.u_atrib_requiere_control_de_ancho_de_banda = ReqCtrlAB;

        Prop.u_atrib_requiere_filtrado_basico_de_contenido_el_soportando_por_los_controladore = ReqFilBCSCont;

        Prop.u_atrib_requiere_procesos_de_analitica_avanzada = ReqProcAnAv;

        Prop.u_atrib_requiere_redes_que_soportan_internet_de_las_cosas_iot = ReqRedSIOT;

        Prop.u_atrib_requiere_sdn = ReqSDN;

        Prop.u_atrib_requiere_tecnicas_de_optimizacion = ReqTecOpt;

        Prop.u_atrib_si_las_variables_no_aparece_en_el_listado_por_favor_describirla_incluye = varNoAparListDes;

        Prop.u_atrib_nombre_del_servicio = Nservi;

        Prop.u_atrib_region = Region;

        Prop.u_atrib_idioma_de_prestacion_del_servicio = IdiomaST;



        //PROPIEDADES EN AGREGADAS 

        Prop.u_atrib_hypervisor_plataforma_actual = HyperPlaActual;

        Prop.u_atrib_requiere_traslado_infraestructura = RequiereTras;

        Prop.u_atrib_cantidad_almacenamiento_gb = cantidadAlmacenamiento; //Se cambia por el nombre correcto. Anteriormente tenia Capacidad

        Prop.u_atrib_replica__en_otro_datacenter = repliAsincronaDatacenter;

        Prop.u_atrib_unidad_de_venta = Umedida;

        Prop.u_atrib_tiempo_entrega_en_calendario = TiempoEntCal; ////-------- 

        Prop.u_atrib_tiempo_de_entrega_estimada = TiempoEntEstim;

        Prop.u_atrib_cantidad_estimada_personas_edificio = CantidadEstimadaP;

        Prop.u_atrib_das_o_small_cells = DasSmallCells;

        Prop.u_atrib_sectores_3g_4g_requeridos = SectoresRequeridos;

        Prop.u_atrib_tecnologias = Tecnologias;

        Prop.u_atrib_bandas_de_frecuencia_s = BandasFrecuencia;

        Prop.u_atrib_zona_de_interes = ZonaInteres;

        Prop.u_atrib_numero_de_etls_actualmente_operativas_co = numetlsactmopa;

        Prop.u_atrib_numero_etls_actualmente_operativas_complejidad_media = numetlsactmopm;

        Prop.u_atrib_tipo_de_nube = TipoNube;

        //Prop.u_atrib_variables_listar_incluyendo_sensores = varNoAparListDes; 

        Prop.u_atrib_requiere_construcciOn_de_kpis_a_la_medida_ = reqConstruKPIS;

        Prop.u_atrib_caracteristica_uno = CaracteristicaUno;

        Prop.u_atrib_caracteristica_dos = CaracteristicaDos;

        Prop.u_atrib_categoria = Categoria;

        Prop.u_atrib_codigo_de_servicio_cce = CodigoSerCCE;

        Prop.u_atrib_elasticidad = Elasticidad;

        Prop.u_atrib_metricas_a_supervisar = MetricasSupervisar;

        Prop.u_atrib_capacidad_upload = CapacidadUpload;

        Prop.u_atrib_nivel_de_servicio = NivelServicio;

        Prop.u_atrib_aplica_politica_de_backup_itx_al_servicio = apliPoliticaBkITXserv;

        Prop.u_atrib_desempeño_en_lectura_y_escritura_en_disco_requerido = DesemDiscoIOPS;

        Prop.u_atrib_tipo_de_data_a_almacenar = TipoDataAlmacenar;

        Prop.u_atrib_tipos_de_almacenamiento = TiposAlamacenamiento;

        Prop.u_atrib_ethernet = Ethernet;

        Prop.u_atrib_express_cloud = express_cloud;

        Prop.u_atrib_internet = Internet;

        Prop.u_atrib_numero_de_horas_mensuales = NumeroHora;

        Prop.u_atrib_remote_hands = RemoteHands;

        Prop.u_atrib_requiere_bodegaje = Requierebodegaje;

        Prop.u_atrib_requiere_potencia_adicional_kva_dc = RequierePKva;

        Prop.u_atrib_requiere_puesto_de_trabajo_mesa_silla_tel_wifi = RequierePSilla;

        Prop.u_atrib_requiere_puesto_de_trabajo_mesa_silla_tel_wifi_portatil = RequierePPortatil;

        Prop.u_atrib_requiere_puesto_de_trabajo_mesa_silla_wifi = RequierePWifi;

        Prop.u_atrib_tiempo_requerido_de_puesto_de_trabajo_fisico_dias_portatil = TReqPTFDPortatil;

        //SE CREARON DESPUES DEL 31 ENERO 2022
        Prop.u_atrib_requiere_collocation_en_torre_origen = ReqCollocationTorreA;
        Prop.u_atrib_requiere_collocation_en_torre_destino = ReqCollocationTorreB;

        Prop.u_atrib_tipo_de_interface_sitio_origen = TipoIntSitioA;
        Prop.u_atrib_tipo_de_interface_sitio_destino = TipoIntSitioB;


        //---------------------------------CONDICIONAL CAMPO ESPECIFICOS--------------------------------------// 



        //----------------------ACCESO A CONTENIDO 

        if (Nom_prod[0] == "u_cmdb_ci_serv_acceso_a_contenido") {

            Prop.u_atrib_nodo_backbone = SiteBackboneA;

            Prop.u_atrib_requiere_capacidad_burstable = CapacidadAdic;

            Prop.u_atrib_tipo_de_contenido = TipodeContenidoBrasil;

        }



        //---------------------- CRITICAL VOICE SOLUTION 

        if (Nom_prod[0] == "u_cmdb_ci_serv_critical_voice_solution") {

            Prop.u_atrib_tro_dig_e1_pri_act_y_re = TroDigEPriActYReq;

            Prop.u_atrib_req_en_datacenter_del_cli = ReqEnDatlCli;

            Prop.u_atrib_req_cloud_de_internexa = ReqCloudInternexa;

            Prop.u_atrib_pos_ups_aut = PoseeUpsAut;

            Prop.u_atrib_el_canal_wan_e = ElCanWanEstaCerSopVoip;

            Prop.u_atrib_req_de_col_en_sed_del_cli = ReqCollEnSelCli;

            Prop.u_atrib_slas_aco_con_el_cliente = Idispo;

            Prop.u_atrib_lan_capa_dos = LanCapa2O3;

            Prop.u_atrib_pro_de_cre_en_la_dur_del_con = ProCreEnLaDurlCre;

            Prop.u_atrib_lan_marca_switch = LanMarcaSwitch;

            Prop.u_atrib_lin_gsm_act_y_req = LinGsmActYReq;

            Prop.u_atrib_lan_ctg_del_cableado = LanCatlCableado;

            Prop.u_atrib_fecha_de_imp_aco_cli = FechaImpAcorConElCli;

            Prop.u_atrib_tro_sip_act_y_req = TroSipActYReq;

            Prop.u_atrib_ext_analogas = ExtensionesAnalogas;

            Prop.u_atrib_lan_soporta_stacking = LanSoportaStacking;

            Prop.u_atrib_lan_esta_cer_sopo_voip = LanEstaCerSopVoip;

            Prop.u_atrib_arq_suge_utilizar = ArqSugerida;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_num_de_tor_t_dos = NumTorTipo2;

            Prop.u_atrib_num_de_tel_t_uno = NumTelTipo1;

            Prop.u_atrib_req_supervi_ = ReqSupervivencia;

            Prop.u_atrib_req_gtw_lin_cel = ReqGtwLinCel;

            Prop.u_atrib_requiere_gateway_para_lineas_analogas = ReqGatLA;

            Prop.u_atrib_num_de_sedes = NumSes;

            Prop.u_atrib_num_de_tor_t_uno = NumTorTipo1;

            Prop.u_atrib_ciudad_sitio = CiudadA;

            Prop.u_atrib_lan_posee_poe = LanPoseePoe;

            Prop.u_atrib_num_de_tel_tdos = NumTelTipo2;

            Prop.u_atrib_num_de_tor_t_tres = NumTorTipo3;

            Prop.u_atrib_cant_de_soft_turrets = CanSoftTurrets;

            Prop.u_atrib_cantidad_de_lineas_por_torreta = Capacidad;

            Prop.u_atrib_sitio = SitioPuntaA;

            Prop.u_atrib_lan_nums = LanNumSwitches;

            Prop.u_atrib_cant_de_soft_phones = CanSoftPhones;

            Prop.u_atrib_req_gtw_lin_tro = ReqGtwLinTro;

        }



        //---------------------- CROSSCONNECTION 

        if (Nom_prod[0] == "u_cmdb_ci_serv_crossconnection") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //---------------------- CROSSCONNECTION DATACENTER 

        if (Nom_prod[0] == "u_cmdb_ci_serv_crossconnection_datacenter") {
            Prop.u_atrib_ingreso_de_fo_unica_ruta_primera_fusion_par_hilos = ingresoFOrutPrim;

            Prop.u_atrib_cantidad_coubicacion = CapacidadCoe;
            Prop.u_atrib_cxc_ruta_carrier_mda_hda_fo_12_incluye_primer_par_de_hilos = cxcRutacarrMDAhda12hilos;

            Prop.u_atrib_fusion_por_par_de_hilo_aplica_en_cualquier_fo_instalada = fusionHiloInstal;
            Prop.u_atrib_cxc_entre_rack_mismo_cliente_hda_fo_par_hilos = cxcRackMismoClieHilos;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_cxc_entre_rack_diferente_cliente_hda_fo_par_de_hilos = cxcRackClieHilos;

            Prop.u_atrib_cxc_entre_operadores_zcarrier_utp = cxcOpeZcarrUTP;

            Prop.u_atrib_coubicacion_cxc_unidad_de_rackenergia_kw_zcarrier = coubicacionCXCrackCarrier;

            Prop.u_atrib_cxc_entre_operadores_zcarrier_fo_par_hilos = cxcOpeZcarrHilos;

            Prop.u_atrib_cxc_ruta_carrier_mda_hda_fo_36_incluye_primer_par_de_hilos = cxcRutacarrMDAhda36hilos;

            Prop.u_atrib_cxc_entre_rack_diferente_cliente_hda_utp = cxcRackDifClieUTP;

            Prop.u_atrib_cxc_entre_rack_mismo_cliente_hda_utp = cxcRackMismoClieUTP;

            Prop.u_atrib_cxc_ruta_carrier_mda_hda_fo_24_incluye_primer_par_de_hilos = cxcRutacarrMDAhda24hilos;

            Prop.u_atrib_cxc_ruta_carrier_mda_hda_fo_48_incluye_primer_par_de_hilos = cxcRutacarrMDAhda48hilos;

            Prop.u_atrib_cxc_ruta_carrier_mda_hda_utp = cxcRutacarrMDAhdaUTP;

        }



        //---------------------- ESPECTRO OPTICO 

        if (Nom_prod[0] == "u_cmdb_ci_serv_espectro_optico") {

            Prop.u_atrib_topologia = Topologia;

            Prop.u_atrib_nodo = SitioPuntaA;

            Prop.u_atrib_ciudad_nodo_origen = CiudadA;

            Prop.u_atrib_canales = Canales;

            Prop.u_atrib_con_equipos = ConEquip;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_distancia_km = DistanciaKm;

            Prop.u_atrib_capacidad_requerida = Capacidad;

            Prop.u_atrib_unidad_capacidad = Umedida;

        }



        //---------------------- ETHERNET 

        if (Nom_prod[0] == "u_cmdb_ci_serv_ethernet") {

            Prop.u_atrib_uk_origen = Ukorigen2;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_uk_destino = UltimoKM2;

            Prop.u_atrib_requiere_ethernet_burstable = CapacidadAdic;


        }



        //---------------------- ETHERNET BURSTABLE 

        if (Nom_prod[0] == "u_cmdb_ci_serv_ethernet_burstable") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //---------------------- ETHERNET CORPORATIVO 

        if (Nom_prod[0] == "u_cmdb_ci_serv_ethernet_corporativo") {

            Prop.u_atrib_direc_prestara_b = DireccionSB;

            Prop.u_atrib_tipo_de_interfaz = TipoInter;

            Prop.u_atrib_tipo_clase_config = TipoConfi;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_topologia_req = TopoRe;

            Prop.u_atrib_algun_restric = RestriCC;

            Prop.u_atrib_direccion_donde_se_prestara_el_servicio_punto_a = DireccionS;

            Prop.u_atrib_tipo_de_resiliencia_necesaria_punto_a = Resilencia;

            Prop.u_atrib_tipo_resilencia_b = ResilenciaB;

        }



        //---------------------- EXPRESS CLOUD 

        if (Nom_prod[0] == "u_cmdb_ci_serv_express_cloud") {

            Prop.u_atrib_ancho_de_banda_por_sede_cliente = AnchoBandaSedeC;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_requiere_ultima_milla = ReqUltimoKM;

        }



        //---------------------- FACILIDADE IP 

        if (Nom_prod[0] == "u_cmdb_ci_serv_facilidade_ip") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //---------------------- FIBRA OSCURA 

        if (Nom_prod[0] == "u_cmdb_ci_serv_fibra_oscura") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //---------------------- FILE SHARING (No usar) 

        if (Nom_prod[0] == "u_cmdb_ci_serv_file_sharing_no_usar") {

            Prop.u_atrib_donde_gestiona_rem = DondeGestiona;

            Prop.u_atrib_almacenamiento_requerido = Capacidad;

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //---------------------- FULL SERVICE 

        if (Nom_prod[0] == "u_cmdb_ci_serv_full_service") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //---------------------- GESTION LAN 

        if (Nom_prod[0] == "u_cmdb_ci_serv_gestion_lan") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //---------------------- GESTION WAN 

        if (Nom_prod[0] == "u_cmdb_ci_serv_gestion_wan") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_proveedor_enlace = ProvEnl;

            Prop.u_atrib_numero_de_enlaces = NumEnl;

        }



        //---------------------- HOTELES DE COMUNICACIÓN (No usar) 

        if (Nom_prod[0] == "u_cmdb_ci_serv_hoteles_de_comunicacion_no_usar") {

            Prop.u_atrib_req_torre = ReqTorre;

            Prop.u_atrib_type_energy = TipoEnergia;

            Prop.u_atrib_redundante = Redundante;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_type_rack = TipoRack;

            Prop.u_atrib_uni_energy = UnidadEne;

        }



        //---------------------- INTERNEXA POP TO POP FRACCIONAL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_pop_to_pop_fraccional") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- ADMINISTRACION DATACENTER 

        if (Nom_prod[0] == "u_cmdb_ci_serv_administracion_datacenter") {

            Prop.u_atrib_horario_del_servicio_data = HorarioS;

            Prop.u_atrib_lineas_de_servicio = LineaServ;

            Prop.u_atrib_requiere_herramientas = ReqHerr;

            Prop.u_atrib_requiere_servicios_de_migracion = ReqServMigr;

            Prop.u_atrib_tipo_de_datacenter_donde_esta_la_infraestructura_a_administrar = TipDatInfAdm;



        }

        //------------------------- ADMINISTRACIÓN DE REDES 

        if (Nom_prod[0] == "u_cmdb_ci_serv_administracion_de_redes") {

            Prop.u_atrib_categoria_de_servicio = categServ;

            Prop.u_atrib_criticidad_complejidad = criticidad;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_requiere_portal_cautivo = ReqPorCau;

            Prop.u_atrib_requiere_filtrado_basico_de_contenido = ReqFilBCSCont;

            Prop.u_atrib_requiere_funcionalidades_de_seguridad = reqFuncSegu;

            Prop.u_atrib_requiere_personal_en_premisa_del_cliente = ReqPerPC;



        }

        //-------------------------- ATP INDOOR DNS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_atp_indoor_dns") {

            Prop.u_atrib_alcance_cobertura_del_edificio = Idispo;

            Prop.u_atrib_bandas_de_frecuencia = BandasFrecuencia;

            Prop.u_atrib_ciudad_de_ubicacion_del_edificio = CiudadA;

            Prop.u_atrib_dimensiones_area_del_edificio = DimenEdificio;

            Prop.u_atrib_edificio_de_interes = EdificioInteres;

            Prop.u_atrib_numero_portadoras_sector = NumeroPorSector;



        }



        // ------------------ ATP OUTDOOR DNS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_atp_outdoor_dns") {

            Prop.u_atrib_alcance_cobertura = AlcCober;

            Prop.u_atrib_cantidad_estimada_usuarios_zona = CantidadZona;

            Prop.u_atrib_ciudad_de_interes = CiudadA;

            Prop.u_atrib_numero_portadoras_sector = NumeroPorSector;

            Prop.u_atrib_oferta_equipos_plug_play = OfertaPlay;

            Prop.u_atrib_zona_punto_interes = ZonaInteres;





        }

        //------------------ ATP TORRES 

        if (Nom_prod[0] == "u_cmdb_ci_serv_atp_torres") {

            Prop.u_atrib_altura_requerida_en_torre = AlturaTorre;

            Prop.u_atrib_coordenadas = Coordenadas;

            Prop.u_atrib_requiere_conectividad = RequiereConec;

            Prop.u_atrib_requiere_conectividad_servicios_3g_4g = RequiereConecServ;

        }



        //------------------- B ANALYTICS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_b_analytics") {

            Prop.u_atrib_capacidad_almacenamiento_bodega_datos_gb = capacalmpabodtosgb;

            Prop.u_atrib_motor_de_bodega_de_datos = motdebodededat;

            Prop.u_atrib_nivel_complejidad_modelo_relacional = nivcompdmodrel;

            Prop.u_atrib_numero_de_etls_actualmente_operativas_complejidad_alta = numetlsactmopa;

            Prop.u_atrib_numero_etls_actualmente_operativas_complejidad_baja = numetlsactmopmb;

            Prop.u_atrib_numero_etls_actualmente_operativas_complejidad_media = numetlsactmopm;

            Prop.u_atrib_numero_etls_nuevas_desarrollar_complejidad_alta = numeltlsnuedllocoma;

            Prop.u_atrib_numero_etls_nuevas_desarrollar_complejidad_baja = numeltlsnuedllocomb;

            Prop.u_atrib_numero_etls_nuevas_desarrollar_complejidad_media = numeltlsnuedllocomm;

            Prop.u_atrib_numero_integraciones_etls = numintgetls;

            Prop.u_atrib_numero_reportes_dashboards_desarrollar = Numrepordasbdllo;

            Prop.u_atrib_numero_usuarios_visualizacion = numerusuardevisual;

            Prop.u_atrib_proveedor_actual_servicio = proveeactserv;

            Prop.u_atrib_talla_bodega_datos = talldboddedatos;

            Prop.u_atrib_talla_para_mantenimiento_ajuste = tallaparmantnimyajus;

            Prop.u_atrib_tipo_de_backup_acuerdothunder = tipdbackdacuathun;

            Prop.u_atrib_version_motor_bodega_de_datos = versmotboddedat;



        }



        //---------------------- B-IOT 

        if (Nom_prod[0] == "u_cmdb_ci_serv_biot") {

            Prop.u_atrib_variables_listar_incluyendo_sensores = varNoAparListDes;

            Prop.u_atrib_ambientales_humedad_relativa = AmbHumeRela;

            Prop.u_atrib_ambientales_humo_y_gases = AmbHumoGases;

            Prop.u_atrib_ambientales_temperatura = AmbTemperatura;

            Prop.u_atrib_cantidad_afm = Capacidad;

            Prop.u_atrib_cantidad_sensores_ambientales_humedad = canSensoHumeRela;

            Prop.u_atrib_cantidad_sensores_ambientales_humo = canSensoHumoGases;

            Prop.u_atrib_cantidad_sensores_ambientales_temperatura = canSensoTemp;

            Prop.u_atrib_cantidad_sensores_civiles_apertura = canSensoAperPuertas;

            Prop.u_atrib_cantidad_sensores_civiles_presencia = canSensoPresMovi;

            Prop.u_atrib_cantidad_sensores_electricas_bancos = canSensoUsoBaterias;

            Prop.u_atrib_cantidad_sensores_electricas_consumo = canSensoConsElec;

            Prop.u_atrib_cantidad_sensores_electricas_niveles = canSensoNivCombus;

            Prop.u_atrib_cantidad_sensores_electricas_presencia = canSensoPresElec;

            Prop.u_atrib_civiles_apertura_de_puertas = civAperPuertas;

            Prop.u_atrib_civiles_presenciamovimiento = civPresMovi;

            Prop.u_atrib_direccion_donde_se_encuentra_el_activo_fisico = DireActFisMon;

            Prop.u_atrib_electricas_consumo_electrico = elecConsElec;

            Prop.u_atrib_electricas_niveles_de_combustible = elecNivCombus;

            Prop.u_atrib_electricas_presencia_electrica = elecPresElec;

            Prop.u_atrib_electricas_uso_del_banco_de_baterias = elecUsoBaterias;

            Prop.u_atrib_nombre_del_activo_fisico_a_monitorear = nomActFisMon;

            Prop.u_atrib_numero_de_dias_de_instalacion = numDiasInst;

            Prop.u_atrib_numero_total_de_gateways = numTotalGatew;

            Prop.u_atrib_observaciones_adicionales = ObseAdicio;

            Prop.u_atrib_requiere_instalacion_de_sensores = reqInstaSensores;

            Prop.u_atrib_tiempo_para_garantia = tiempGarant;

            Prop.u_atrib_los_sensores_los_suministra_el_cliente = sensoSuminisCliente;

        }

        //--------------------- BACKUP AS A SERVICE 

        if (Nom_prod[0] == "u_cmdb_ci_serv_backup_as_a_service") {

            Prop.u_atrib_almacenamiento_requerido_servidores = AlmacenaRS;

            Prop.u_atrib_almacenamiento_requerido_usuarios = AlmacenaRU;

            Prop.u_atrib_capacidad_total = Capacidad;

            Prop.u_atrib_ciudad_principal_del_cliente = CiudadA;

            Prop.u_atrib_estrategia_de_backup = EstBackup;

            Prop.u_atrib_numero_de_servidores = NumeroServ;

            Prop.u_atrib_tipo_de_backup = TipoBackup;



        }



        //------------------------- CAPACIDAD ESPECTRAL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_capacidad_espectral") {

            Prop.u_atrib_dias_de_instalacion = DiasInstCalen;

            Prop.u_atrib_tiene_costos_de_instalacion_en_ciudad_b = TieCostInsCiuB;

        }



        //------------------------ CCE INTERNET 

        if (Nom_prod[0] == "u_cmdb_ci_serv_cce_internet") {

            Prop.u_atrib_ciudad_donde_se_entrega_el_servicio = CiudadA;

        }
        //----------------------- Cloud THUNDER IaaS almacenamiento & backup

        if (Nom_prod[0] == "u_cmdb_ci_serv_cloud_thunder_almacenamiento") {



            Prop.u_atrib_backup_remoto_s_r = Backupremservrep;
            Prop.u_atrib_backup_remoto_s_r_c = Backupremservrepcf;
            Prop.u_atrib_prestacin_servicio_tbaas = ModeloPrestacionServicioTBaaS;
            Prop.u_atrib_tbasss_repositorio = ServicioTBaaSRepositorio;
            Prop.u_atrib_maquinas_respaldar = Cantidadmaquinasrespaldarrepositorio;
            Prop.u_atrib_cantidad_total_gb = cantidadtotalgbrepositorio;
            Prop.u_atrib_gestionado_por_internexa = Avanzadotbassgestionadorepositorio;
            Prop.u_atrib_gestionado_cliente_tbass = basicotbassgestionadoporcliente;
            Prop.u_atrib_tbass_administrado = serviciotbasssadministrado;
            Prop.u_atrib_administrado_respaldar_maquinas = Cantidadmaquinasarespaldaradministrado;
            Prop.u_atrib_administrado_gb = cantidadtotalgbadministrados;
            Prop.u_atrib_tbasss_administrados_gestionado = avanzadotbaasgestionadoadministrado;





        }



        //----------------------- Cloud THUNDER IaaS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_cloud_thunder_iaas") {

            Prop.u_atrib_cantidad_de_vpn_adicionales = cantidadVPN;

            Prop.u_atrib_cantidad_memoria_gb = cantidadRAM;

            Prop.u_atrib_cantidad_total_servidores = Capacidad;

            Prop.u_atrib_cantidad_vcpu_unidades = cantidadProcesador;

            Prop.u_atrib_cuantos_usuarios = CantidadUsAPP;

            Prop.u_atrib_datacenter_bck = DatacenterBck;

            Prop.u_atrib_hypervisor_plataforma_actual = HyperPlaActual;

            Prop.u_atrib_modalidad_del_servicio = modalidadServ;

            Prop.u_atrib_nombre_del_aplicativo_que_correria = nomAppCliente;

            Prop.u_atrib_politica_de_backup = PoliticaBck;

            Prop.u_atrib_replica_en_otro_datacenter = CiudadPPCliente;

            Prop.u_atrib_requiere_servicio_de_migracion = reqServMigra;

            Prop.u_atrib_requiere_servicios_de_admin_de_bd = reqServAdminBD;

            Prop.u_atrib_requiere_servicios_de_admin_de_so = reqServAdminSO;

            Prop.u_atrib_requiere_servicios_de_backup = ServicioBck;

            Prop.u_atrib_requiere_vpn_adicionales = reqVPNadd;

            Prop.u_atrib_servidor_actual_del_cliente_virtual = ServidorActuCli;

            Prop.u_atrib_tipo_de_replica = TipodeReplica;

            Prop.u_atrib_tipo_de_servidor_virtual_mv = tipoMV;

            Prop.u_atrib_tipo_de_vpn_adicionales = tipoVPNadd;

            Prop.u_atrib_tipos_de_licencia_de_sistema_operativos = tiposlicenciaSO;

            Prop.u_atrib_tipos_de_licencias_de_base_de_datos = tiposlicenciaBD;



        }
        //----------------------- Cloud THUNDERECOVERY

        if (Nom_prod[0] == "u_cmdb_ci_cloud_thunderecovery") {

            Prop.u_atrib_servidor_actual_del_cliente_virtual_recovery = ServidorActualVirtual;

            Prop.u_atrib_hypervisor_plataforma_actual_recovery = HypervisorActualrecovery;

            Prop.u_atrib_cantidad_total_servidores_recovery = CantidadTotalServidoresrecovery;

            Prop.u_atrib_cantidad_vcpu_unidades_recovery = CantidadVCPUrecovery;

            Prop.u_atrib_modalidad_del_servicio_recovery = ModalidaddeServiciorecovery;

            Prop.u_atrib_cantidad_memoria_gb_recovery = CantidadeMemoriaRamrecovery;

            Prop.u_atrib_cuantos_usuarios_recovery = CuantosUsuariosAccedenrecovery;

            Prop.u_atrib_requiere_servicios_de_admin_de_bd_recovery = RequiereServiciosdeAdministracionrecovery;

            Prop.u_atrib_tipo_de_servidor_virtual_mv_recovery = TipodeServidorrecovery;

            Prop.u_atrib_requiere_servicios_de_admin_de_so_recovery = RequiereServiciosdeAdministracionrecoverySO;

            Prop.u_atrib_tipos_de_licencias_de_base_de_datos_recovery = TiposdeLicenciarecoveryBasededatosrecovery;

            Prop.u_atrib_requiere_servicio_de_migracion_revovery = RequiereServiciosdemigracionrecovery;

            Prop.u_atrib_tipos_de_licencia_de_sistema_operativos_recovery = TiposdeLicenciarecoverysistemasoperaticosrecovery;

            Prop.u_atrib_requiere_vpn_adicionales_recovery = RequiereVPNAdicionalesrecovery;

            Prop.u_atrib_requiere_servicios_de_backup_recovery = RequiereServiciosBackup;

            Prop.u_atrib_tipo_de_vpn_adicionales_recovery = TiposdeVPNAdicionalesrecovery;

            Prop.u_atrib_cantidad_de_vpn_adicionales_recovery = CantidaddeVPNAdicionalesRecovery;

            Prop.u_atrib_nombre_del_aplicativo_que_correria_recovery = NombreAplicativoClienterecovery;

            Prop.u_atrib_protocolo_DR_recovery = incluirprotocoloDR;


        }
        //----------------------- INTERNEXA INFRASTRUCTURE AREA 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_infrastructure_area") {

            Prop.u_atrib_unidad_energia = UnidadEne;

        }

        //--------------------- INTERNET EMPRESAS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internet_empresas") {

            Prop.u_atrib_ciudad_prestacion_del_servicio = CiudadA;

            Prop.u_atrib_requiere_entregar_el_servicio_mediante_una_ultima_milla = ReqEntSer;

        }

        //--------------------- INTERNET 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internet") {

            Prop.u_atrib_solo_brasil_tipo_de_internet = SoloBraTip;

            Prop.u_atrib_solo_chile_asignar_distribucion_de_trafico = AsignarDistribucionTrafico;

            Prop.u_atrib_solo_chile_tipo_de_internet = TipoInternet;

            Prop.u_atrib_solo_chile_trafico_internacional_en_mbps = TraficoInternacional;

            Prop.u_atrib_solo_chile_trafico_nacional_en_mbps = TraficoNacional;

            Prop.u_atrib_filtrado_pornografia_infantil = FiltPorInf;

            Prop.u_atrib_filtrado_pornografia_infantil_personalizado_web_site = FiltPorInfPer;

            Prop.u_atrib_internet_ott = InterOtt;

            Prop.u_atrib_porcentaje_de_refresco = PorcRefres;

            Prop.u_atrib_requiere_anti_ddos_burstable = ReqAntiDdos;

            Prop.u_atrib_requiere_capacidad_burstable = CapacidadAdic;

            Prop.u_atrib_ip_respaldo_conexion = conexiónrespaldoIP;



        }





        //--------------------- SEGURIDAD PERIMETRAL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_seguridad_perimetral") {

            Prop.u_atrib_unidad_de_medida_canal_de_datos = UmedidaCanal;

            Prop.u_atrib_ciudad_prestacion_del_servicio = CiudadA;

            Prop.u_atrib_tipo_de_soporte_tecnico_a_requerimientos_solicitado = SoporteReq;
            Prop.u_atrib_unidad_de_medida_canales_internet = Umedida; //VALIDAR ESTE CAMPO CON CRM 

            Prop.u_atrib_sumatoria_de_ancho_de_banda_a_proteger_de_canales_de_internet = Capacidad;

            Prop.u_atrib_sumatoria_de_ancho_de_banda_a_proteger_de_canales_de_datos = SAnchoBd;

            Prop.u_atrib_requiere_servicio_adicional_de_reportes = ReqReporte;

            Prop.u_atrib_requiere_servicio_adicional_de_monitoreo_de_seguridad = ReqMoniSeg;

            Prop.u_atrib_porcentaje_de_crecimiento_de_usuarios_totales_durante_el_contrato = PorcUserT;

            Prop.u_atrib_numero_de_usuarios_totales_de_todas_las_sedes_cubiertas_por_el_mismo_ser = NumeroUs;

            Prop.u_atrib_nombre_de_sede_central_con_la_salida_a_internet = NombreSed;

            Prop.u_atrib_cantidad_de_sedes_cubiertas_por_el_mismo_servicio = CantidadSed;

        }





        //--------------------- SEGURIDAD SERVICIOS TÉCNICOS Y/O PROFESIONALES 

        if (Nom_prod[0] == "u_cmdb_ci_serv_seguridad_servicios_tecnicos_yo_profesionales") {

            Prop.u_atrib_horario_del_servicio = HorarioS;



        }



        //--------------------- SERVICIOS TECNICOS Y PROFESIONALES DE TRASLADO DC  

        if (Nom_prod[0] == "u_cmdb_ci_serv_servicios_tecnicos_y_profesionales_de_traslado_dc") {

            Prop.u_atrib_nodo_destino = NodDestino;

            Prop.u_atrib_direccion_origen = DirOrigen;

            Prop.u_atrib_adjunta_documento_con_alcance_del_servicio_opcion_de_respuesta_sino = AdDocAlcanceSN;

        }





        //--------------------- THUNDER  

        if (Nom_prod[0] == "u_cmdb_ci_serv_thunder") {

            Prop.u_atrib_backup_unidada_gb = BackUp;

            Prop.u_atrib_cantidad_almacenamiento_unidad_gb = CantidadAlmacenamiento;

            Prop.u_atrib_cantidad_de_memoria_ram_en_gb = CantidadMemoriaRam;

            Prop.u_atrib_cantidad_de_procesadores_unidad_vcpu = CantidadProcesadores;

            Prop.u_atrib_cantidad_de_vpn = CantidadVPN;

            Prop.u_atrib_disponibilidad_especifica = DispEspe;

            Prop.u_atrib_espacio_backup_en_gb = EspacioBackUp;

            Prop.u_atrib_numero_de_servidores_virtuales = Capacidad;
            Prop.u_atrib_proveedor_actual_del_servicio = NombreAplicativo;

            Prop.u_atrib_requiere_vpn_adicional = RequiereVPNAdicional;

            Prop.u_atrib_tiempo_de_entrega = TiempoEntEstim;

            Prop.u_atrib_tip_cobr = TipoCobro;

            Prop.u_atrib_tipo_de_servicio_cloud = TipoServicioCloud;

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }


        //--------------------- THUNDER  CLOUD HIBRIDO

        if (Nom_prod[0] == "u_cmdb_ci_thunder_cloud_hibrido") {


        }


        //--------------------- WAVELENGTH 

        if (Nom_prod[0] == "u_cmdb_ci_serv_wavelength") {

            Prop.u_atrib_interfaz_de_entrega = InterEntre;

        }



        //--------------------- CONECTIVIDAD VENTA DE EQUIPOS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_conectividad_venta_de_equipos") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- CONECTIVIDAD SERVICIOS TÉCNICOS Y/O PROFESIONALES 

        if (Nom_prod[0] == "u_cmdb_ci_serv_conectividad_servicios_tecnicos_yo_profesionales") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }





        //--------------------- CONECTIVIDAD ARRENDAMIENTO DE EQUIPOS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_conectividad_arrendamiento_de_equipos") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //--------------------- COMUNICACIONES UNIFICADAS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_comunicaciones_unificadas") {

            Prop.u_atrib_usuarios_durante_el_contrato = PoyeccionCrecimiento;

            Prop.u_atrib_can_aprox_de_dispo = CantAvanzados;

            Prop.u_atrib_can_aproxde_dispos_dos = CantDisDos;

            Prop.u_atrib_cuantas_sedes_req_del_ser_de_super = SedesReqServi;

            Prop.u_atrib_el_cli_req_de_una_int_con_su_dir_act = ClienteReqInteg;

            Prop.u_atrib_el_cli_req_ofim = ClienteReqEstado;

            Prop.u_atrib_nombre_de_la_sede_prin = NombreSedePrin;

            Prop.u_atrib_req_diademas = ReqDiademas;

            Prop.u_atrib_req_ters_anlg_cuantos_apro = ReqTerminales;

            Prop.u_atrib_req_tron_anlg = ReqTroncalesAna;

            Prop.u_atrib_req_tron_e_pri = ReqTrincalesPRI;

            Prop.u_atrib_req_tron_sip = ReqTrincalesSIP;

            Prop.u_atrib_se_req_de_la_imp_de_callc = ReqImpleCall;

            Prop.u_atrib_se_req_sys_de_grab = ReqSoluSysGrab;

            Prop.u_atrib_se_req_sys_de_tari = ReqSoluSysTari;

            Prop.u_atrib_req_con_para_ope_de_soft = ReqConsOpera;

            Prop.u_atrib_za_can_agen_tel_de_callc = CantidadAgenTeleCall;

            Prop.u_atrib_zb_can_agen_mult_de_callc = CantidadAgenMulCall;

            Prop.u_atrib_zc_can_de_sup_de_callc = CantidadSuperCall;

            Prop.u_atrib_ancho_banda_acceso_internet = Capacidad;
            Prop.u_atrib_cantidad_aproxde_dispositivos_estandar_1_de_toda_la_solucion = CantAprxDisp;

            Prop.u_atrib_cantidad_aproxde_telefonos_ip = CantAprxTelIP;

            Prop.u_atrib_disponibilidad_de_la_solucion = Idispo;

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //--------------------- COLLOCATION NODO 

        if (Nom_prod[0] == "u_cmdb_ci_serv_collocation_nodo") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_propietario_de_la_torre = PropieT;

            //  Prop.u_atrib_requiere_espacio_en_torre = ReqEspacioT; <<--- Duplicado 

            Prop.u_atrib_requiere_espacio_en_torre = EspacioT;

            Prop.u_atrib_unidad_energia = UnidadEne;

        }





        //--------------------- COLLOCATION DATACENTER 

        if (Nom_prod[0] == "u_cmdb_ci_serv_collocation_datacenter") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_tiempo_requerido_de_puesto_de_trabajo_fisico_dos = TReqPTFDPortatil;

            Prop.u_atrib_area_de_bodegaje_m2 = AreaBodMD;

            Prop.u_atrib_cantidad_total_de_potencia_kva_ac = CantTotPKVA_AC;

            Prop.u_atrib_cantidad_total_de_potencia_kw_dc = CantTotPKW_DC;

            Prop.u_atrib_cantidad_total_de_rackur = Capacidad;
            Prop.u_atrib_potencia_adicional_kva_ac = PotAdKVA_AC;

            Prop.u_atrib_potencia_adicional_kva_dc = PotAdKVA_DC;

            Prop.u_atrib_requiere_potencia_adicional_kva_ac = ReqPotAdKVA_AC;

            Prop.u_atrib_requiere_puesto_de_trabajo_virtual = ReqPueTV;

            Prop.u_atrib_requiere_servicios_migracion = ReqServMig;

            Prop.u_atrib_tiempo_requerido_de_bodegajedias = TiempoReqBod;

            Prop.u_atrib_ubicacion_rack = UbicacionRack;

            Prop.u_atrib_unidad_de_rack_energia_kva_ac = Capacidad;

        }



        //--------------------- CLOUD Y DATA CENTER VENTA DE EQUIPOS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_cloud_y_data_center_venta_de_equipos") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //--------------------- CLOUD Y DATA CENTER SERVICIOS TÉCNICOS Y/O PROFESIONALES 

        if (Nom_prod[0] == "u_cmdb_ci_serv_cloud_y_data_center_servicios_tecnicos_y_o_profesionales") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }



        //--------------------- SEGURIDAD ADMINISTRADA 

        if (Nom_prod[0] == "u_cmdb_ci_serv_seguridad_administrada") {

            Prop.u_atrib_cantidad_equipos_computo = CantidadEqp;

            Prop.u_atrib_porc_resolucion_casos = PorcResCas;

            Prop.u_atrib_ancho_de_banda = Capacidad;

            Prop.u_atrib_marca_y_modelo_firewall = MarModFire;

        }





        //--------------------- SDWAN ADMINISTRADA 

        if (Nom_prod[0] == "u_cmdb_ci_serv_sdwan_administrada") {

            Prop.u_atrib_atributo = Atributo;

            Prop.u_atrib_bw_maximo_sede = Bwmax;

            Prop.u_atrib_clase_de_sede = ClaseSede;

            Prop.u_atrib_cantidad_de_usuarios_en_sede = NumeroUs;

        }



        //--------------------- INTERNET CORPORATIVO 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internet_corporativo") {

            Prop.u_atrib_cap_adi_bus = CapacidadAdic;

            Prop.u_atrib_medio_transmi = RestriCC;

            Prop.u_atrib_direc_adi = DireccIP;

            Prop.u_atrib_tipo_resili = Idispo;

            Prop.u_atrib_ancho_de_banda_del_canal = Capacidad;

        }



        //--------------------- INTERNET MOVIL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internet_movil") {

            Prop.u_atrib_disponibilidad_requerida_90porc_99_6porc = Idispo;

        }







        //--------------------- INTERNEXA POP TO POP INTERNACIONAL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_pop_to_pop_internacional") {

            Prop.u_atrib_horario_del_servicio = HorarioS;



        }

        //--------------------- INTERNEXA PROVISIONING - PROVISION DE CAPACIDAD 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_provisioning_provision_de_capacidad") {

            Prop.u_atrib_horario_del_servicio = HorarioS;



        }

        //--------------------- INTERNEXA PROVISIONING-IRU SOBRE PARES DE F.O. Y CAPACIDADES 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_provisioningiru_sobre_pares_de_fo_y_capacidades") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- INTERNEXA RIO - CARRIER ETHERNET NACIONAL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_rio_carrier_ethernet_nacional") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- INTERNEXA RIO - CONTENT ACCESS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_rio_content_access") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- INTERNEXA RIO - IP ACCESS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_rio_ip_access") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- INTERNEXA RIO - LAST MILE NACIONAL 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_rio_last_mile_nacional") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_dias_calculados_de_instalacion = DiasCaInst;

            Prop.u_atrib_site_a = SiteA;

            Prop.u_atrib_site_b = SiteB;

        }



        //--------------------- INTERNEXA TEAMS 

        if (Nom_prod[0] == "u_cmdb_ci_serv_internexa_teams") {

            Prop.u_atrib_requiere_capacitacion = ReqCap;

            Prop.u_atrib_requiere_arrendamiento_de_equipos_al_cliente_final_telefonos_camaras_de = ReqArreEq;

            Prop.u_atrib_requiere_site_survey = ReqSiteS;

            Prop.u_atrib_requiere_venta_de_equipos_al_cliente_final_ej_telefonos_camaras_de_vide = ReqVentEq;

            Prop.u_atrib_servicio_a_ofrecer = ServicioTeams;

            Prop.u_atrib_cantidad_de_puertos = Capacidad;

            Prop.u_atrib_ciudad_prestacion_del_servicio = CiudadA;

            Prop.u_atrib_atributos_adicionales = AtribAdic;

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- LICENCIAMIENTO DE SOFTWARE 

        if (Nom_prod[0] == "u_cmdb_ci_serv_licenciamiento_de_software") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- MANAGED SERVICES VIDEOCONFERENCE 

        if (Nom_prod[0] == "u_cmdb_ci_serv_managed_services_videoconference") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- MANAGEMENT FEE 

        if (Nom_prod[0] == "u_cmdb_ci_serv_management_fee") {

            Prop.u_atrib_horario_del_servicio = HorarioS;

        }

        //--------------------- MESA DE SERVICIO 

        if (Nom_prod[0] == "u_cmdb_ci_serv_mesa_de_servicio") {

            Prop.u_atrib_alcance = Alcance;

            Prop.u_atrib_canales_de_atencion_app_movil_para_administracion = CanAteAppAdm;

            Prop.u_atrib_canales_de_atencion_app_movil_para_usuario_final = CanAteAppUs;

            Prop.u_atrib_canales_de_atencion_call_center_telefonico_compartido = CanAteCallC;

            Prop.u_atrib_canales_de_atencion_call_center_telefonico_dedicado = CanAteCallD;

            Prop.u_atrib_canales_de_atencion_chatbot_gestion_de_requerimientos = CanAteChatGes;

            Prop.u_atrib_canales_de_atencion_email_mesa_de_servicio_compartido = CanAteEmSC;

            Prop.u_atrib_canales_de_atencion_email_mesa_de_servicio_dedicado = CanAteEmSD;

            Prop.u_atrib_canales_de_atencion_herramienta_de_autogestion = CanAteHerr;

            Prop.u_atrib_canales_de_atencion_ivr_transaccional = CanAteIVR;

            Prop.u_atrib_canales_de_atencion_learning_machine = CanAteLearn;

            Prop.u_atrib_canales_de_atencion_linea_de_atencion_directa_para_cliente_vip = CanAteLinea;

            Prop.u_atrib_canales_de_atencion_material_faq = CanAteMatF;

            Prop.u_atrib_canales_de_atencion_otro = CanAteOtro;

            Prop.u_atrib_canales_de_atencion_portal_web_online_compartido = CanAtePorC;

            Prop.u_atrib_canales_de_atencion_portal_web_online_dedicado = CanAtePorO;

            Prop.u_atrib_canales_de_atencion_redes_sociales_chat_para_registro = CanAteRedSoc;

            Prop.u_atrib_canales_de_atencion_redes_sociales_gestion_de_requerimientos = CanAteRedReq;

            Prop.u_atrib_canales_de_atencion_chatbot_chat_para_registro = CanAteChat;

            Prop.u_atrib_confbasica_mesa_de_servicio_listado_de_aplicaciones_a_ser_soportadas_se = ConfBasSerL;

            Prop.u_atrib_conf_basica_mesa_de_servicio_alcance_y_requerimientos_se_adjunto_documen = ConfBasSerReq;

            Prop.u_atrib_conf_basica_mesa_de_servicio_tarifador_se_adjunto_documento_en_excel = ConfBasSerTa;

            Prop.u_atrib_conf_basica_mesa_de_servicio_ans_acordados_se_adjunto_documento_en_word = ConfBasSerAns;

            Prop.u_atrib_conf_basica_mesa_de_servicio_arquitectura_de_la_solucion_se_adjunto_doc = ConfBasSerA;

            Prop.u_atrib_facilities_tipo_aire_acondicionado = FaciTipAirA;

            Prop.u_atrib_facilities_tipo_cableado_estructurado = FaciTipCabE;

            Prop.u_atrib_facilities_tipo_ups = FaciTipU;

            Prop.u_atrib_horario_de_atencion = HorarioAte;

            Prop.u_atrib_pais = Pais;

            Prop.u_atrib_provision_de_equipos_bolsa_dinero_para_equipos_en_venta = ProvEquiBols;

            Prop.u_atrib_provision_de_equipos_equipo_en_modalidad_de_arriendo = ProvEquiMovA;

            Prop.u_atrib_provision_de_equipos_equipo_en_modalidad_de_venta = ProvEquiMov;

            Prop.u_atrib_servicios_cubiertos_dispositivos_moviles = ServCubDispM;

            Prop.u_atrib_servicios_cubiertos_facilities = ServCubFac;

            Prop.u_atrib_servicios_cubiertos_gestion_de_contratos_con_terceros = ServCubGest;

            Prop.u_atrib_servicios_cubiertos_impresion = ServCubImp;

            Prop.u_atrib_servicios_cubiertos_microinformatica = ServCubMicro;

            Prop.u_atrib_servicios_cubiertos_ofimatica = ServCubOfi;

            Prop.u_atrib_servicios_cubiertos_telefonia = ServCubTel;

            Prop.u_atrib_servicios_profesionales_recursos_personalizados_en_sitio = ServProRecP;

            Prop.u_atrib_servicios_profesionales_servicios_profesionales = ServProSerPro;

            Prop.u_atrib_servicios_profesionales_soporte_en_campo_remoto_dedicado = ServProSopCRD;

            Prop.u_atrib_servicios_profesionales_soporte_en_campo_remoto_compartido = ServProSopCRC;

            Prop.u_atrib_servicios_profesionales_soporte_en_campo_en_sitio_dedicado = ServProSopCSD;

            Prop.u_atrib_tipo_de_equipo_adaptadores_de_corriente_entandar = TipoEquiAdap;

            Prop.u_atrib_tipo_de_equipo_bateria_portatil_estandar = TipoEquiBat;

            Prop.u_atrib_tipo_de_equipo_mouse_usb_desktop_estandar = TipoEquiMou;

            Prop.u_atrib_tipo_de_equipo_teclado_usb_desktop_estandar = TipoEquiTec;

            Prop.u_atrib_tipo_de_facturacion = TipoFac;

            Prop.u_atrib_tipo_de_profesional_especialista = TipoProEsp;

            Prop.u_atrib_tipo_de_profesional_ingeniero = TipoProIng;

            Prop.u_atrib_tipo_de_profesional_tecnico = TipoProTec;

            Prop.u_atrib_conf_basica_mesa_de_servicio_cronograma_de_implementacion_en_dias = ConfBasSerCro;

            Prop.u_atrib_conf_basica_mesa_de_servicio_dimensionamiento = ConfBasSerD;

            Prop.u_atrib_dispositivos_moviles_cantidad_de_dispositivos = DispMovilC;

            Prop.u_atrib_gestion_de_contratos_con_terceros_cantidad_de_contratos_a_gestionar = GestContr;

            Prop.u_atrib_impresion_cantidad_de_impresoras = ImpreCantImp;

            Prop.u_atrib_microinformatica_cantidad_de_equipos = MicroCantEq;

            Prop.u_atrib_numero_de_usuarios_categoria_gold = NumeroUsGol;

            Prop.u_atrib_numero_de_usuarios_categoria_silver = NumeroUsSilVer;

            Prop.u_atrib_numero_de_usuarios_categoria_bronce = NumeroUsBronce;

            Prop.u_atrib_provision_de_equipos_cantidad = ProvEquiCant;

            Prop.u_atrib_servicios_profesionales_cantidad_de_horas = ServProCantH;

            Prop.u_atrib_telefonia_cantidad_de_telefonos = TeleCantTel;

            Prop.u_atrib_conf_basica_mesa_de_servicio_proveedor = ConfBasSerP;

            Prop.u_atrib_conf_basica_mesa_de_servicio_ubicacion = ConfBasSerU;

            Prop.u_atrib_facilities_tipo_otro = FaciTipO;

            Prop.u_atrib_provision_de_equipos_otro = ProvEquiOt;

            Prop.u_atrib_servicios_cubiertos_otro = ServCubOtro;

            Prop.u_atrib_horario_del_servicio = HorarioS;

            Prop.u_atrib_servicios_profesionales_otro = ServProOtro;

            Prop.u_atrib_tipo_de_equipo_disco_duro = TipoEquiDisD;

            Prop.u_atrib_tipo_de_equipo_memoria_ram = TipoEquiMRam;

            Prop.u_atrib_tipo_de_equipo_otro = TipoEquiOtro;

            Prop.u_atrib_tipo_de_profesional_otro = TipoProOt;



        }



        Prop.insert();

        //Variable propiedad creada
        var PropProd = Prop.getUniqueValue();


        //------------------------Creación Elemento de la Orden 

        if (Accion == "001") {

            if (requestParams.Id_Producto != Id_Producto) {
                return {

                    StatusCode: ('-217'),
                    Mensaje: ('Ya existe un Elemento de la Orden con el mismo ID de Producto'),

                };
            }


            var OS_Element = new GlideRecord('csm_order_line_item');
            OS_Element.initialize();
            OS_Element.order_id = Id_OS;
            OS_Element.u_id_producto = Id_Producto; // Validacion duplicidad
            OS_Element.u_service_id = IdServ[0];
            OS_Element.u_nombre_producto = Nom_prod[1];
            OS_Element.u_requiere_ac = Requiere_act;
            OS_Element.state = Estado;
            OS_Element.u_observaciones_del_solicitante = Obs_solicitante;
            OS_Element.u_fecha_compromiso_de_entrega = Fecha_comp_entrega;
            OS_Element.u_fecha_comprometida_actualizada = Fecha_comp_entrega;
            OS_Element.u_fecha_estimada_de_entrega = Fecha_estim_entrega;
            OS_Element.u_fecha_estimada_activaci_n_ips = Fecha_activa_ips;
            OS_Element.u_valor_mens = Valor_mensual;
            OS_Element.u_cargo_actv = Cargo_actv;
            OS_Element.u_cargo_instalaci_n = Cargo_Instalacion;
            OS_Element.u_contrato_a_meses = Contrato_meses;
            OS_Element.u_inversi_n_usd = Inversion_usd;
            OS_Element.u_producto_asignado_a = Producto_asignado_a; // Campo Ingeniero de Proyectos
            //Propiedad

            OS_Element.u_propiedades_del_producto_de_la_os = PropProd;

            OS_Element.insert();

            return {

                StatusCode: ('201'),
                Mensaje: ('Elemento de la Orden de Servicio Creado con Éxito.'),

            };
        } else if (Accion == "002") {

            if (requestParams.Id_Producto == Id_Producto) {
                return {

                    StatusCode: ('-120'),
                    Mensaje: ('El elemento de la Orden no existe para la acción Actualizar.'),

                };
            }


            var OS_Element1 = new GlideRecord('csm_order_line_item');
            OS_Element1.addQuery("sys_id", Id_Producto);
            OS_Element1.query();
            if (OS_Element1.next()) {
                OS_Element1.order_id = Id_OS;
                OS_Element1.u_id_producto = requestParams.Id_Producto; // Validacion duplicidad
                OS_Element1.u_service_id = IdServ[0];
                OS_Element1.u_nombre_producto = Nom_prod[1];
                OS_Element1.u_requiere_ac = Requiere_act.toLowerCase();
                OS_Element1.state = Estado;
                OS_Element1.u_observaciones_del_solicitante = Obs_solicitante;
                OS_Element1.u_fecha_compromiso_de_entrega = Fecha_comp_entrega;
                OS_Element1.u_fecha_comprometida_actualizada = Fecha_comp_entrega;
                OS_Element1.u_fecha_estimada_de_entrega = Fecha_estim_entrega;
                OS_Element1.u_fecha_estimada_activaci_n_ips = Fecha_activa_ips;
                OS_Element1.u_valor_mens = Valor_mensual;
                OS_Element1.u_cargo_actv = Cargo_actv;
                OS_Element1.u_cargo_instalaci_n = Cargo_Instalacion;
                OS_Element1.u_contrato_a_meses = Contrato_meses;
                OS_Element1.u_inversi_n_usd = Inversion_usd;
                OS_Element1.u_producto_asignado_a = Producto_asignado_a; // Campo Ingeniero de Proyectos
                //Propiedad
                OS_Element1.u_propiedades_del_producto_de_la_os = PropProd;
                OS_Element1.update();

                return {

                    StatusCode: ('202'),
                    Mensaje: ('Elemento de la Orden de Servicio Actualizado con Éxito.'),

                };
            }
        } else {
            return {

                StatusCode: ('-218'),
                Mensaje: ('Acciíon no Valida.'),

            };

        }




    }



})(request, response);

function PropiedadTabla(Nombre) {

    if (Nombre != null && Nombre != "") {
        var propiedad = new GlideRecord("sys_db_object");
        propiedad.addQuery("label", Nombre);
        propiedad.addEncodedQuery("nameSTARTSWITHu_cmdb_ci_serv_");
        propiedad.query();
        if (propiedad.next()) {
            return (propiedad.name + "/" + propiedad.getUniqueValue());

        }

    } else
        return ("");

}

function ServiceID(service) {
    if (service != null && service != "") {
        var servid = new GlideRecord("cmdb_ci_service");
        servid.addQuery("u_id_servicio", service);
        servid.addQuery("sys_class_name", "cmdb_ci_service");
        servid.addQuery("u_active", true);
        servid.query();
        if (servid.next()) {
            return (servid.getUniqueValue() + "/" + servid.u_txt_nombre_servicio);
        }
    } else {
        return ("");
    }
}

function OrderID(order) {
    if (order != null && order != "") {
        var ord = new GlideRecord("csm_order");
        ord.addQuery("u_id_os", order);
        ord.query();
        if (ord.next()) {
            return (ord.getUniqueValue());
        }
    } else {
        return ("");
    }
}

function ProductDuplicity(ID, Id_Servicio) {

    var product = new GlideRecord("csm_order_line_item");
    product.addQuery("u_id_producto", ID);
    product.addQuery("u_service_id", Id_Servicio);
    product.query();
    if (product.next()) {
        return (product.sys_id);
    } else {
        return (ID);
    }

}

function ValidarCiudad(codigo) {

    if (codigo == "" || codigo == null) {

        return "";
    } else {

        var product = new GlideRecord("cmn_location");
        product.addQuery("u_codigo", codigo);
        product.query();
        if (product.next()) {
            return (product.sys_id);
        }
    }

}


function ValidarSitio(codigo) {

    if (codigo == "" || codigo == null) {

        return "";
    } else {
        var product = new GlideRecord("cmdb_ci_computer_room");
        product.addQuery("u_id_sitio_punta_a", codigo);
        product.query();
        if (product.next()) {
            return (product.sys_id);
        }

        /*var product = new GlideRecord("u_cmdb_ci_sitios_de_trabajo");
    product.addQuery("u_codigo", codigo);
    product.query();
    if (product.next()) {
        return (product.sys_id);
    } */

    }

}