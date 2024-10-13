class ApiError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "API" + this.name;
    this.details = details;
  }
}

const headers = {
  "Content-Type": "application/json",
};

const request = async (method, url, body = null) => {
  const options = body
    ? { method, headers, body: JSON.stringify(body) }
    : { method, headers };

  let res;

  try {
    res = await fetch(url, options);
  } catch (err) {
    throw new ApiError("API cannot be reached", err.message);
  }

  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    if (data.error) {
      throw new ApiError(data.error.message, data.error.details);
    }
  }
};

export { ApiError, request };
