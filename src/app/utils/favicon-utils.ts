// export function changeFavicon(iconPath: string) {
//     const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
//     console.log("document: "+favicon)
//     if (favicon) {
//       favicon.href = iconPath;
//     }
//   }
  
export function changeFavicon(iconPath: string) {
  if (typeof document !== 'undefined') {
    const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = iconPath;
      console.log('Favicon cambiado a:', iconPath);
    } else {
      console.error('Elemento con ID "dynamic-favicon" no encontrado.');
    }
  } else {
    console.error('Document no está definido.');
  }
}
