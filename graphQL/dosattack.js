const fetch = require('node-fetch');

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        query {
            books {
                author {
                    books {
                        author {
                            books {
                                author {
                                    books {
                                        author {
                                            books {
                                                author {
                                                    books {
                                                        author {
                                                            books {
                                                                author {
                                                                    books {
                                                                        author {
                                                                            books {
                                                                                author {
                                                                                    books {
                                                                                        author {
                                                                                            books {
                                                                                                author {
                                                                                                    books {
                                                                                                        author {
                                                                                                            books {
                                                                                                                author {
                                                                                                                    books {
                                                                                                                        author {
                                                                                                                            books {
                                                                                                                                name
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } 
            }
        }
      `,
    variables: {
    },
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result.data.books));