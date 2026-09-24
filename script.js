const SUPABASE_URL = 'https://lilgclugepoytoyeyzna.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpbGdjbHVnZXBveXRveWV5em5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyMjA5NjQsImV4cCI6MjEwNTc5Njk2NH0.jXFILyCeI7pVhdIl6lCNchctGV_yuuRR34PqdryQAAM';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let currentUserId = null;

const KEY = 'pledge-data-v7';
const REG_MONTHS = ["תשרי","חשוון","כסלו","טבת","שבט","אדר","ניסן","אייר","סיוון","תמוז","אב","אלול"];
const LEAP_MONTHS = ["תשרי","חשוון","כסלו","טבת","שבט","אדר א'","אדר ב'","ניסן","אייר","סיוון","תמוז","אב","אלול"];
const GOLD = '#122C55', TEAL = '#122C55', WELL = '#E7EDF5';

const MONTH_EN = {"תשרי":"Tishrei","חשוון":"Cheshvan","כסלו":"Kislev","טבת":"Tevet","שבט":"Shevat","אדר":"Adar","אדר א'":"Adar I","אדר ב'":"Adar II","ניסן":"Nisan","אייר":"Iyar","סיוון":"Sivan","תמוז":"Tammuz","אב":"Av","אלול":"Elul"};
const MONTH_ES = {"תשרי":"Tishrei","חשוון":"Jesván","כסלו":"Kislev","טבת":"Tevet","שבט":"Shevat","אדר":"Adar","אדר א'":"Adar I","אדר ב'":"Adar II","ניסן":"Nisán","אייר":"Iyar","סיוון":"Siván","תמוז":"Tamuz","אב":"Av","אלול":"Elul"};
function monthLabel(heb){
  if(data.lang==='en') return MONTH_EN[heb]||heb;
  if(data.lang==='es') return MONTH_ES[heb]||heb;
  return heb;
}

