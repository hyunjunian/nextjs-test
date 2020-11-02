// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.setHeader('Cache-Control', 's-maxage=1,stale-while-revalidate');
    res.statusCode = 200
    res.json({name: 'John Doe'})
}
