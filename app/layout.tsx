import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
const title="MATERIA ATLAS｜材料科学の地図";
const description="材料科学を6領域・24分野・96トピック・480詳細テーマへ掘り下げ、606ノードの多層ツリーでたどるフィールドガイド。";
export async function generateMetadata():Promise<Metadata>{
 const h=await headers(); const host=h.get("x-forwarded-host")??h.get("host")??"localhost:3000"; const protocol=h.get("x-forwarded-proto")??(host.includes("localhost")?"http":"https"); const image=`${protocol}://${host}/og.png`;
 return {title,description,icons:{icon:"/favicon.svg"},openGraph:{title,description,type:"website",images:[{url:image,width:1200,height:630,alt:"MATERIA ATLAS — 材料科学の地図をひらく。"}]},twitter:{card:"summary_large_image",title,description,images:[image]}};
}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