const I18N = {
  he:{
    profile_title:"הפרופיל וההתחייבות שלי", profile_hint:"נקבע פעם אחת מראש; אותה התחייבות חוזרת בכל חודש בשנה",
    label_language:"שפה", label_name:"שם (רשות)", ph_name:"לדוגמה: יוסי",
    label_year:"שנה עברית", ph_year:"לדוגמה: תשפ״ו",
    leap_label:"שנה מעוברת — 13 חודשים (אדר א' ואדר ב')",
    label_study_goal:"התחייבות לימוד לחודש (שעות)", ph_study_goal:"לדוגמה: 20",
    label_charity_goal:"התחייבות צדקה לחודש", ph_charity_goal:"לדוגמה: 500",
    label_currency:"מטבע", btn_save_profile:"שמור התחייבות",
    btn_edit:"ערוך", btn_reset_all:"איפוס הכל", confirm_reset:"לאפס את כל הנתונים והפרופיל? הפעולה בלתי הפיכה.",
    hello_prefix:"שלום, ", default_name:"הפרופיל שלי",
    regular_year:"שנה רגילה (12 חודשים)", leap_year_text:"שנה מעוברת (13 חודשים)",
    study_goal_summary:"התחייבות לימוד לחודש: ", charity_goal_summary:"התחייבות צדקה לחודש: ",
    timer_title:"טיימר לימוד", timer_hint:"מתעדכן ישירות תוך כדי הלימוד — לוחצים התחל, ובסיום שומרים לרישום",
    btn_start:"התחל", btn_pause:"עצור זמנית", btn_timer_reset:"איפוס", btn_timer_save:"שמור לרישום (לחודש שנבחר למטה)",
    study_entry_title:"עדכון לימוד בפועל", label_month:"חודש עברי", label_hours:"שעות", label_minutes:"דקות",
    btn_add_entry:"הוסף רישום", current_month_title:"החודש הנוכחי", label_study:"לימוד", label_charity:"צדקה",
    hint_set_goal:"הגדר יעד בפרופיל", out_of:" מתוך ",
    year_study_title:"סיכום שנתי — לימוד", label_study_year:"לימוד לשנה",
    table_month:"חודש", table_study_actual:"לימוד בפועל", empty_year:"עדיין אין נתונים לשנה זו",
    charity_entry_title:"עדכון צדקה בפועל", label_amount:"סכום", label_recipient:"למי ניתן", ph_recipient:"לדוגמה: קופת עניי העיר",
    year_charity_title:"סיכום שנתי — צדקה", label_charity_year:"צדקה לשנה",
    donation_list_title:"רשימת נתינות", table_amount:"סכום", table_recipient:"למי", table_datetime:"תאריך ושעה", empty_donations:"עדיין אין רישומי נתינה",
    export_btn:"ייצוא לאקסל", export_unavailable:"ייצוא קבצים אינו זמין כרגע כאן",
    drive_sync_title:"סנכרון אוטומטי לדרייב", drive_sync_hint:"כשמופעל, כל רישום חדש מעדכן אוטומטית קובץ אקסל אחד ב-Google Drive שלך",
    drive_sync_label:"עדכן אוטומטית ל-Google Drive", drive_syncing:"מסנכרן…", drive_synced:"✓ מסונכרן לדרייב",
    drive_sync_error:"שגיאה בסנכרון לדרייב", drive_unavailable:"Google Drive אינו זמין כרגע", drive_open_link:"פתח את הקובץ בדרייב",
    today_prefix:"היום: ",
    nav_profile:"פרופיל", nav_study:"לימוד", nav_charity:"צדקה", nav_about:"מהו פלעדזש", nav_support:"תמיכה",
    btn_sign_out:"התנתקות",
    auth_title:"ברוך הבא ל-Pledge", auth_hint:"התחבר כדי לשמור את הנתונים שלך בבטחה",
    auth_signin_tab:"התחברות", auth_signup_tab:"הרשמה", auth_email:"אימייל", auth_password:"סיסמה",
    auth_missing_fields:"נא למלא אימייל וסיסמה", auth_check_email:"נרשמת בהצלחה! בדוק את תיבת המייל שלך לאישור החשבון, ואז התחבר.",
    auth_generic_error:"משהו השתבש. נסה שוב.",
    about_title:"מה זה פלעדזש?",
    about_p1:"פלעדזש היא אפליקציה אישית למעקב אחרי התחייבות שנתית ללימוד תורה ולנתינת צדקה.",
    about_p2:"בתחילת השנה העברית קובעים יעד חודשי קבוע, ולאורך השנה מתעדכנים בזמן אמת — עם טיימר לימוד ורישום נתינות — כדי לדעת תמיד בדיוק איפה עומדים ביחס להתחייבות.",
    about_p3:"כל הנתונים נשמרים באופן פרטי בדפדפן שלך בלבד, ולא נשלחים לשום שרת.",
    support_title:"תמיכה", support_hint:"יש שאלה, באג, או רעיון לשיפור? נשמח לשמוע", support_contact:"צור קשר במייל",
    faq_title:"שאלות נפוצות",
    faq_q1:"האם הנתונים שלי נשמרים באינטרנט?", faq_a1:"לא. כל הנתונים נשמרים רק בדפדפן, במכשיר שלך בלבד.",
    faq_q2:"מה קורה בשנה מעוברת?", faq_a2:"מסמנים זאת בעמוד הפרופיל, והאפליקציה מוסיפה אוטומטית אדר א' ואדר ב'.",
    faq_q3:"איך משנים שפה?", faq_a3:"בעמוד הפרופיל, למעלה, אפשר לבחור עברית, אנגלית או ספרדית בכל רגע."
  },
  en:{
    profile_title:"My profile & commitment", profile_hint:"Set once in advance; the same commitment repeats every month",
    label_language:"Language", label_name:"Name (optional)", ph_name:"e.g. John",
    label_year:"Hebrew year", ph_year:"e.g. 5786",
    leap_label:"Leap year — 13 months (Adar I & Adar II)",
    label_study_goal:"Monthly study commitment (hours)", ph_study_goal:"e.g. 20",
    label_charity_goal:"Monthly charity commitment", ph_charity_goal:"e.g. 500",
    label_currency:"Currency", btn_save_profile:"Save commitment",
    btn_edit:"Edit", btn_reset_all:"Reset everything", confirm_reset:"Reset all data and profile? This can't be undone.",
    hello_prefix:"Hello, ", default_name:"My profile",
    regular_year:"Regular year (12 months)", leap_year_text:"Leap year (13 months)",
    study_goal_summary:"Monthly study commitment: ", charity_goal_summary:"Monthly charity commitment: ",
    timer_title:"Study timer", timer_hint:"Updates live while you study — press Start, then save when done",
    btn_start:"Start", btn_pause:"Pause", btn_timer_reset:"Reset", btn_timer_save:"Save to log (selected month below)",
    study_entry_title:"Log actual study", label_month:"Hebrew month", label_hours:"Hours", label_minutes:"Minutes",
    btn_add_entry:"Add entry", current_month_title:"Current month", label_study:"Study", label_charity:"Charity",
    hint_set_goal:"Set a goal in your profile", out_of:" of ",
    year_study_title:"Yearly summary — study", label_study_year:"Study this year",
    table_month:"Month", table_study_actual:"Study logged", empty_year:"No data yet for this year",
    charity_entry_title:"Log actual charity", label_amount:"Amount", label_recipient:"Given to", ph_recipient:"e.g. Local charity fund",
    year_charity_title:"Yearly summary — charity", label_charity_year:"Charity this year",
    donation_list_title:"Donation list", table_amount:"Amount", table_recipient:"Given to", table_datetime:"Date & time", empty_donations:"No donations logged yet",
    export_btn:"Export to Excel", export_unavailable:"File export isn't available here right now",
    drive_sync_title:"Automatic Drive sync", drive_sync_hint:"When on, every new entry automatically updates one Excel file in your Google Drive",
    drive_sync_label:"Auto-update to Google Drive", drive_syncing:"Syncing…", drive_synced:"✓ Synced to Drive",
    drive_sync_error:"Drive sync error", drive_unavailable:"Google Drive isn't available right now", drive_open_link:"Open the file in Drive",
    today_prefix:"Today: ",
    nav_profile:"Profile", nav_study:"Study", nav_charity:"Charity", nav_about:"About Pledge", nav_support:"Support",
    btn_sign_out:"Sign out",
    auth_title:"Welcome to Pledge", auth_hint:"Sign in to keep your data safe",
    auth_signin_tab:"Sign in", auth_signup_tab:"Sign up", auth_email:"Email", auth_password:"Password",
    auth_missing_fields:"Please enter an email and password", auth_check_email:"Signed up! Check your inbox to confirm your account, then sign in.",
    auth_generic_error:"Something went wrong. Please try again.",
    about_title:"What is Pledge?",
    about_p1:"Pledge is a personal app for tracking a yearly commitment to Torah study and charity.",
    about_p2:"At the start of the Hebrew year you set a fixed monthly goal, and throughout the year you update it live — with a study timer and a giving log — so you always know exactly where you stand.",
    about_p3:"All your data is stored privately in your own browser and is never sent to any server.",
    support_title:"Support", support_hint:"Have a question, a bug, or an idea? We'd love to hear it", support_contact:"Contact us by email",
    faq_title:"Frequently asked questions",
    faq_q1:"Is my data stored online?", faq_a1:"No. All data is stored only in your browser, on your device.",
    faq_q2:"What happens in a leap year?", faq_a2:"Mark it on the profile page, and the app automatically adds Adar I and Adar II.",
    faq_q3:"How do I change the language?", faq_a3:"On the profile page, at the top, you can pick Hebrew, English, or Spanish at any time."
  },
  es:{
    profile_title:"Mi perfil y compromiso", profile_hint:"Se define una vez, por adelantado; el mismo compromiso se repite cada mes",
    label_language:"Idioma", label_name:"Nombre (opcional)", ph_name:"p. ej. Juan",
    label_year:"Año hebreo", ph_year:"p. ej. 5786",
    leap_label:"Año bisiesto — 13 meses (Adar I y Adar II)",
    label_study_goal:"Compromiso mensual de estudio (horas)", ph_study_goal:"p. ej. 20",
    label_charity_goal:"Compromiso mensual de caridad", ph_charity_goal:"p. ej. 500",
    label_currency:"Moneda", btn_save_profile:"Guardar compromiso",
    btn_edit:"Editar", btn_reset_all:"Restablecer todo", confirm_reset:"¿Restablecer todos los datos y el perfil? No se puede deshacer.",
    hello_prefix:"Hola, ", default_name:"Mi perfil",
    regular_year:"Año regular (12 meses)", leap_year_text:"Año bisiesto (13 meses)",
    study_goal_summary:"Compromiso mensual de estudio: ", charity_goal_summary:"Compromiso mensual de caridad: ",
    timer_title:"Temporizador de estudio", timer_hint:"Se actualiza en vivo mientras estudias — pulsa Iniciar y guarda al terminar",
    btn_start:"Iniciar", btn_pause:"Pausar", btn_timer_reset:"Reiniciar", btn_timer_save:"Guardar registro (mes seleccionado abajo)",
    study_entry_title:"Registrar estudio real", label_month:"Mes hebreo", label_hours:"Horas", label_minutes:"Minutos",
    btn_add_entry:"Añadir registro", current_month_title:"Mes actual", label_study:"Estudio", label_charity:"Caridad",
    hint_set_goal:"Define una meta en tu perfil", out_of:" de ",
    year_study_title:"Resumen anual — estudio", label_study_year:"Estudio este año",
    table_month:"Mes", table_study_actual:"Estudio registrado", empty_year:"Todavía no hay datos para este año",
    charity_entry_title:"Registrar caridad real", label_amount:"Monto", label_recipient:"Entregado a", ph_recipient:"p. ej. Fondo comunitario",
    year_charity_title:"Resumen anual — caridad", label_charity_year:"Caridad este año",
    donation_list_title:"Lista de donaciones", table_amount:"Monto", table_recipient:"Entregado a", table_datetime:"Fecha y hora", empty_donations:"Todavía no hay donaciones registradas",
    export_btn:"Exportar a Excel", export_unavailable:"La exportación de archivos no está disponible aquí ahora",
    drive_sync_title:"Sincronización automática con Drive", drive_sync_hint:"Cuando está activado, cada nuevo registro actualiza automáticamente un archivo de Excel en tu Google Drive",
    drive_sync_label:"Actualizar automáticamente en Google Drive", drive_syncing:"Sincronizando…", drive_synced:"✓ Sincronizado con Drive",
    drive_sync_error:"Error de sincronización con Drive", drive_unavailable:"Google Drive no está disponible ahora", drive_open_link:"Abrir el archivo en Drive",
    today_prefix:"Hoy: ",
    nav_profile:"Perfil", nav_study:"Estudio", nav_charity:"Caridad", nav_about:"Qué es Pledge", nav_support:"Soporte",
    btn_sign_out:"Cerrar sesión",
    auth_title:"Bienvenido a Pledge", auth_hint:"Inicia sesión para guardar tus datos de forma segura",
    auth_signin_tab:"Iniciar sesión", auth_signup_tab:"Registrarse", auth_email:"Correo electrónico", auth_password:"Contraseña",
    auth_missing_fields:"Ingresa un correo y una contraseña", auth_check_email:"¡Registrado! Revisa tu correo para confirmar la cuenta y luego inicia sesión.",
    auth_generic_error:"Algo salió mal. Inténtalo de nuevo.",
    about_title:"¿Qué es Pledge?",
    about_p1:"Pledge es una app personal para seguir un compromiso anual de estudio de Torá y caridad.",
    about_p2:"Al inicio del año hebreo defines una meta mensual fija, y a lo largo del año la actualizas en vivo — con un temporizador de estudio y un registro de donaciones — para saber siempre exactamente en qué punto estás.",
    about_p3:"Todos tus datos se guardan de forma privada en tu propio navegador y nunca se envían a ningún servidor.",
    support_title:"Soporte", support_hint:"¿Tienes una pregunta, un error o una idea? Nos encantaría escucharte", support_contact:"Contáctanos por correo",
    faq_title:"Preguntas frecuentes",
    faq_q1:"¿Se guardan mis datos en línea?", faq_a1:"No. Todos los datos se guardan solo en tu navegador, en tu dispositivo.",
    faq_q2:"¿Qué pasa en un año bisiesto?", faq_a2:"Márcalo en la página de perfil, y la app añade automáticamente Adar I y Adar II.",
    faq_q3:"¿Cómo cambio el idioma?", faq_a3:"En la página de perfil, arriba, puedes elegir hebreo, inglés o español en cualquier momento."
  }
};
function t(key){ return (I18N[data.lang] && I18N[data.lang][key]) || I18N.he[key] || key; }

