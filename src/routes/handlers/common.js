export const defaultSuccessHandler = (_req, res) => {
  res.json({
    status: 'ok',
  });
};

export const healthCheckHandler = (_req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
};

