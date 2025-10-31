import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const { email, fullName } = await req.json();
    if (!email || typeof email !== 'string' || !fullName || typeof fullName !== 'string') {
      return NextResponse.json({ error: 'Invalid data.' }, { status: 400 });
    }
    const { error } = await supabase.from('community_emails').insert([{ email, full_name: fullName }]);
    if (error) {
      if (error.code === '23505') {
        // Unique violation
        return NextResponse.json({ error: 'This email is already registered.' }, { status: 409 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
} 