function getHebrewYearNumber(){
  try{
    const s = new Intl.DateTimeFormat('en-u-ca-hebrew',{year:'numeric'}).format(new Date());
    const match = s.match(/\d+/);
    if(match) return parseInt(match[0],10);
  }catch(e){}
  return null;
}
function isHebrewLeapYear(y){ if(y==null) return false; return ((7*y+1) % 19) < 7; }

function defaultData(){
  return {profileSetupDone:false, name:'', hebYear:'', leapYear:isHebrewLeapYear(getHebrewYearNumber()), lang:'he',
          studyGoalHours:0, charityGoal:0, currency:'₪', studyEntries:[], charityEntries:[],
          driveSync:false, driveFileId:null, driveFileUrl:null,
          timer:{running:false, startedAt:null, accumulatedSec:0}};
}
function localCacheKey(){ return KEY + ':' + (currentUserId || 'anon'); }
function loadLocalCache(){
  try{ const raw = localStorage.getItem(localCacheKey()); if(raw) return JSON.parse(raw); }catch(e){}
  return null;
}
function saveLocalCache(){
  try{ localStorage.setItem(localCacheKey(), JSON.stringify(data)); }catch(e){}
}
async function saveToSupabase(){
  if(!currentUserId) return;
  try{
    await supabaseClient.from('pledge_data').upsert({
      user_id: currentUserId, data: data, updated_at: new Date().toISOString()
    });
  }catch(e){ console.error('Supabase save failed', e); }
}
function save(){ saveLocalCache(); saveToSupabase(); }

