export function changeFavicon(iconPath: string) {
    const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = iconPath;
    }
  }
  