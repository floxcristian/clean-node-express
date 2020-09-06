export class MessageResponse {
  static messageFormat(customMesssage) {
    return `${customMesssage}`;
  }

  static generalError() {
    return this.messageFormat('An error ocurred during the process.');
  }

  static notFound() {
    return this.messageFormat('An error ocurred while getting data.');
  }

  static dbError() {
    return this.messageFormat('Database error');
  }
}