async function loadUserData(){
  const cached = loadLocalCache();
  try{
    const { data: row, error } = await supabaseClient
      .from('pledge_data').select('data').eq('user_id', currentUserId).maybeSingle();
    if(row && row.data){
      return Object.assign(defaultData(), row.data);
    }
    const fresh = cached ? Object.assign(defaultData(), cached) : defaultData();
    await supabaseClient.from('pledge_data').insert({user_id: currentUserId, data: fresh, updated_at: new Date().toISOString()});
    return fresh;
  }catch(e){
    console.error('Supabase load failed, using local cache', e);
    return cached ? Object.assign(defaultData(), cached) : defaultData();
  }
}

let data = defaultData();

function getMonths(){ return data.leapYear ? LEAP_MONTHS : REG_MONTHS; }

function fmtHM(totalMin){
  totalMin = Math.round(totalMin||0);
  const h = Math.floor(totalMin/60), m = totalMin%60;
  const hAbbr = data.lang==='he' ? "ש'" : (data.lang==='es' ? 'h' : 'h');
  const mAbbr = data.lang==='he' ? "ד'" : (data.lang==='es' ? 'min' : 'min');
  if(h && m) return `${h} ${hAbbr} ${m} ${mAbbr}`;
  if(h) return `${h} ${hAbbr}`;
  return `${m} ${mAbbr}`;
}

function hebrewNumeral(n){
  if(!n || n<=0) return '';
  const hundredMap = {100:'ק',200:'ר',300:'ש',400:'ת',500:'תק',600:'תר',700:'תש',800:'תת',900:'תתק'};
  const tensMap = {10:'י',20:'כ',30:'ל',40:'מ',50:'נ',60:'ס',70:'ע',80:'פ',90:'צ'};
  const onesMap = {1:'א',2:'ב',3:'ג',4:'ד',5:'ה',6:'ו',7:'ז',8:'ח',9:'ט'};
  let hundreds = Math.floor(n/100)*100;
  let rem = n%100;
  let str = hundredMap[hundreds] || '';
  if(rem===15) str += 'טו';
  else if(rem===16) str += 'טז';
  else{
    const tens = Math.floor(rem/10)*10, ones = rem%10;
    if(tens) str += tensMap[tens];
    if(ones) str += onesMap[ones];
  }
  if(str.length===1) str += '׳';
  else if(str.length>1) str = str.slice(0,-1) + '״' + str.slice(-1);
  return str;
}

