import ApiWrapper from './ApiWrapper';

export default class ApiCalls {
  static apiWrapper = new ApiWrapper(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/',
  );

  static appId = 'xGqefF6NzDPqB4U6YRPV';

  static fetchBooks = () => {
    const response = this.apiWrapper.getApi(`apps/${this.appId}/books/`);
    return response;
  };

  static addBooks = ({
    id, title, author, category,
  }) => {
    const data = {
      item_id: id,
      title: `${title};;${author}`,
      category,
    };
    const response = this.apiWrapper.postApi(
      `apps/${this.appId}/books/`,
      data,
    );
    return response;
  };

  static removeBooks = (id) => {
    const data = {
      item_id: id,
    };
    const response = this.apiWrapper.deleteApi(
      `apps/${this.appId}/books/${id}`,
      data,
    );
    return response;
  };
}
