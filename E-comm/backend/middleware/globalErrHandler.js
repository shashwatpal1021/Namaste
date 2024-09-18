export const globalErrHandler = (err, req, res, next) => {
  // stack
  // message
  const stack = err?.statck;
  const message = err?.message;
  const statusCode = err?.status ? err?.statusCode : 500;

  res.status(statusCode).json({
    stack,
    message,
  })
}


// 404 handler

export const notFound = (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  next(err);
}