function renderHebDate(){
  const el = document.getElementById('hebDate');
  try{
    const day = parseInt(new Intl.DateTimeFormat('en-u-ca-hebrew',{day:'numeric'}).format(new Date()),10);
    const yearNum = getHebrewYearNumber();
    const monthHeb = detectCurrentMonth();
    const monthDisp = monthLabel(monthHeb);
    if(data.lang==='he'){
      const dayHeb = hebrewNumeral(day);
      const yearHeb = yearNum!=null ? hebrewNumeral(yearNum%1000) : '';
      el.textContent = `${t('today_prefix')}${dayHeb} ב${monthDisp}${yearHeb ? ' '+yearHeb : ''}`;
    } else {
      el.textContent = `${t('today_prefix')}${day} ${monthDisp}${yearNum? ' '+yearNum : ''}`;
    }
  }catch(e){
    el.textContent = t('today_prefix') + new Date().toLocaleDateString();
  }
}

function detectCurrentMonth(){
  const months = getMonths();
  try{
    const s = new Intl.DateTimeFormat('he-u-ca-hebrew',{month:'long'}).format(new Date());
    const found = months.find(m => s.includes(m.replace("'","׳")) || s.includes(m) || m.includes(s));
    if(found) return found;
  }catch(e){}
  return months[0];
}

function buildMonthSelects(){
  const months = getMonths();
  ['studyEntryMonth','charityEntryMonth'].forEach(id=>{
    const sel = document.getElementById(id);
    const prevVal = sel.value;
    sel.innerHTML = months.map(m=>`<option value="${m}">${monthLabel(m)}</option>`).join('');
    sel.value = months.includes(prevVal) ? prevVal : detectCurrentMonth();
  });
}

function fmtDateTime(ts){
  if(!ts) return '—';
  const locale = data.lang==='he' ? 'he-IL' : (data.lang==='es' ? 'es-ES' : 'en-US');
  try{ return new Intl.DateTimeFormat(locale, {dateStyle:'short', timeStyle:'short'}).format(new Date(ts)); }
  catch(e){ return new Date(ts).toLocaleString(); }
}

function sumStudy(month){ return data.studyEntries.filter(e=>e.month===month).reduce((s,e)=>s+(+e.studyMin||0),0); }
function sumCharity(month){ return data.charityEntries.filter(e=>e.month===month).reduce((s,e)=>s+(+e.amount||0),0); }

function setPie(pieEl, pctEl, pct, color){
  const clamped = Math.max(0, Math.min(100, pct));
  pieEl.style.background = `conic-gradient(${color} 0% ${clamped}%, ${WELL} ${clamped}% 100%)`;
  pctEl.textContent = Math.round(pct) + '%';
}

function showProfileView(){
  if(data.profileSetupDone){
    document.getElementById('profileForm').style.display = 'none';
    document.getElementById('profileSummary').style.display = 'block';
    document.getElementById('sumName').textContent = data.name ? `${t('hello_prefix')}${data.name}` : t('default_name');
    const bits = []; if(data.hebYear) bits.push(data.hebYear);
    bits.push(data.leapYear ? t('leap_year_text') : t('regular_year'));
    document.getElementById('sumYear').textContent = bits.join(' · ');
    document.getElementById('sumStudy').textContent = `${t('study_goal_summary')}${data.studyGoalHours} ${data.lang==='he'?'שעות':(data.lang==='es'?'horas':'hours')}`;
    document.getElementById('sumCharity').textContent = `${t('charity_goal_summary')}${data.charityGoal}${data.currency||''}`;
  } else {
    document.getElementById('profileForm').style.display = 'block';
    document.getElementById('profileSummary').style.display = 'none';
  }
}

function applyLanguage(){
  document.documentElement.lang = data.lang;
  document.documentElement.dir = data.lang==='he' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===data.lang));
  buildMonthSelects();
  showProfileView();
  renderHebDate();
  render();
  if(data.driveSync) setDriveStatus(data.driveFileId ? t('drive_synced') : '');
}

