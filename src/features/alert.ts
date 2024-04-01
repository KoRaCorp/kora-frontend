export function generateNativeAlert(message: string) {
  // 혹시나 서버 환경에서 실행될때를 대비해 리턴 처리
  if (typeof window === undefined) return;

  window.alert(message);
}
