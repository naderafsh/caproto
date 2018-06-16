Search.setIndex({docnames:["api","async-clients","basics","command-line-client","index","install","iocs","mock-records","pyepics-compat-client","references","release-notes","servers","sync-client","threading-client"],envversion:53,filenames:["api.rst","async-clients.rst","basics.rst","command-line-client.rst","index.rst","install.rst","iocs.rst","mock-records.rst","pyepics-compat-client.rst","references.rst","release-notes.rst","servers.rst","sync-client.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Beacon":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],our_role:[0,2,1,""],process_commands:[0,3,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{client_name:[0,3,1,""],create:[0,3,1,""],disconnect:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],process_command:[0,3,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},"caproto.server.records":{AaiFields:[7,1,1,""],AaoFields:[7,1,1,""],AcalcoutFields:[7,1,1,""],AiFields:[7,1,1,""],AoFields:[7,1,1,""],AsubFields:[7,1,1,""],AsynFields:[7,1,1,""],BiFields:[7,1,1,""],BoFields:[7,1,1,""],BusyFields:[7,1,1,""],CalcFields:[7,1,1,""],CalcoutFields:[7,1,1,""],CompressFields:[7,1,1,""],DfanoutFields:[7,1,1,""],DigitelFields:[7,1,1,""],EpidFields:[7,1,1,""],EventFields:[7,1,1,""],FanoutFields:[7,1,1,""],GensubFields:[7,1,1,""],HistogramFields:[7,1,1,""],LonginFields:[7,1,1,""],LongoutFields:[7,1,1,""],MbbiFields:[7,1,1,""],MbbidirectFields:[7,1,1,""],MbboFields:[7,1,1,""],MbbodirectFields:[7,1,1,""],MotorFields:[7,1,1,""],PermissiveFields:[7,1,1,""],RecordFieldGroup:[7,1,1,""],ScalcoutFields:[7,1,1,""],ScanparmFields:[7,1,1,""],SelFields:[7,1,1,""],SeqFields:[7,1,1,""],SscanFields:[7,1,1,""],SseqFields:[7,1,1,""],StateFields:[7,1,1,""],StringinFields:[7,1,1,""],StringoutFields:[7,1,1,""],SubFields:[7,1,1,""],SubarrayFields:[7,1,1,""],SwaitFields:[7,1,1,""],TableFields:[7,1,1,""],TimestampFields:[7,1,1,""],TransformFields:[7,1,1,""],VmeFields:[7,1,1,""],VsFields:[7,1,1,""],WaveformFields:[7,1,1,""]},"caproto.sync.client":{Subscription:[12,1,1,""],block:[12,4,1,""],interrupt:[12,4,1,""],read:[12,4,1,""],read_write_read:[12,4,1,""],subscribe:[12,4,1,""],write:[12,4,1,""]},"caproto.sync.client.Subscription":{add_callback:[12,3,1,""],block:[12,3,1,""],clear:[12,3,1,""],interrupt:[12,3,1,""],process:[12,3,1,""],remove_callback:[12,3,1,""]},"caproto.threading.client":{Batch:[13,1,1,""],Context:[13,1,1,""],PV:[13,1,1,""],SharedBroadcaster:[13,1,1,""],Subscription:[13,1,1,""],VirtualCircuitManager:[13,1,1,""]},"caproto.threading.client.Batch":{read:[13,3,1,""],write:[13,3,1,""]},"caproto.threading.client.Context":{get_pvs:[13,3,1,""]},"caproto.threading.client.PV":{go_idle:[13,3,1,""],read:[13,3,1,""],subscribe:[13,3,1,""],unsubscribe_all:[13,3,1,""],wait_for_search:[13,3,1,""],write:[13,3,1,""]},"caproto.threading.client.SharedBroadcaster":{get_cached_search_result:[13,3,1,""],received:[13,3,1,""],search:[13,3,1,""],send:[13,3,1,""]},"caproto.threading.client.Subscription":{add_callback:[13,3,1,""],clear:[13,3,1,""],remove_callback:[13,3,1,""]},"caproto.threading.client.VirtualCircuitManager":{received:[13,3,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Beacon:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ChannelType:[0,1,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0x1041672b0":6,"0x1041672e8":6,"0x104167320":6,"0x104167358":6,"0x104167550":6,"0x104167588":6,"0x1041675f8":6,"0x10928fe10":6,"0x10928fef0":6,"0x10928ffd0":6,"0x2b3e5abfb588":12,"0x2b3e5abfbe88":13,"250x":8,"abstract":[2,11],"boolean":[0,12,13],"byte":[0,2,3,12,13],"case":[2,3,12],"char":[0,3,6],"class":[0,3,6,7,12,13],"default":[0,3,6,12,13],"enum":[0,3,12,13],"final":[2,3,9,12,13],"float":[0,3,12,13],"function":[2,3,8,12,13],"import":[0,2,6,8,12,13],"int":[0,3,6,12,13],"long":[0,3,4,6],"new":[0,2,3,6,12,13],"return":[0,2,6,12,13],"switch":0,"true":[0,6,12,13],"try":[2,6],"while":[6,12,13],And:[0,4],But:12,For:[0,3,4,5,6,8,12,13],IDs:2,Its:[2,4,13],PVs:[2,3,6,8,12,13],That:3,The:[1,2,3,4,5,6,7,8,10,11,12,13],There:[2,12,13],These:[0,2,5,7,9,13],Use:[0,3,6,12],Used:[12,13],Using:[2,4],Will:13,With:0,__init__:0,__main__:6,__name__:6,__repr__:0,__stdin__:6,_broadcast:3,_caproto_pv:8,_circuit:3,aaifield:7,aaofield:7,abandon:[4,12,13],abc:6,abid:2,about:[0,4,9,13],abov:[2,4,6],acalcoutfield:7,acceler:4,accept:[0,2,3,12,13],access:[0,3,6,8,9,11,12,13],access_respons:2,access_right:[0,2,3,13],access_rights_callback:13,accessright:[2,3,13],accessrightsrespons:[0,2,3],accident:[12,13],accumul:[12,13],ack:6,ackt:6,across:13,action:13,activ:[12,13],actual:[2,3,8],add:[0,12,13],add_callback:[8,12,13],added:[6,13],adding:8,addit:[0,2,3,4,13],addition:3,addr:0,address:[0,2,8,13],address_str:0,adel:6,adher:2,advantag:8,advis:4,affect:2,affirm:0,after:13,again:[2,3,12,13],against:[0,2,4,5,8],aggreg:13,aifield:7,air:3,alarm:[0,3,6],alarmsever:3,alarmstatu:3,alia:12,all:[0,2,3,4,5,6,12,13],alloc:0,allow:[0,3],alon:5,along:6,alongsid:13,alreadi:[2,3,6,13],also:[0,2,4,5,6,9,12],alst:6,alwai:[0,2,12],analog:[1,6],analysi:6,andrew:9,ani:[0,2,3,5,6,12,13],announc:[0,2],anoth:[0,2,3,4,12,13],another_func:13,ansi:[0,3],answer:[0,2],anyth:[2,12],aoff:6,aofield:7,apart:8,api:[2,4,8,10,11],append:[12,13],appendix:4,appli:13,applic:[4,12],approach:[12,13],appropri:0,apt:[4,5],arbitrari:13,architectur:4,archiv:3,arguabl:1,argument:[0,3,4,5,6,12,13],around:[1,4,6],arrai:[0,2,3,4,5,6,12,13],arriv:[2,12,13],asg:6,asid:2,ask:[2,3,13],aslo:6,aspect:8,assign:[0,6,13],assum:3,asubfield:7,async:[1,5,6],async_get:6,async_lib:6,asynchron:[2,4,10],asyncio:[5,6,11],asynfield:7,atexit:6,attr:6,attr_separ:6,attribut:[0,3,12,13],authent:2,author:[4,8,11],auto:[2,6,7],autogener:6,automat:[0,6,13],avail:[2,3,5,6,12,13],avoid:[12,13],await:[0,6,13],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:[4,5,6,13],background:[12,13],backward:3,base:[3,4,6,9],basic:[0,4],batch:8,batteri:4,battl:4,bcast:0,bcast_socket:2,beacon:0,beacon_id:0,beamlin:6,beazlei:9,becaus:[2,5,8,12,13],becom:2,bee:4,beej:9,been:[0,2,3,4,12],beer:4,befor:[0,2,3,6,12,13],begin:2,behav:12,behavior:6,behind:6,being:[0,6,13],below:[3,6,12,13],benchmark:4,best:4,better:[2,4],between:[0,2,3,6,12],beyond:13,bifield:7,big:2,bigendianstructur:[0,12,13],bin:6,binari:[3,9],bit:13,block:[12,13],blog:9,bofield:7,bookkeep:4,both:[0,2,8,13],bottom:6,branch:9,brew:4,bridg:[8,12,13],brief:8,broad:4,broadcast:[2,4,13],bsd:4,buffer:[0,12,13],buffers_to_send:[0,2],bug:[6,10],build:[4,5],built:[0,4,5,11,13],builtin:2,bulk:[8,13],busyfield:7,bytearrai:2,bytes_receiv:2,bytes_recv:13,bytes_to_send:[0,2],byteslik:0,cach:[3,12,13],caget:[3,5,8],calcfield:7,calcoutfield:7,call:[0,2,6,8,12,13],callabl:[12,13],callback:[6,8,12,13],callback_count:3,caller:0,camonitor:3,can:[0,1,2,3,4,5,6,8,12,13],cancel:[6,13],cannot:12,capabl:6,caproto:[0,1,2,7,8,10,11,12,13],caproto_skip_motorsim_test:5,caprotoerror:0,caprotokeyerror:0,captur:[5,12],caput:[3,5,8,12],care:2,carepeat:3,casever:[0,2,3,6,12,13],castatu:0,castatuscod:[0,2,3,6,12,13],cat:12,caus:6,cb_id:12,certain:0,chain:6,chan:2,chang:[0,2,10,11,13],channel:[3,6,8,9,11,12,13],channel_st:[8,13],channeldata:6,channeltyp:[0,2,3,6,12,13],channnel:0,check:[0,2,3,12],chnage:0,choic:[4,5,6,8],choos:2,cid:[0,2,3],circ:0,circuit:[0,2,3,8,12,13],circuit_manag:13,circuit_st:[8,13],circuitst:0,class_nam:[0,3],claus:4,clean:2,clear:[2,4,12,13],clear_callback:8,clearchannelrequest:[0,2,3],clearchannelrespons:0,clever:4,click:0,client:[0,4,5,6,9,10],client_address:[0,3],client_nam:[0,2,13],clientchannel:[0,2],clientnamerequest:[0,2,3],clog:2,clone:5,close:[0,13],code:[0,2,3,4,6,7,8,9,10,11,12,13],code_with_sever:[0,2,3,6,12,13],collabor:6,collect:[12,13],color:[0,3],color_log:0,color_log_handl:0,com:[0,5],combin:[3,5],come:[2,8,12,13],command:[2,4,5,6,12,13],commandlin:6,common:[7,12],commonli:5,commun:[0,2,4],compani:4,companion:0,comparison:2,compat:[3,4,10],competit:8,complet:[0,2,3,4,5,6,8,12,13],compliant:6,complic:12,compon:[10,13],compos:[2,6],compound:0,comprehens:[3,8],compressfield:7,comput:6,concept:[2,6,9],conceptu:1,concurr:[4,11,12,13],conda:[4,5],condens:2,configur:[0,2,6,13],confirm:[0,3,12,13],congest:0,connect:[0,2,3,6,8],connection_state_callback:13,consist:[0,4,8],constant:4,construct:[12,13],contain:[6,10],context:[0,6,8,12,13],contigu:[4,12,13],continu:13,contribut:3,contributor:8,control:[0,2,3,4,5,8,11,12,13],conveni:[0,2,4,5,6,12,13],convention:2,convert:0,cooper:4,copi:[2,4,12,13],core:[4,10],correspond:0,cost:4,costli:[12,13],could:[2,6,10],count:[0,2,4,12,13],counterpart:3,coupl:[6,13],cours:[0,4,6],cover:6,creat:[0,6,12,13],create_chan_respons:2,create_connect:2,create_fail:0,createchanrequest:[0,2,3],createchanrespons:[0,2,3],createchfailrespons:0,creation:[0,13],ctrl:[3,6,12],ctrl_char:0,ctrl_doubl:[0,3],ctrl_enum:0,ctrl_float:0,ctrl_int:0,ctrl_long:0,ctrl_string:0,ctx:[0,6,13],ctype:[0,4,12,13],curio:[1,5,6,10,11],current:[0,2,3,12,13],custom_writ:6,customwrit:6,daemon:[3,6],dallan:3,daniel:3,data:[2,3,4,6,12,13],data_count:[0,2,3,6,12,13],data_typ:[0,2,3,6,12,13],databas:[0,7],datagram:[0,2,3,8],date:3,david:9,davidsav:9,dbe_alarm:0,dbe_properti:0,dbe_valu:0,dbr:0,dbr_ctrl_float:3,dbr_time_doubl:0,debug:[0,3,4,6,12],declin:13,decompos:6,decor:6,def:[2,6,8,12,13],default_prefix:6,default_protocol_vers:0,defens:4,defin:[6,8,12,13],defunct:[0,2,3,6,12,13],demo:[2,3,8,12,13],demonstr:[2,4,6,13],depend:[4,5,6],deprec:[0,12,13],depth:9,dequ:2,desc:6,describ:[0,12],descript:[0,2,3,6,12,13],descriptor:6,design:[0,1,2,4,6,8,12],desir:0,detail:[0,2,6],detect:3,detector:6,determin:2,develop:[1,4,6,9,11],devic:[4,6],dfanoutfield:7,dict:6,dictionari:13,did:2,differ:[2,4,8,11],digitelfield:7,direct:0,directli:[0,2,4,11,12,13],directori:6,disa:6,disconnect:[0,2,13],disp:6,displai:[3,6,13],diss:6,distribut:4,disv:6,doc:5,docstr:13,document:[4,5,8,9,11],doe:[0,2,3,13],doesn:2,dog:12,doing:[0,2,3],don:[2,6],done:[2,6],dot:[3,12,13],doubl:[0,2,3,12,13],doucment:8,down:6,driver:6,drop:[3,4,8],dtyp:6,dtype:[0,6],durat:[3,12],dure:13,each:[0,2,3,6,12,13],easi:[2,4,6,7],easier:[2,3,6],eca_newconn:0,eca_norm:[2,3,6,12,13],echo:[0,6],echorequest:0,echorespons:0,effect:[3,13],effici:[4,8,12,13],effort:4,effortlessli:4,egu:6,eguf:6,egul:6,either:[2,13],element:[0,2],elid:8,els:6,embodi:4,emploi:4,encapsul:[0,2,6,8,12,13],encapul:0,encod:[0,2,4,6],end:[0,2],endian:2,engin:[4,6],ensur:2,entir:8,entri:[4,6],enumer:0,env:6,environ:[2,3,5,6],eoff:6,epic:[0,2,3,4,5,6,7,8,9,12,13],epics_bas:5,epics_ca_addr_list:2,epics_ca_auto_addr_list:2,epics_ca_repeater_port:3,epidfield:7,equival:[0,2,13],era:4,err:5,error:0,error_messag:0,errorrespons:[0,12],escap:[3,12],eslo:6,establish:[4,8],etc:[2,4,5,13],evan:9,even:4,event:[0,3,6,12],eventaddrequest:[0,2,13],eventaddrespons:[0,2],eventcancelrequest:[0,2],eventcancelrespons:[0,2],eventfield:7,eventsoffrequest:0,eventsonrequest:0,ever:8,everi:[0,2,4,6,8],evnt:6,exactli:0,exampl:[0,2,4,7,8,12,13],except:[4,6],exchang:13,execut:[3,5,13],exercis:[4,8],exist:[2,4,6,8,13],exit:[2,3,6,13],expand:0,expect:[0,2,5,12,13],experi:[2,10],experiment:[1,4,10,11],explicitli:13,explor:[1,4,6],expos:[0,6],express:5,extend:6,extra:6,extract_address:2,extrem:[3,5],f_getfl:6,f_setfl:6,facil:4,facilit:2,fail:0,failur:[0,12],fairli:10,fall:5,fals:[0,2,3,6,12,13],fan:[12,13],fanoutfield:7,faq:6,fashion:0,fast:4,fcntl:6,featur:[1,10],field:[0,3,6,7,12,13],filenam:6,fileno:6,fill:[0,2,6],filter:5,fine:2,first:[0,2,4,5,12,13],fixed_random:6,flat:6,flavor:2,flnk:6,follow:[2,3,13],force_int_enum:12,forev:[6,12],format:3,formul:13,formula:9,found:[2,3,13],four:12,framework:[0,1,4],fresh:[0,2,12,13],friendli:[4,6,8,12,13],from:[0,2,3,4,5,7,8,10,12,13],full:[8,12],fulli:0,fun:4,func:[12,13],functool:13,fund:4,futur:[1,6,10,12,13],gain:10,garbag:[12,13],gener:[0,2,3,6,7,12],gensubfield:7,get:[6,8,12,13],get_address_list:2,get_cached_search_result:13,get_pv:[6,8,13],get_random:6,gethostnam:13,getlogg:[0,6,13],getpass:[0,13],getter:6,getus:[0,13],git:5,github:5,give:[0,2,8],given:[0,2,6,13],go_idl:13,goal:[3,11],going:2,got:13,gr_char:0,gr_doubl:0,gr_enum:0,gr_float:0,gr_int:0,gr_long:0,gr_string:0,grab:6,graphic:[0,3,12,13],group1:6,group2:6,group3:6,group3_prefix:6,group4:6,group:6,guarante:[12,13],guid:9,h11:[4,9],had:13,hand:[8,13],handi:[4,13],handl:[0,2,4,6,9,13],handler:0,handshak:13,hard:0,hardwar:[4,6],has:[0,2,3,4,6,8,10,12,13],have:[1,2,4,5,6,10,12,13],header:[0,12,13],heartbeat:[0,2],heavi:8,heavili:[1,10],help:[2,3,6],here:[0,2,6,11,13],hex:2,hhsv:6,high:[0,2,6,10,12,13],higher:[2,3],highest:[0,3,12,13],highli:10,hihi:6,histogramfield:7,histori:4,hobbi:4,hold:[12,13],homebrew:[4,5,9],hopr:6,host:[0,2],host_nam:[0,2,13],hostnamerequest:[0,2,3],hour:3,how:[0,2,4,12],howev:1,hsv:6,html:5,http:5,human:[4,6,12,13],hurrai:2,hyst:6,icanon:6,idempot:12,identif:0,identifi:0,idl:[0,8],ifi:6,ignor:[2,13],illeg:[0,2],imagin:6,immedi:[12,13],implement:[0,1,2,3,4,5,6,7,8,10,11,12,13],impli:3,implicitli:[6,13],incident:2,includ:[0,2,3,4,5,6,8,11,13],incom:[2,12],increment:0,inde:12,indefinit:[3,12],independ:2,indic:0,indispens:4,individu:[0,2,13],industri:4,ineffici:12,infer:12,info:[0,3],inform:[0,13],inherit:[0,13],init:6,initi:[0,2,4,6,10,12,13],inline_styl:6,inlinestyleioc:6,inp:6,input:[0,4,11,12],insensit:3,insid:0,inspir:4,instal:[2,3,4],instanc:[0,6],instanti:[0,2,6,13],instead:[0,4,8,12,13],int32:6,integ:[0,2,3,6,12,13],intend:[3,4,6,8,12],interact:[0,6,11,12],interest:[1,2,4,6,9,11],interfac:[2,6,10,12],intermedi:[5,12,13],intern:[0,2,12,13],interpret:[2,4],interrupt:12,introspect:4,invalid:6,invoc:3,invok:6,involv:3,io_interrupt:6,ioc:[2,3,4,7,8,10,11,12,13],ioc_arg_pars:6,ioc_exampl:[2,3,4,6,8,12,13],ioc_opt:6,ioerror:6,ioid:[0,2,3,6,12,13],iointerruptioc:6,isatti:6,isn:3,issu:[1,3,10,13],item:6,iter:[0,4,6,12,13],its:[0,2,3,4,5,6,10,12,13],itself:[2,4],job:2,johnson:9,json:6,juggl:2,just:[2,4,6,8,12,13],kah:4,keep:[0,4],kei:[0,6],ken:9,kenneth:9,keyboard:6,keyerror:[0,13],keypress:6,keystrok:6,keyword:12,kind:4,know:[0,6,13],known:[1,10,13],kwarg:[6,8],label:3,laboratori:4,lack:[1,10],lalm:6,lambda:[12,13],larg:[4,8,13],late:13,later:[12,13],lauer:9,launch:6,layer:[0,4],layout:7,lbrk:6,lcnt:6,lead:8,learn:4,least:[1,2,12],len:[12,13],length:0,let:[0,2,3,6,12,13],level:[0,2,8,10,11,12,13],leverag:8,lib:[5,6],libca:8,librari:[2,6,11],licens:4,lifetim:13,lightweight:5,like:[0,2,3,6,10,12,13],limit:[0,13],line:[5,6,12],link:7,linr:6,linux:4,list:[0,2,3,4,6,12,13],listen:[2,3,6],llsv:6,load:[0,12,13],local:3,localhost:2,localprotocolerror:[0,2],locat:2,log:[0,3,4,6,8,13],logger:[4,6],logger_nam:0,lolo:6,longinfield:7,longoutfield:7,look:[0,2,6],loop:6,lopr:6,lost:0,low:[0,2,6,10,11,12,13],lower:8,lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:[0,3,12,13],lsv:6,lyric:2,macbook:3,machin:[2,4,6],macroifiednam:6,made:13,mai:[0,2,4,6,8,9,10,12,13],main:8,maintain:[0,4],make:[2,3,5,6,7,8,12,13],maker:4,manag:[0,13],mani:[0,4,5,6,12,13],manual:[0,2,5,13],mask:[0,2,3,12,13],match:[0,2,5,12,13],matrix:[2,9],maxim:[0,13],maximum:3,mbbidirectfield:7,mbbifield:7,mbbodirectfield:7,mbbofield:7,mdel:6,mean:[0,2],meet:4,member:13,memori:[4,12,13],memoryview:2,mere:[12,13],messag:[0,2,3,4,6,12,13],messagehead:[0,12,13],metadata:[0,2,3,6,12,13],method:[0,2,4,5,6,12,13],michael:9,middl:12,might:[2,12],minim:[4,13],minut:3,mirror:6,miss:13,mit:4,mix:6,mixtur:13,mlst:6,mock:4,mock_record:6,mocking_record:6,mode:[3,5],model:4,modul:[1,5,8,13],monitor:6,more:[0,2,3,4,8,12,13],most:[1,4],motorfield:7,motorsim:[5,9],move:3,much:[0,2],multipl:[2,3,4,12,13],must:[0,2,6,12,13],must_clos:0,my_beamlin:6,my_custom_prefix:6,my_func:13,my_writ:6,mypvgroup:6,mysubgroup:6,name:[0,2,3,5,8,12,13],narrow:0,nativ:[0,2,3,6,12,13],native_data_count:[0,12],native_data_typ:0,natur:13,ndarrai:[0,2,4,12,13],necessari:[2,4,5,13],need:[0,2,3,4,11,12],need_data:0,neg:0,neo:2,nest:6,netifac:5,network:[0,2,4,8,9,13],never:13,new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,new_value_callback:6,newattr:6,next:[2,3,6,12,13],nice:6,no_alarm:3,no_repli:0,none:[0,2,3,6,12,13],normal:[2,3,6,12,13],note:[0,6,8,12,13],notfoundrespons:0,notic:[0,2,12,13],notif:[0,3,12],notifc:0,notifi:[0,3,6,12,13],notion:12,now:[2,3,4,8,12,13],nsev:6,nsl:5,nsta:6,num_bytes_need:0,number:[0,3,4,5,6,8,12,13],numer:3,numpi:[0,2,4,5,12,13],o_nonblock:6,obei:2,object:[2,4,6,8,12,13],observ:6,obtain:[0,3],obviou:0,obvious:12,occasion:8,occur:13,off:[0,6],old:[2,3],oldflag:6,oldterm:6,onc:[2,12,13],one:[0,2,3,4,6,8,12,13],ones:[2,10,13],onli:[0,3,4,5,6,12,13],onto:[12,13],opaqu:0,open:[0,2,6],oper:[12,13],oppos:8,optim:12,option:[0,2,3,4,5,6,9,12,13],oraw:6,order:[0,12,13],ordereddict:6,organ:4,origin:[0,1],original_request:0,osx:[4,9],other:[0,2,4,5,6,10,12,13],our:[0,2,3,6],our_rol:[0,2],out:[0,2,6,8,11,12,13],outgo:2,output:[0,2,3,4,11],outsid:6,over:[0,2,4,12,13],overal:13,overflow:9,overload:2,owes:4,own:4,pack:0,packag:[3,4],packet:[0,8],pact:6,pad:0,pai:4,paramet:[0,2,6,12,13],parameter1:[0,12,13],parameter2:[0,12,13],pariti:[1,10],pars:[0,2,3,9],part:[0,13],partial:13,particl:4,particular:[2,3,11,12,13],pass:[0,2,5,6,12,13],path:[3,6],pathlib:6,pattern:[2,4,5],payload:[2,4],payload_s:[0,12,13],peer:[0,2],per:[0,5],perform:[4,12,13],period:[3,6,12,13],permiss:2,permissivefield:7,persist:13,pha:6,physic:4,pick:6,pini:6,pip:4,pitfal:13,place:3,placeholder1:6,placeholder2:6,plai:[0,2],plain_log_handl:0,platform:[2,6],plugin:9,point:[4,6,12,13],poke:1,polic:2,popul:13,port:[0,2,3,12,13],portabl:[4,8],posit:[3,12,13],possibl:[3,6,13],post:9,pprint:6,prec:6,precis:[3,6],prefix:[6,7],press:6,previou:2,previous:6,principl:4,print:[6,8,12,13],prio:6,prior:13,priorit:0,prioriti:[0,2,3,8,12,13],proc:6,process:[0,2,3,6,8,12,13],process_command:[0,2],program:[4,9],programmat:4,progress:13,project:[4,9],promptli:[12,13],pronounc:4,propag:[0,6],properli:2,properti:3,protcol:9,proto:4,protocol:[0,2,6,9,10,13],protocol_vers:0,protocolerror:0,provid:[0,2,3,6,8,12,13],pull:8,pure:2,purpos:3,put:[4,6,8,12,13],put_ack:3,put_ackt:3,putf:6,putter:6,pv_name:[3,6,8,12],pva:6,pvdb:6,pvfunction:6,pvgroup:6,pvproperti:6,pvpropertyinteg:6,pvpropertyintegerro:6,pvpropertystringro:6,pvs:[3,4,6,8,13],pvspec:6,pyepic:[4,9,10],pyepics_compat:8,pytest:5,python3:[2,3,4,5,6,8,12,13],python:[0,3,5,7,8,9,11,12,13],queri:[0,3],queue:[0,6],quick:2,quiet:3,rais:[0,2,6,13],randint:6,random_int:6,random_str:6,random_walk:[0,2,3,6,8,12,13],randomwalkioc:6,randstr:6,rang:2,rare:[2,13],raspberrypi:4,rate:6,rather:[0,6,8,13],rational:4,raw:[2,12,13],rbv:6,reactiv:12,read:[0,3,4],read_data_typ:12,read_from_bytestream:0,read_write_read:12,readabl:6,readi:[0,4],readnotifyrequest:[0,2,3,12,13],readnotifyrespons:[0,2,3,6,12,13],readrequest:[0,12,13],readrespons:[0,12],readsyncrequest:0,reagan:4,realli:2,rebroadcast:2,recal:[2,12],receipt:[0,12,13],receiv:[0,2,3,4,6,8,12,13],recommend:8,reconnect:13,record:[0,4],record_like1:6,record_typ:6,recordfieldgroup:7,recordlik:6,recordlike1:6,recordlike2:6,recordmockingioc:6,recv:[0,2,13],recv_address:2,recvfrom:2,redi:6,redo:13,reduc:13,redundantli:12,refer:[0,3,4,5,7,11,12,13],reflect:12,regist:[0,3,6,12,13],registr:0,registration_retry_tim:13,registri:[12,13],relat:[3,4,12],releas:[1,4],reli:[4,5,6],reliabl:4,remot:0,remoteprotocolerror:[0,2],remov:[10,12,13],remove_callback:[12,13],repeat:[0,12],repeater_address:0,repeaterconfirmrespons:0,repeaterregisterrequest:[0,2,3],replac:[3,4,8],repli:0,report:[0,2],repres:[0,8,13],represent:[12,13],repsons:12,req:2,request:[0,2,3,8,12],requir:[0,2,4,5,6,13],res:[12,13],reset:6,reset_termin:6,resolv:0,resourc:[4,9],respect:[0,1,13],respond:0,respons:[0,2,3,8,12,13],rest:8,restor:0,result:[3,12,13],results_queu:13,resum:0,retriev:[3,12],retval:6,reus:2,reusabl:4,revers:2,review:6,revis:[1,10],reward:4,richer:3,right:[0,2],robust:4,roff:6,role:[0,2],root:4,rpc_function:6,rpro:6,rtyp:6,rule:2,run:[2,3,4,5,6,7,8,12,13],run_opt:6,run_test:5,rval:6,safe:[3,13],sai:[2,4],said:4,same:[0,2,4,12,13],sampl:8,san:[2,4,9],sandwich:12,satisfi:12,save:13,saw:6,scalar:[0,3],scalcoutfield:7,scan:6,scanparmfield:7,scientist:[4,6],scratch:4,sdi:6,search:[0,3,13],search_respons:2,searches_pend:[8,13],searchrequest:[0,2,3,13],searchrespons:[0,2],second:[2,3,6,12,13],section:[2,6],secur:2,see:[0,2,3,4,6,7,8,11,12,13],seen:[0,6],select:[12,13],select_backend:5,selector:13,self:6,selfield:7,semant:6,send:[0,2,3,6,12,13],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:2,sendto:2,sent:[0,2,3,4,6,13],sentinel:0,separ:[2,3,4,6,8,12,13],seqfield:7,sequenti:0,serach:2,seri:3,serial:[3,6],serv:[0,2,6],server:[0,2,3,4,5,7,8,9,10,12,13],server_port:0,serverchannel:0,serverdisconnrespons:[0,2],servic:[6,13],set:[2,3,4,5,6,12,13],setlevel:[0,13],sever:[0,2,3,4,5,6,12,13],sevr:6,share:4,sharedbroadcast:13,shell:[2,3,8,12,13],shim:8,shot:13,should:[0,2,3,12,13],show:[2,3,6],shut:6,sid:[0,2,3],side:[0,6],sigint:12,signal:[6,12],signatur:[12,13],silenc:13,silent:[12,13],silo:6,sim:6,similar:[3,6],similarli:0,siml:6,simm:6,simpl:[0,2,4],simpleioc:6,simpli:6,simplic:12,simplifi:4,simul:6,sinc:[0,3],singl:[0,2,6,13],siol:6,skip:5,sleep:[6,8],slide:9,slower:13,small:5,smoo:6,snip:[3,6],sock:2,socket:[0,2,4,6,9,12,13],softioc:5,some:[0,1,2,3,4,6,8,10,12,13],someth:[0,4],somewhat:[2,3],sort:0,sourc:[0,5,7,9,11,12,13],space:[2,3,13],spawn:[3,12],speak:[4,6],spec:[0,9,12],special:4,specif:[0,2,3,12,13],specifi:[0,2,3,8,13],speed:8,speedup:8,spell:2,spin:6,sscanfield:7,sseqfield:7,stabl:10,stack:[8,9],stackoverflow:6,stai:13,stale:13,standard:[0,3,4,5,6,12,13],star:4,start:[0,2,3,4,6,8,12,13],start_io_interrupt_monitor:6,startup:[3,6],stash:[2,13],stash_result:13,stat:6,state:[2,4,8,12,13],statefield:7,statu:[0,2,3,6,12,13],stdin:6,stdout:5,steer:4,step:[2,6,8],still:[0,1,2,3,11,13],stipul:12,stop:[6,12],store:[6,12,13],stori:2,str:[0,6,12,13],strateg:4,strategi:4,stream:0,string:[0,3,6,12,13],stringinfield:7,stringoutfield:7,struct:0,structur:[0,4,6,12,13],sts_char:0,sts_doubl:0,sts_enum:0,sts_float:0,sts_int:0,sts_long:0,sts_string:0,stsack_str:[0,3],sub1:12,sub2:12,sub:[12,13],sub_dt:12,sub_x:12,subarrayfield:7,subfield:7,subgroup4:6,subject:11,subpackag:6,subscrib:[0,3,6,8],subscript:[0,2,8,12,13],subscriptionid:[0,2],subscriptiontyp:[0,12,13],subsequ:13,substitut:6,success:[0,2,3,6,12,13],successfulli:12,succinct:[2,4],succinctli:2,suffici:12,suit:[4,8],suitabl:4,superset:3,support:[0,2,3,8,12,13],suppos:13,suppress:3,sure:6,surpris:[12,13],sval:6,swaitfield:7,sync:12,synchron:[2,4,5,10],synchrotron:4,syntax:13,sys:6,system:[0,2,4],tab:3,tablefield:7,take:[0,6,12],talk:[2,3,8,9,12,13],target:[0,6],task:6,tcgetattr:6,tcp:[0,2,8,13],tcsaflush:6,tcsanow:6,tcsetattr:6,tech:9,telescop:4,tell:[0,6],temp:6,temp_path:6,temporarili:[0,13],term:[0,2,4],termin:[3,4,6],termio:6,ters:3,test:[0,4,5,8,10],than:[6,8,12],thank:6,thei:[0,1,3,4,5,6,10,12,13],them:[0,1,2,6,8,12,13],therefor:[12,13],thi:[0,2,3,4,5,6,9,10,12,13],thing:[2,6],think:0,thoroughli:10,those:[2,4,6,13],thread:[1,4,5,6,8,10,12],threadsafequeu:6,three:[3,10,11,12],threshold:13,through:[0,5],thu:13,time:[0,2,3,4,6,8,12,13],time_char:0,time_doubl:0,time_enum:0,time_float:0,time_int:0,time_long:0,time_str:0,timedelta:3,timeout:[3,12,13],timeouterror:13,timestamp:3,timestampfield:7,tmp:6,todo:6,togeth:[0,2],token:[3,12,13],too:[0,2],tool:[4,6],toolkit:4,top:[8,12],touch:13,toward:6,tpro:6,track:[0,2,13],traffic:[2,9],transact:0,transformfield:7,translat:2,transmit:[0,2],transpar:13,transport:[2,4,13],tri:0,triag:[12,13],trick:4,trigger:6,trio:[1,5,6,10,11],tse:6,tsel:6,tty:6,tune:9,tupl:[0,2,12],turn:[0,13],tutori:4,twice:13,twist:9,two:[0,2,6,8,13],txt:5,type:[2,3,4,6,12,13],typic:2,udf:6,udp:[0,2,8,13],udp_sock:2,unansw:13,uncoupl:6,under:[0,4,12,13],underli:[8,12,13],understand:[4,6],uniqu:[0,2,13],unit:[3,4],unless:[2,5,12],unlik:13,unlimit:[0,3,13],unpack:3,unsubscrib:[0,2],unsubscribe_al:13,until:[2,13],unus:[0,13],updat:[0,3,6,12,13],upgrad:12,upon:13,upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,usag:[3,6,7,8],use:[0,2,3,4,5,6,8,10,12,13],used:[0,2,3,4,6,12,13],useful:[0,4,5,6,9,12],user:[0,2,4,6,8,12,13],uses:[0,12,13],using:[0,1,2,3,4,5,6,8,9,12,13],usr:6,usual:0,util:[2,3,12],val:6,valid:[0,2],valu:[0,3,4,6,8,12,13],valuabl:6,valueerror:[6,13],variabl:[2,3,5],variant:3,variou:[0,4,13],verbos:[3,4,5,8,13],veri:[1,10,12],verifi:[2,4,5],version:[0,2,3,4,5],version_respons:2,versionrequest:[0,2,3],versionrespons:[0,2,3],vestigi:3,via:[2,3,5,6,13],view:[0,3,6,12,13],violat:0,virtual:[0,2,3,12,13],virtualcircuit:[2,4,13],virtualcircuitmanag:13,virtualciruit:0,visual:3,vmefield:7,vsfield:7,vvv:3,wai:[0,2,6,12,13],wait:[3,4,6,12,13],wait_for_search:13,want:[2,4,5,8,12,13],war:4,warn:[3,13],watch:2,waveformfield:7,weak:[12,13],web:6,welcom:3,well:[0,4,5,8,12],were:[4,9,12,13],what:[0,2,4,6,12],when:[0,2,4,12,13],whenev:[6,12,13],where:[0,6,13],wherea:[6,8],whether:0,which:[0,2,3,4,6,12,13],whichev:[3,6],who:[4,6],why:[2,4,8],wide:3,win32:6,window:4,wire:[2,4],wireshark:9,wish:12,within:13,without:[0,13],word:[2,4],work:[0,2,5,6,12,13],world:[4,6],would:[4,8,12],wrap:4,wrapper:8,writabl:6,write:[0,3,4,11],write_data_typ:12,write_respons:12,writenotifyrequest:[0,2],writenotifyrespons:[0,2,6,12,13],writerequest:0,written:[8,12],wrote:6,x00:[2,12,13],x00random_walk:2,x01:[2,12,13],x05:2,x06:[2,12,13],x08:[12,13],x0f:[12,13],x10:2,x11:2,x18:2,x7f:2,x_pv:8,xf0:12,xf31id:6,yes:2,yet:[0,3,11,12,13],you:[0,2,4,5,6,8,9,12],your:[0,3,4,5,11],zero:[4,13]},titles:["Core API Documentation","Asynchronous Clients","Writing Your Own Channel Access Client","Command-Line Client","caproto: a pure-Python Channel Access protocol library","Install Caproto","Input-Output Controllers (IOCs)","Mock Records","Pyepics-Compatible Client","References","Release History","Servers","Synchronous Client","Threading Client"],titleterms:{"function":6,"try":4,Not:4,The:0,Use:4,Using:[5,6],access:[2,4],acknowledg:4,api:[0,3,12,13],asynchron:1,basic:2,batch:13,big:4,bookkeep:2,broadcast:0,caproto:[3,4,5,6],channel:[0,2,4],client:[1,2,3,8,12,13],close:2,command:[0,3],compat:8,connect:[12,13],constant:0,content:[0,4],control:6,core:0,creat:2,custom:6,data:0,debug:13,demonstr:8,develop:5,document:[0,3,12,13],event:2,exampl:6,except:0,file:6,four:4,from:6,get:3,handl:12,histori:10,idl:13,inlin:6,input:6,instal:5,interrupt:6,ioc:6,librari:4,line:[3,4],logger:[0,13],machin:0,macro:6,minim:5,mock:[6,7],monitor:[3,12,13],more:6,name:6,object:0,output:6,own:2,payload:0,pip:5,protocol:4,pure:4,put:3,pyepic:8,python:[4,6],random:6,read:[2,6,12,13],reason:4,record:[6,7],refer:9,regist:2,releas:10,repeat:[2,3],request:13,rpc:6,search:2,server:[6,11],simpl:6,simplifi:2,special:0,state:0,stateless:12,statist:4,style:6,subgroup:6,subscrib:[2,12,13],synchron:12,thi:8,thread:13,tutori:[3,12,13],type:0,updat:2,valu:2,virtualcircuit:0,vital:4,walk:6,what:8,when:6,why:6,write:[2,6,12,13],written:6,your:2}})