function render(){
  const months = getMonths();
  const curMonth = document.getElementById('studyEntryMonth').value || detectCurrentMonth();
  const curMonthC = document.getElementById('charityEntryMonth').value || detectCurrentMonth();
  document.getElementById('studyMonthLabel').textContent = monthLabel(curMonth);
  document.getElementById('charityMonthLabel').textContent = monthLabel(curMonthC);

  const goalMin = (data.studyGoalHours||0)*60;
  const actualMin = sumStudy(curMonth);
  const sPct = goalMin ? (actualMin/goalMin*100) : 0;
  setPie(document.getElementById('studyPie'), document.getElementById('studyPct'), sPct, GOLD);
  document.getElementById('studySub').textContent = goalMin
    ? `${fmtHM(actualMin)}${t('out_of')}${fmtHM(goalMin)}` : t('hint_set_goal');

  const cActual = sumCharity(curMonthC);
  const cPct = data.charityGoal ? (cActual/data.charityGoal*100) : 0;
  setPie(document.getElementById('charityPie'), document.getElementById('charityPct'), cPct, TEAL);
  document.getElementById('charitySub').textContent = data.charityGoal
    ? `${cActual}${data.currency||''}${t('out_of')}${data.charityGoal}${data.currency||''}` : t('hint_set_goal');

  const sRows = months.map(m=>{
    const a = sumStudy(m); if(!a) return null;
    return `<tr><td>${monthLabel(m)}</td><td>${fmtHM(a)}</td></tr>`;
  }).filter(Boolean);
  document.getElementById('yStudyTableWrap').innerHTML = sRows.length
    ? `<table><thead><tr><th>${t('table_month')}</th><th>${t('table_study_actual')}</th></tr></thead><tbody>${sRows.join('')}</tbody></table>`
    : `<p class="empty">${t('empty_year')}</p>`;

  const totalStudyMin = data.studyEntries.reduce((s,e)=>s+(+e.studyMin||0),0);
  const yStudyGoal = goalMin*months.length;
  const ySPct = yStudyGoal ? (totalStudyMin/yStudyGoal*100) : 0;
  setPie(document.getElementById('yStudyPie'), document.getElementById('yStudyPct'), ySPct, GOLD);
  document.getElementById('yStudySub').textContent = yStudyGoal
    ? `${fmtHM(totalStudyMin)}${t('out_of')}${fmtHM(yStudyGoal)}` : t('hint_set_goal');

  const totalCharity = data.charityEntries.reduce((s,e)=>s+(+e.amount||0),0);
  const yCharityGoal = data.charityGoal*months.length;
  const yCPct = yCharityGoal ? (totalCharity/yCharityGoal*100) : 0;
  setPie(document.getElementById('yCharityPie'), document.getElementById('yCharityPct'), yCPct, TEAL);
  document.getElementById('yCharitySub').textContent = yCharityGoal
    ? `${totalCharity}${data.currency||''}${t('out_of')}${yCharityGoal}${data.currency||''}` : t('hint_set_goal');

  const donations = data.charityEntries.slice().reverse();
  document.getElementById('donationListWrap').innerHTML = donations.length
    ? `<table><thead><tr><th>${t('table_month')}</th><th>${t('table_amount')}</th><th>${t('table_recipient')}</th><th>${t('table_datetime')}</th></tr></thead><tbody>${
        donations.map(d=>`<tr><td>${monthLabel(d.month)}</td><td>${d.amount}${data.currency||''}</td><td>${d.recipient||'—'}</td><td>${fmtDateTime(d.ts)}</td></tr>`).join('')
      }</tbody></table>`
    : `<p class="empty">${t('empty_donations')}</p>`;
}

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    data.lang = btn.dataset.lang;
    save();
    applyLanguage();
  });
});

document.getElementById('saveProfile').addEventListener('click', ()=>{
  data.name = document.getElementById('pName').value;
  data.hebYear = document.getElementById('pYear').value;
  data.leapYear = document.getElementById('pLeap').checked;
  data.studyGoalHours = +document.getElementById('pStudyH').value || 0;
  data.charityGoal = +document.getElementById('pCharity').value || 0;
  data.currency = document.getElementById('pCurrency').value || '₪';
  data.profileSetupDone = true;
  save(); showProfileView(); buildMonthSelects(); render();
  syncToDrive();
});
document.getElementById('editProfile').addEventListener('click', ()=>{
  document.getElementById('pName').value = data.name||'';
  document.getElementById('pYear').value = data.hebYear||'';
  document.getElementById('pLeap').checked = !!data.leapYear;
  document.getElementById('pStudyH').value = data.studyGoalHours||'';
  document.getElementById('pCharity').value = data.charityGoal||'';
  document.getElementById('pCurrency').value = data.currency||'₪';
  data.profileSetupDone = false;
  showProfileView();
});

// ---- Excel export ----
function ensureXLSX(){
  if(window.XLSX) return Promise.resolve();
  return new Promise((resolve, reject)=>{
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ---- Shared workbook builder ----
function buildWorkbook(){
  const wb = XLSX.utils.book_new();

  const studyRows = data.studyEntries.map(e=>({
    [t('table_month')]: monthLabel(e.month),
    [t('label_hours')]: Math.floor((e.studyMin||0)/60),
    [t('label_minutes')]: (e.studyMin||0)%60
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(studyRows), t('nav_study').slice(0,31));

  const charityRows = data.charityEntries.map(e=>({
    [t('table_month')]: monthLabel(e.month),
    [t('table_amount')]: e.amount,
    [t('table_recipient')]: e.recipient || '',
    [t('table_datetime')]: fmtDateTime(e.ts)
  }));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(charityRows), t('nav_charity').slice(0,31));

  const profileRows = [{
    [t('label_name')]: data.name || '',
    [t('label_year')]: data.hebYear || '',
    [t('label_study_goal')]: data.studyGoalHours || 0,
    [t('label_charity_goal')]: data.charityGoal || 0,
    [t('label_currency')]: data.currency || ''
  }];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(profileRows), t('nav_profile').slice(0,31));

  return XLSX.write(wb, {type:'array', bookType:'xlsx'});
}
function arrayBufferToBase64(buf){
  let binary = '';
  const bytes = new Uint8Array(buf);
  const chunk = 0x8000;
  for(let i=0;i<bytes.length;i+=chunk){
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i+chunk));
  }
  return btoa(binary);
}

document.getElementById('exportExcel').addEventListener('click', async ()=>{
  const btn = document.getElementById('exportExcel');
  const originalText = btn.textContent;
  try{
    btn.disabled = true;
    await ensureXLSX();
    const wbArray = buildWorkbook();
    const blob = new Blob([wbArray], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});

    if(!window.claude || typeof window.claude.use !== 'function'){
      alert(t('export_unavailable'));
      return;
    }
    const downloads = await window.claude.use('downloads');
    if(!downloads){
      alert(t('export_unavailable'));
      return;
    }
    await downloads.save({filename:'pledge-data.xlsx', data: blob});
  }catch(err){
    console.error('Export failed', err);
  }finally{
    btn.disabled = false;
    btn.textContent = originalText;
  }
});

