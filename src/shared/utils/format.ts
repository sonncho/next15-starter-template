/**
 * 숫자를 인스타그램 스타일로 포맷팅합니다 (예: 1.2K, 3.4M)
 * @param number 포맷팅할 숫자
 * @param decimals 소수점 자릿수 (기본값: 1)
 * @returns 포맷팅된 문자열
 */
export function formatCompactNumber(number: number, decimals = 1): string {
  if (number === 0) return '0';

  const absNumber = Math.abs(number);
  const sign = number < 0 ? '-' : '';

  if (absNumber < 1000) {
    return sign + absNumber.toString();
  }

  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const tier = Math.floor(Math.log10(absNumber) / 3);

  if (tier >= suffixes.length) {
    return sign + absNumber.toString(); // 너무 큰 수는 그대로 표시
  }

  const suffix = suffixes[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = absNumber / scale;

  // 소수점 처리
  const formatted = scaled.toFixed(decimals);

  // 소수점이 .0으로 끝나면 정수로 표시
  const final = formatted.endsWith(`.${Array(decimals + 1).join('0')}`) ? formatted.split('.')[0] : formatted;

  return sign + final + suffix;
}

/**
 * 날짜를 지정된 로케일에 맞게 포맷팅합니다.
 * @param date - 포맷할 날짜 (Date 객체 또는 날짜 문자열)
 * @param locale - 사용할 로케일 (기본값: 'ko-KR')
 * @returns 포맷된 날짜 문자열 (예: '2023년 12월 25일')
 * @example
 * formatDate(new Date(2023, 11, 25)) // '2023년 12월 25일'
 * formatDate('2023-12-25') // '2023년 12월 25일'
 */
export function formatDate(date: Date | string, locale = 'ko-KR'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * 날짜를 현재 시간 기준으로 상대적인 시간으로 포맷팅합니다.
 * @param date - 포맷할 날짜 (Date 객체 또는 날짜 문자열)
 * @returns 상대적 시간 문자열 (예: '방금 전', '5분 전', '2시간 전', '3일 전')
 * @example
 * formatRelativeTime(new Date(Date.now() - 5 * 60 * 1000)) // '5분 전'
 * formatRelativeTime(new Date(Date.now() - 3 * 60 * 60 * 1000)) // '3시간 전'
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return '방금 전';
  if (diffMin < 60) return `${diffMin}분 전`;
  if (diffHour < 24) return `${diffHour}시간 전`;
  if (diffDay < 7) return `${diffDay}일 전`;

  return formatDate(d);
}

/**
 * 숫자 관련 포맷 유틸리티 함수
 */

/**
 * 숫자를 천 단위 구분자가 포함된 형식으로 포맷팅합니다.
 * @param num - 포맷할 숫자
 * @param locale - 사용할 로케일 (기본값: 'ko-KR')
 * @returns 천 단위 구분자가 포함된 숫자 문자열
 * @example
 * formatNumber(1234567) // '1,234,567'
 */
export function formatNumber(num: number, locale = 'ko-KR'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * 숫자를 통화 형식으로 포맷팅합니다.
 * @param amount - 포맷할 금액
 * @param currency - 통화 코드 (기본값: 'KRW')
 * @param locale - 사용할 로케일 (기본값: 'ko-KR')
 * @returns 통화 형식의 문자열
 * @example
 * formatCurrency(15000) // '₩15,000'
 * formatCurrency(15000, 'USD', 'en-US') // '$15,000.00'
 */
export function formatCurrency(amount: number, currency = 'KRW', locale = 'ko-KR'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
  }).format(amount);
}

/**
 * 바이트 단위의 크기를 사람이 읽기 쉬운 형태로 포맷팅합니다.
 * @param bytes - 변환할 바이트 크기
 * @returns 포맷된 파일 크기 문자열 (예: '1.5 MB', '3.2 GB')
 * @example
 * formatFileSize(1500) // '1.46 KB'
 * formatFileSize(1500000) // '1.43 MB'
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * 문자열 관련 포맷 유틸리티 함수
 */

/**
 * 텍스트를 지정된 최대 길이로 잘라내고 말줄임표를 추가합니다.
 * @param text - 원본 텍스트
 * @param maxLength - 최대 길이
 * @returns 잘린 텍스트 (필요한 경우 말줄임표 추가)
 * @example
 * truncateText('This is a long text', 10) // 'This is a...'
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * 문자열을 URL 친화적인 슬러그로 변환합니다.
 * @param text - 원본 텍스트
 * @returns URL 친화적인 슬러그 문자열
 * @example
 * slugify('Hello World!') // 'hello-world'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}