// ---- Google Drive auto-sync ----
const DRIVE_FILE_TITLE = 'Pledge Data';

async function getMcp(){
  if(!window.claude || typeof window.claude.use !== 'function') return null;
  try{ return await window.claude.use('mcp'); }catch(e){ return null; }
}

function setDriveStatus(text){
  const el = document.getElementById('driveSyncStatus');
  if(el) el.textContent = text;
}

async function syncToDrive(){
  if(!data.driveSync) return;
  setDriveStatus(t('drive_syncing'));
  try{
    await ensureXLSX();
    const wbArray = buildWorkbook();
    const base64 = arrayBufferToBase64(wbArray);

    const mcp = await getMcp();
    if(!mcp){ setDriveStatus(t('drive_unavailable')); return; }

    if(data.driveFileId){
      try{ await mcp.callTool('Google Drive', 'trash_file', {fileId: data.driveFileId}); }catch(e){ /* may already be gone */ }
      data.driveFileId = null;
    } else {
      try{
        const searchRes = await mcp.callTool('Google Drive', 'search_files', {query: `title = '${DRIVE_FILE_TITLE}'`});
        const files = searchRes && searchRes.payload && searchRes.payload.files;
        if(files && files.length){
          await mcp.callTool('Google Drive', 'trash_file', {fileId: files[0].id});
        }
      }catch(e){ /* ignore lookup failure, proceed to create */ }
    }

    const createRes = await mcp.callTool('Google Drive', 'create_file', {
      title: DRIVE_FILE_TITLE,
      base64Content: base64,
      contentMimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    const payload = createRes && createRes.payload;
    if(payload && payload.id){
      data.driveFileId = payload.id;
      data.driveFileUrl = payload.viewUrl || null;
    }
    save();
    setDriveStatus(t('drive_synced'));
  }catch(err){
    console.error('Drive sync failed', err);
    setDriveStatus(t('drive_sync_error'));
  }
}

document.getElementById('driveSyncToggle').addEventListener('change', (e)=>{
  data.driveSync = e.target.checked;
  save();
  if(data.driveSync) syncToDrive();
  else setDriveStatus('');
});

// ---- Study timer ----
if(!data.timer) data.timer = {running:false, startedAt:null, accumulatedSec:0};

function getElapsedSec(){
  const tm = data.timer;
  return tm.running ? tm.accumulatedSec + (Date.now() - tm.startedAt)/1000 : tm.accumulatedSec;
}
function fmtTimer(totalSec){
  totalSec = Math.max(0, Math.floor(totalSec));
  const h = String(Math.floor(totalSec/3600)).padStart(2,'0');
  const m = String(Math.floor((totalSec%3600)/60)).padStart(2,'0');
  const s = String(totalSec%60).padStart(2,'0');
  return `${h}:${m}:${s}`;
}
function updateTimerDisplay(){
  document.getElementById('timerDisplay').textContent = fmtTimer(getElapsedSec());
}
setInterval(updateTimerDisplay, 1000);

document.getElementById('timerStart').addEventListener('click', ()=>{
  if(data.timer.running) return;
  data.timer.running = true;
  data.timer.startedAt = Date.now();
  save(); updateTimerDisplay();
});
document.getElementById('timerPause').addEventListener('click', ()=>{
  if(!data.timer.running) return;
  data.timer.accumulatedSec = getElapsedSec();
  data.timer.running = false;
  data.timer.startedAt = null;
  save(); updateTimerDisplay();
});
document.getElementById('timerReset').addEventListener('click', ()=>{
  data.timer = {running:false, startedAt:null, accumulatedSec:0};
  save(); updateTimerDisplay();
});
document.getElementById('timerSave').addEventListener('click', ()=>{
  const elapsedSec = getElapsedSec();
  const studyMin = Math.round(elapsedSec/60);
  if(studyMin <= 0) return;
  const month = document.getElementById('studyEntryMonth').value || detectCurrentMonth();
  data.studyEntries.push({month, studyMin});
  data.timer = {running:false, startedAt:null, accumulatedSec:0};
  save(); updateTimerDisplay(); render();
  syncToDrive();
});

document.getElementById('addStudyEntry').addEventListener('click', ()=>{
  const month = document.getElementById('studyEntryMonth').value;
  const h = +document.getElementById('entryStudyH').value || 0;
  const m = +document.getElementById('entryStudyM').value || 0;
  const studyMin = h*60+m;
  if(studyMin===0) return;
  data.studyEntries.push({month, studyMin});
  save();
  document.getElementById('entryStudyH').value=''; document.getElementById('entryStudyM').value='';
  render();
  syncToDrive();
});

document.getElementById('addCharityEntry').addEventListener('click', ()=>{
  const month = document.getElementById('charityEntryMonth').value;
  const amount = +document.getElementById('entryCharityAmount').value || 0;
  const recipient = document.getElementById('entryRecipient').value.trim();
  if(amount===0) return;
  data.charityEntries.push({month, amount, recipient, ts: Date.now()});
  save();
  document.getElementById('entryCharityAmount').value=''; document.getElementById('entryRecipient').value='';
  render();
  syncToDrive();
});

document.getElementById('studyEntryMonth').addEventListener('change', render);
document.getElementById('charityEntryMonth').addEventListener('change', render);

document.getElementById('resetAll').addEventListener('click', ()=>{
  if(confirm(t('confirm_reset'))){
    const lang = data.lang;
    data = {profileSetupDone:false, name:'', hebYear:'', leapYear:isHebrewLeapYear(getHebrewYearNumber()), lang:lang,
            studyGoalHours:0, charityGoal:0, currency:'₪', studyEntries:[], charityEntries:[],
            driveSync:false, driveFileId:null, driveFileUrl:null,
            timer:{running:false, startedAt:null, accumulatedSec:0}};
    save(); showProfileView(); buildMonthSelects(); render(); updateTimerDisplay();
    document.getElementById('driveSyncToggle').checked = false;
    setDriveStatus('');
  }
});

document.querySelectorAll('.navbtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.navbtn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const page = btn.dataset.page;
    document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active', p.id==='page-'+page));
  });
});

function initAppUI(){
  document.getElementById('pLeap').checked = !!data.leapYear;
  document.getElementById('driveSyncToggle').checked = !!data.driveSync;
  if(data.driveSync) setDriveStatus(data.driveFileId ? t('drive_synced') : '');
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===data.lang));
  document.documentElement.lang = data.lang;
  document.documentElement.dir = data.lang==='he' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPh); });
  renderHebDate();
  buildMonthSelects();
  showProfileView();
  render();
  updateTimerDisplay();
}

// ---- Auth flow ----
let authMode = 'signin';

function setAuthTab(mode){
  authMode = mode;
  document.getElementById('authTabSignin').classList.toggle('active', mode==='signin');
  document.getElementById('authTabSignup').classList.toggle('active', mode==='signup');
  const submitBtn = document.getElementById('authSubmit');
  submitBtn.textContent = mode==='signin' ? t('auth_signin_tab') : t('auth_signup_tab');
  submitBtn.dataset.i18n = mode==='signin' ? 'auth_signin_tab' : 'auth_signup_tab';
  document.getElementById('authError').textContent = '';
  document.getElementById('authNote').textContent = '';
}
document.getElementById('authTabSignin').addEventListener('click', ()=>setAuthTab('signin'));
document.getElementById('authTabSignup').addEventListener('click', ()=>setAuthTab('signup'));

async function onAuthenticated(userId){
  currentUserId = userId;
  document.getElementById('authGate').style.display = 'none';
  document.getElementById('appRoot').style.display = 'block';
  data = await loadUserData();
  initAppUI();
}

function showAuthGate(){
  currentUserId = null;
  document.getElementById('appRoot').style.display = 'none';
  document.getElementById('authGate').style.display = 'flex';
}

document.getElementById('authSubmit').addEventListener('click', async ()=>{
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  const errEl = document.getElementById('authError');
  const noteEl = document.getElementById('authNote');
  errEl.textContent = ''; noteEl.textContent = '';
  if(!email || !password){ errEl.textContent = t('auth_missing_fields'); return; }
  const btn = document.getElementById('authSubmit');
  btn.disabled = true;
  try{
    if(authMode==='signin'){
      const { data: res, error } = await supabaseClient.auth.signInWithPassword({email, password});
      if(error) throw error;
      await onAuthenticated(res.user.id);
    } else {
      const { data: res, error } = await supabaseClient.auth.signUp({email, password});
      if(error) throw error;
      if(res.session){
        await onAuthenticated(res.user.id);
      } else {
        noteEl.textContent = t('auth_check_email');
      }
    }
  }catch(err){
    errEl.textContent = err.message || t('auth_generic_error');
  }finally{
    btn.disabled = false;
  }
});

document.getElementById('signOutBtn') && document.getElementById('signOutBtn').addEventListener('click', async ()=>{
  try{ await supabaseClient.auth.signOut(); }catch(e){}
  showAuthGate();
});

(async function bootAuth(){
  try{
    const { data: sessionData } = await supabaseClient.auth.getSession();
    if(sessionData && sessionData.session && sessionData.session.user){
      await onAuthenticated(sessionData.session.user.id);
    } else {
      showAuthGate();
    }
  }catch(e){
    console.error('Session check failed', e);
    showAuthGate();
  }
})();
