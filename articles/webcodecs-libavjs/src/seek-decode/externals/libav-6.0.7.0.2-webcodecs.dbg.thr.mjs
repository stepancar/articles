/*!
 * This software is compiled from several sources, the licenses for which are
 * included herein.
 *
 * ---
 *
 * ffmpeg:
 *
 *  Copyright (c) 2000-2023 Fabrice Bellard et al
 *
 *                   GNU LESSER GENERAL PUBLIC LICENSE
 *                        Version 2.1, February 1999
 *
 *  Copyright (C) 1991, 1999 Free Software Foundation, Inc.
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *  Everyone is permitted to copy and distribute verbatim copies
 *  of this license document, but changing it is not allowed.
 *
 * [This is the first released version of the Lesser GPL.  It also counts
 *  as the successor of the GNU Library Public License, version 2, hence
 *  the version number 2.1.]
 *
 *                             Preamble
 *
 *   The licenses for most software are designed to take away your
 * freedom to share and change it.  By contrast, the GNU General Public
 * Licenses are intended to guarantee your freedom to share and change
 * free software--to make sure the software is free for all its users.
 *
 *   This license, the Lesser General Public License, applies to some
 * specially designated software packages--typically libraries--of the
 * Free Software Foundation and other authors who decide to use it.  You
 * can use it too, but we suggest you first think carefully about whether
 * this license or the ordinary General Public License is the better
 * strategy to use in any particular case, based on the explanations below.
 *
 *   When we speak of free software, we are referring to freedom of use,
 * not price.  Our General Public Licenses are designed to make sure that
 * you have the freedom to distribute copies of free software (and charge
 * for this service if you wish); that you receive source code or can get
 * it if you want it; that you can change the software and use pieces of
 * it in new free programs; and that you are informed that you can do
 * these things.
 *
 *   To protect your rights, we need to make restrictions that forbid
 * distributors to deny you these rights or to ask you to surrender these
 * rights.  These restrictions translate to certain responsibilities for
 * you if you distribute copies of the library or if you modify it.
 *
 *   For example, if you distribute copies of the library, whether gratis
 * or for a fee, you must give the recipients all the rights that we gave
 * you.  You must make sure that they, too, receive or can get the source
 * code.  If you link other code with the library, you must provide
 * complete object files to the recipients, so that they can relink them
 * with the library after making changes to the library and recompiling
 * it.  And you must show them these terms so they know their rights.
 *
 *   We protect your rights with a two-step method: (1) we copyright the
 * library, and (2) we offer you this license, which gives you legal
 * permission to copy, distribute and/or modify the library.
 *
 *   To protect each distributor, we want to make it very clear that
 * there is no warranty for the free library.  Also, if the library is
 * modified by someone else and passed on, the recipients should know
 * that what they have is not the original version, so that the original
 * author's reputation will not be affected by problems that might be
 * introduced by others.
 *
 *   Finally, software patents pose a constant threat to the existence of
 * any free program.  We wish to make sure that a company cannot
 * effectively restrict the users of a free program by obtaining a
 * restrictive license from a patent holder.  Therefore, we insist that
 * any patent license obtained for a version of the library must be
 * consistent with the full freedom of use specified in this license.
 *
 *   Most GNU software, including some libraries, is covered by the
 * ordinary GNU General Public License.  This license, the GNU Lesser
 * General Public License, applies to certain designated libraries, and
 * is quite different from the ordinary General Public License.  We use
 * this license for certain libraries in order to permit linking those
 * libraries into non-free programs.
 *
 *   When a program is linked with a library, whether statically or using
 * a shared library, the combination of the two is legally speaking a
 * combined work, a derivative of the original library.  The ordinary
 * General Public License therefore permits such linking only if the
 * entire combination fits its criteria of freedom.  The Lesser General
 * Public License permits more lax criteria for linking other code with
 * the library.
 *
 *   We call this license the "Lesser" General Public License because it
 * does Less to protect the user's freedom than the ordinary General
 * Public License.  It also provides other free software developers Less
 * of an advantage over competing non-free programs.  These disadvantages
 * are the reason we use the ordinary General Public License for many
 * libraries.  However, the Lesser license provides advantages in certain
 * special circumstances.
 *
 *   For example, on rare occasions, there may be a special need to
 * encourage the widest possible use of a certain library, so that it becomes
 * a de-facto standard.  To achieve this, non-free programs must be
 * allowed to use the library.  A more frequent case is that a free
 * library does the same job as widely used non-free libraries.  In this
 * case, there is little to gain by limiting the free library to free
 * software only, so we use the Lesser General Public License.
 *
 *   In other cases, permission to use a particular library in non-free
 * programs enables a greater number of people to use a large body of
 * free software.  For example, permission to use the GNU C Library in
 * non-free programs enables many more people to use the whole GNU
 * operating system, as well as its variant, the GNU/Linux operating
 * system.
 *
 *   Although the Lesser General Public License is Less protective of the
 * users' freedom, it does ensure that the user of a program that is
 * linked with the Library has the freedom and the wherewithal to run
 * that program using a modified version of the Library.
 *
 *   The precise terms and conditions for copying, distribution and
 * modification follow.  Pay close attention to the difference between a
 * "work based on the library" and a "work that uses the library".  The
 * former contains code derived from the library, whereas the latter must
 * be combined with the library in order to run.
 *
 *                   GNU LESSER GENERAL PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. This License Agreement applies to any software library or other
 * program which contains a notice placed by the copyright holder or
 * other authorized party saying it may be distributed under the terms of
 * this Lesser General Public License (also called "this License").
 * Each licensee is addressed as "you".
 *
 *   A "library" means a collection of software functions and/or data
 * prepared so as to be conveniently linked with application programs
 * (which use some of those functions and data) to form executables.
 *
 *   The "Library", below, refers to any such software library or work
 * which has been distributed under these terms.  A "work based on the
 * Library" means either the Library or any derivative work under
 * copyright law: that is to say, a work containing the Library or a
 * portion of it, either verbatim or with modifications and/or translated
 * straightforwardly into another language.  (Hereinafter, translation is
 * included without limitation in the term "modification".)
 *
 *   "Source code" for a work means the preferred form of the work for
 * making modifications to it.  For a library, complete source code means
 * all the source code for all modules it contains, plus any associated
 * interface definition files, plus the scripts used to control compilation
 * and installation of the library.
 *
 *   Activities other than copying, distribution and modification are not
 * covered by this License; they are outside its scope.  The act of
 * running a program using the Library is not restricted, and output from
 * such a program is covered only if its contents constitute a work based
 * on the Library (independent of the use of the Library in a tool for
 * writing it).  Whether that is true depends on what the Library does
 * and what the program that uses the Library does.
 *
 *   1. You may copy and distribute verbatim copies of the Library's
 * complete source code as you receive it, in any medium, provided that
 * you conspicuously and appropriately publish on each copy an
 * appropriate copyright notice and disclaimer of warranty; keep intact
 * all the notices that refer to this License and to the absence of any
 * warranty; and distribute a copy of this License along with the
 * Library.
 *
 *   You may charge a fee for the physical act of transferring a copy,
 * and you may at your option offer warranty protection in exchange for a
 * fee.
 *
 *   2. You may modify your copy or copies of the Library or any portion
 * of it, thus forming a work based on the Library, and copy and
 * distribute such modifications or work under the terms of Section 1
 * above, provided that you also meet all of these conditions:
 *
 *     a) The modified work must itself be a software library.
 *
 *     b) You must cause the files modified to carry prominent notices
 *     stating that you changed the files and the date of any change.
 *
 *     c) You must cause the whole of the work to be licensed at no
 *     charge to all third parties under the terms of this License.
 *
 *     d) If a facility in the modified Library refers to a function or a
 *     table of data to be supplied by an application program that uses
 *     the facility, other than as an argument passed when the facility
 *     is invoked, then you must make a good faith effort to ensure that,
 *     in the event an application does not supply such function or
 *     table, the facility still operates, and performs whatever part of
 *     its purpose remains meaningful.
 *
 *     (For example, a function in a library to compute square roots has
 *     a purpose that is entirely well-defined independent of the
 *     application.  Therefore, Subsection 2d requires that any
 *     application-supplied function or table used by this function must
 *     be optional: if the application does not supply it, the square
 *     root function must still compute square roots.)
 *
 * These requirements apply to the modified work as a whole.  If
 * identifiable sections of that work are not derived from the Library,
 * and can be reasonably considered independent and separate works in
 * themselves, then this License, and its terms, do not apply to those
 * sections when you distribute them as separate works.  But when you
 * distribute the same sections as part of a whole which is a work based
 * on the Library, the distribution of the whole must be on the terms of
 * this License, whose permissions for other licensees extend to the
 * entire whole, and thus to each and every part regardless of who wrote
 * it.
 *
 * Thus, it is not the intent of this section to claim rights or contest
 * your rights to work written entirely by you; rather, the intent is to
 * exercise the right to control the distribution of derivative or
 * collective works based on the Library.
 *
 * In addition, mere aggregation of another work not based on the Library
 * with the Library (or with a work based on the Library) on a volume of
 * a storage or distribution medium does not bring the other work under
 * the scope of this License.
 *
 *   3. You may opt to apply the terms of the ordinary GNU General Public
 * License instead of this License to a given copy of the Library.  To do
 * this, you must alter all the notices that refer to this License, so
 * that they refer to the ordinary GNU General Public License, version 2,
 * instead of to this License.  (If a newer version than version 2 of the
 * ordinary GNU General Public License has appeared, then you can specify
 * that version instead if you wish.)  Do not make any other change in
 * these notices.
 *
 *   Once this change is made in a given copy, it is irreversible for
 * that copy, so the ordinary GNU General Public License applies to all
 * subsequent copies and derivative works made from that copy.
 *
 *   This option is useful when you wish to copy part of the code of
 * the Library into a program that is not a library.
 *
 *   4. You may copy and distribute the Library (or a portion or
 * derivative of it, under Section 2) in object code or executable form
 * under the terms of Sections 1 and 2 above provided that you accompany
 * it with the complete corresponding machine-readable source code, which
 * must be distributed under the terms of Sections 1 and 2 above on a
 * medium customarily used for software interchange.
 *
 *   If distribution of object code is made by offering access to copy
 * from a designated place, then offering equivalent access to copy the
 * source code from the same place satisfies the requirement to
 * distribute the source code, even though third parties are not
 * compelled to copy the source along with the object code.
 *
 *   5. A program that contains no derivative of any portion of the
 * Library, but is designed to work with the Library by being compiled or
 * linked with it, is called a "work that uses the Library".  Such a
 * work, in isolation, is not a derivative work of the Library, and
 * therefore falls outside the scope of this License.
 *
 *   However, linking a "work that uses the Library" with the Library
 * creates an executable that is a derivative of the Library (because it
 * contains portions of the Library), rather than a "work that uses the
 * library".  The executable is therefore covered by this License.
 * Section 6 states terms for distribution of such executables.
 *
 *   When a "work that uses the Library" uses material from a header file
 * that is part of the Library, the object code for the work may be a
 * derivative work of the Library even though the source code is not.
 * Whether this is true is especially significant if the work can be
 * linked without the Library, or if the work is itself a library.  The
 * threshold for this to be true is not precisely defined by law.
 *
 *   If such an object file uses only numerical parameters, data
 * structure layouts and accessors, and small macros and small inline
 * functions (ten lines or less in length), then the use of the object
 * file is unrestricted, regardless of whether it is legally a derivative
 * work.  (Executables containing this object code plus portions of the
 * Library will still fall under Section 6.)
 *
 *   Otherwise, if the work is a derivative of the Library, you may
 * distribute the object code for the work under the terms of Section 6.
 * Any executables containing that work also fall under Section 6,
 * whether or not they are linked directly with the Library itself.
 *
 *   6. As an exception to the Sections above, you may also combine or
 * link a "work that uses the Library" with the Library to produce a
 * work containing portions of the Library, and distribute that work
 * under terms of your choice, provided that the terms permit
 * modification of the work for the customer's own use and reverse
 * engineering for debugging such modifications.
 *
 *   You must give prominent notice with each copy of the work that the
 * Library is used in it and that the Library and its use are covered by
 * this License.  You must supply a copy of this License.  If the work
 * during execution displays copyright notices, you must include the
 * copyright notice for the Library among them, as well as a reference
 * directing the user to the copy of this License.  Also, you must do one
 * of these things:
 *
 *     a) Accompany the work with the complete corresponding
 *     machine-readable source code for the Library including whatever
 *     changes were used in the work (which must be distributed under
 *     Sections 1 and 2 above); and, if the work is an executable linked
 *     with the Library, with the complete machine-readable "work that
 *     uses the Library", as object code and/or source code, so that the
 *     user can modify the Library and then relink to produce a modified
 *     executable containing the modified Library.  (It is understood
 *     that the user who changes the contents of definitions files in the
 *     Library will not necessarily be able to recompile the application
 *     to use the modified definitions.)
 *
 *     b) Use a suitable shared library mechanism for linking with the
 *     Library.  A suitable mechanism is one that (1) uses at run time a
 *     copy of the library already present on the user's computer system,
 *     rather than copying library functions into the executable, and (2)
 *     will operate properly with a modified version of the library, if
 *     the user installs one, as long as the modified version is
 *     interface-compatible with the version that the work was made with.
 *
 *     c) Accompany the work with a written offer, valid for at
 *     least three years, to give the same user the materials
 *     specified in Subsection 6a, above, for a charge no more
 *     than the cost of performing this distribution.
 *
 *     d) If distribution of the work is made by offering access to copy
 *     from a designated place, offer equivalent access to copy the above
 *     specified materials from the same place.
 *
 *     e) Verify that the user has already received a copy of these
 *     materials or that you have already sent this user a copy.
 *
 *   For an executable, the required form of the "work that uses the
 * Library" must include any data and utility programs needed for
 * reproducing the executable from it.  However, as a special exception,
 * the materials to be distributed need not include anything that is
 * normally distributed (in either source or binary form) with the major
 * components (compiler, kernel, and so on) of the operating system on
 * which the executable runs, unless that component itself accompanies
 * the executable.
 *
 *   It may happen that this requirement contradicts the license
 * restrictions of other proprietary libraries that do not normally
 * accompany the operating system.  Such a contradiction means you cannot
 * use both them and the Library together in an executable that you
 * distribute.
 *
 *   7. You may place library facilities that are a work based on the
 * Library side-by-side in a single library together with other library
 * facilities not covered by this License, and distribute such a combined
 * library, provided that the separate distribution of the work based on
 * the Library and of the other library facilities is otherwise
 * permitted, and provided that you do these two things:
 *
 *     a) Accompany the combined library with a copy of the same work
 *     based on the Library, uncombined with any other library
 *     facilities.  This must be distributed under the terms of the
 *     Sections above.
 *
 *     b) Give prominent notice with the combined library of the fact
 *     that part of it is a work based on the Library, and explaining
 *     where to find the accompanying uncombined form of the same work.
 *
 *   8. You may not copy, modify, sublicense, link with, or distribute
 * the Library except as expressly provided under this License.  Any
 * attempt otherwise to copy, modify, sublicense, link with, or
 * distribute the Library is void, and will automatically terminate your
 * rights under this License.  However, parties who have received copies,
 * or rights, from you under this License will not have their licenses
 * terminated so long as such parties remain in full compliance.
 *
 *   9. You are not required to accept this License, since you have not
 * signed it.  However, nothing else grants you permission to modify or
 * distribute the Library or its derivative works.  These actions are
 * prohibited by law if you do not accept this License.  Therefore, by
 * modifying or distributing the Library (or any work based on the
 * Library), you indicate your acceptance of this License to do so, and
 * all its terms and conditions for copying, distributing or modifying
 * the Library or works based on it.
 *
 *   10. Each time you redistribute the Library (or any work based on the
 * Library), the recipient automatically receives a license from the
 * original licensor to copy, distribute, link with or modify the Library
 * subject to these terms and conditions.  You may not impose any further
 * restrictions on the recipients' exercise of the rights granted herein.
 * You are not responsible for enforcing compliance by third parties with
 * this License.
 *
 *   11. If, as a consequence of a court judgment or allegation of patent
 * infringement or for any other reason (not limited to patent issues),
 * conditions are imposed on you (whether by court order, agreement or
 * otherwise) that contradict the conditions of this License, they do not
 * excuse you from the conditions of this License.  If you cannot
 * distribute so as to satisfy simultaneously your obligations under this
 * License and any other pertinent obligations, then as a consequence you
 * may not distribute the Library at all.  For example, if a patent
 * license would not permit royalty-free redistribution of the Library by
 * all those who receive copies directly or indirectly through you, then
 * the only way you could satisfy both it and this License would be to
 * refrain entirely from distribution of the Library.
 *
 * If any portion of this section is held invalid or unenforceable under any
 * particular circumstance, the balance of the section is intended to apply,
 * and the section as a whole is intended to apply in other circumstances.
 *
 * It is not the purpose of this section to induce you to infringe any
 * patents or other property right claims or to contest validity of any
 * such claims; this section has the sole purpose of protecting the
 * integrity of the free software distribution system which is
 * implemented by public license practices.  Many people have made
 * generous contributions to the wide range of software distributed
 * through that system in reliance on consistent application of that
 * system; it is up to the author/donor to decide if he or she is willing
 * to distribute software through any other system and a licensee cannot
 * impose that choice.
 *
 * This section is intended to make thoroughly clear what is believed to
 * be a consequence of the rest of this License.
 *
 *   12. If the distribution and/or use of the Library is restricted in
 * certain countries either by patents or by copyrighted interfaces, the
 * original copyright holder who places the Library under this License may add
 * an explicit geographical distribution limitation excluding those countries,
 * so that distribution is permitted only in or among countries not thus
 * excluded.  In such case, this License incorporates the limitation as if
 * written in the body of this License.
 *
 *   13. The Free Software Foundation may publish revised and/or new
 * versions of the Lesser General Public License from time to time.
 * Such new versions will be similar in spirit to the present version,
 * but may differ in detail to address new problems or concerns.
 *
 * Each version is given a distinguishing version number.  If the Library
 * specifies a version number of this License which applies to it and
 * "any later version", you have the option of following the terms and
 * conditions either of that version or of any later version published by
 * the Free Software Foundation.  If the Library does not specify a
 * license version number, you may choose any version ever published by
 * the Free Software Foundation.
 *
 *   14. If you wish to incorporate parts of the Library into other free
 * programs whose distribution conditions are incompatible with these,
 * write to the author to ask for permission.  For software which is
 * copyrighted by the Free Software Foundation, write to the Free
 * Software Foundation; we sometimes make exceptions for this.  Our
 * decision will be guided by the two goals of preserving the free status
 * of all derivatives of our free software and of promoting the sharing
 * and reuse of software generally.
 *
 *                             NO WARRANTY
 *
 *   15. BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO
 * WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
 * EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR
 * OTHER PARTIES PROVIDE THE LIBRARY "AS IS" WITHOUT WARRANTY OF ANY
 * KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE
 * LIBRARY IS WITH YOU.  SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME
 * THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 *
 *   16. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN
 * WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY
 * AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE LIABLE TO YOU
 * FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR
 * CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE
 * LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING
 * RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A
 * FAILURE OF THE LIBRARY TO OPERATE WITH ANY OTHER SOFTWARE), EVEN IF
 * SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGES.
 *
 *                      END OF TERMS AND CONDITIONS
 *
 *            How to Apply These Terms to Your New Libraries
 *
 *   If you develop a new library, and you want it to be of the greatest
 * possible use to the public, we recommend making it free software that
 * everyone can redistribute and change.  You can do so by permitting
 * redistribution under these terms (or, alternatively, under the terms of the
 * ordinary General Public License).
 *
 *   To apply these terms, attach the following notices to the library.  It is
 * safest to attach them to the start of each source file to most effectively
 * convey the exclusion of warranty; and each file should have at least the
 * "copyright" line and a pointer to where the full notice is found.
 *
 *     <one line to give the library's name and a brief idea of what it does.>
 *     Copyright (C) <year>  <name of author>
 *
 *     This library is free software; you can redistribute it and/or
 *     modify it under the terms of the GNU Lesser General Public
 *     License as published by the Free Software Foundation; either
 *     version 2.1 of the License, or (at your option) any later version.
 *
 *     This library is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *     Lesser General Public License for more details.
 *
 *     You should have received a copy of the GNU Lesser General Public
 *     License along with this library; if not, write to the Free Software
 *     Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *
 * Also add information on how to contact you by electronic and paper mail.
 *
 * You should also get your employer (if you work as a programmer) or your
 * school, if any, to sign a "copyright disclaimer" for the library, if
 * necessary.  Here is a sample; alter the names:
 *
 *   Yoyodyne, Inc., hereby disclaims all copyright interest in the
 *   library `Frob' (a library for tweaking knobs) written by James Random Hacker.
 *
 *   <signature of Ty Coon>, 1 April 1990
 *   Ty Coon, President of Vice
 *
 * That's all there is to it!
 *
 *
 * ---
 *
 * ffmpeg-faandct:
 *
 * Copyright (c) 2003 Michael Niedermayer <michaelni@gmx.at>
 * Copyright (c) 2003 Roman Shaposhnik
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 *
 * ---
 *
 * ffmepg (JPEG components):
 *
 * The authors make NO WARRANTY or representation, either express or implied,
 * with respect to this software, its quality, accuracy, merchantability, or
 * fitness for a particular purpose.  This software is provided "AS IS", and
 * you, its user, assume the entire risk as to its quality and accuracy.
 *
 * This software is copyright (C) 1991, 1992, Thomas G. Lane.
 * All Rights Reserved except as specified below.
 *
 * Permission is hereby granted to use, copy, modify, and distribute this
 * software (or portions thereof) for any purpose, without fee, subject to
 * these conditions:
 * (1) If any part of the source code for this software is distributed, then
 * this README file must be included, with this copyright and no-warranty
 * notice unaltered; and any additions, deletions, or changes to the original
 * files must be clearly indicated in accompanying documentation.
 * (2) If only executable code is distributed, then the accompanying
 * documentation must state that "this software is based in part on the work
 * of the Independent JPEG Group".
 * (3) Permission for use of this software is granted only if the user accepts
 * full responsibility for any undesirable consequences; the authors accept
 * NO LIABILITY for damages of any kind.
 *
 * These conditions apply to any software derived from or based on the IJG
 * code, not just to the unmodified library.  If you use our work, you ought
 * to acknowledge us.
 *
 * Permission is NOT granted for the use of any IJG author's name or company
 * name in advertising or publicity relating to this software or products
 * derived from it.  This software may be referred to only as "the Independent
 * JPEG Group's software".
 *
 * We specifically permit and encourage the use of this software as the basis
 * of commercial products, provided that all warranty or liability claims are
 * assumed by the product vendor.
 *
 *
 * ---
 *
 * ffmpeg-avsscanf:
 *
 * Copyright (c) 2005-2014 Rich Felker, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * ---
 *
 * ffmpeg oggdec:
 *
 *     Copyright (C) 2005  Michael Ahlberg, Måns Rullgård
 *     Copyright (C) 2005  Matthieu CASTET, Alex Beregszaszi
 *     Copyright (C) 2008  Reimar Döffinger
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a
 *     copy of this software and associated documentation files (the
 *     "Software"), to deal in the Software without restriction, including
 *     without limitation the rights to use, copy, modify, merge, publish,
 *     distribute, sublicense, and/or sell copies of the Software, and to
 *     permit persons to whom the Software is furnished to do so, subject to
 *     the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included
 *     in all copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 *     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *     IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 *     CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *     TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *     SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * ---
 *
 * opus:
 *
 * Copyright 2001-2011 Xiph.Org, Skype Limited, Octasic,
 *                     Jean-Marc Valin, Timothy B. Terriberry,
 *                     CSIRO, Gregory Maxwell, Mark Borgerding,
 *                     Erik de Castro Lopo
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * - Neither the name of Internet Society, IETF or IETF Trust, nor the names of
 *   specific contributors, may be used to endorse or promote products derived
 *   from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS
 * IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * Opus is subject to the royalty-free patent licenses which are specified at:
 * 
 * Xiph.Org Foundation:
 * https://datatracker.ietf.org/ipr/1524/
 * 
 * Microsoft Corporation:
 * https://datatracker.ietf.org/ipr/1914/
 * 
 * Broadcom Corporation:
 * https://datatracker.ietf.org/ipr/1526/
 *
 *
 * ---
 *
 * emscripten and musl:
 *
 * Copyright (c) 2010-2023 Emscripten authors, see AUTHORS file.
 * Copyright © 2005-2023 Rich Felker, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

var LibAVFactory = (() => {
  var _scriptName = import.meta.url;
  
  return (
async function(moduleArg = {}) {
  var moduleRtn;

// Support for growable heap + pthreads, where the buffer may change, so JS views
// must be updated.
function GROWABLE_HEAP_I8() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAP8;
}
function GROWABLE_HEAP_U8() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPU8;
}
function GROWABLE_HEAP_I16() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAP16;
}
function GROWABLE_HEAP_U16() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPU16;
}
function GROWABLE_HEAP_I32() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAP32;
}
function GROWABLE_HEAP_U32() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPU32;
}
function GROWABLE_HEAP_F32() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPF32;
}
function GROWABLE_HEAP_F64() {
  if (wasmMemory.buffer != HEAP8.buffer) {
    updateMemoryViews();
  }
  return HEAPF64;
}


// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = moduleArg;

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;

var readyPromise = new Promise((resolve, reject) => {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).
// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";

// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -sPROXY_TO_WORKER) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)
// The way we signal to a worker that it is hosting a pthread is to construct
// it with a specific name.
var ENVIRONMENT_IS_PTHREAD = ENVIRONMENT_IS_WORKER && self.name == "em-pthread";

if (ENVIRONMENT_IS_NODE) {
  // `require()` is no-op in an ESM module, use `createRequire()` to construct
  // the require()` function.  This is only necessary for multi-environment
  // builds, `-sENVIRONMENT=node` emits a static import declaration instead.
  // TODO: Swap all `require()`'s with `import()`'s?
  const {createRequire} = await import("module");
  let dirname = import.meta.url;
  if (dirname.startsWith("data:")) {
    dirname = "/";
  }
  /** @suppress{duplicate} */ var require = createRequire(dirname);
  var worker_threads = require("worker_threads");
  global.Worker = worker_threads.Worker;
  ENVIRONMENT_IS_WORKER = !worker_threads.isMainThread;
  // Under node we set `workerData` to `em-pthread` to signal that the worker
  // is hosting a pthread.
  ENVIRONMENT_IS_PTHREAD = ENVIRONMENT_IS_WORKER && worker_threads["workerData"] == "em-pthread";
}

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)

/*
 * Copyright (C) 2019-2024 Yahweasel and contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */ // Import LibAV.base if applicable
if (typeof _scriptName === "undefined") {
  if (typeof LibAV === "object" && LibAV && LibAV.base) _scriptName = LibAV.base + "/libav-6.0.7.0.2-webcodecs.dbg.thr.mjs"; else if (typeof self === "object" && self && self.location) _scriptName = self.location.href;
}

Module.locateFile = function(path, prefix) {
  // if it's the wasm file
  if (path.lastIndexOf(".wasm") === path.length - 5 && path.indexOf("libav-") !== -1) {
    // Look for overrides
    if (Module.wasmurl) return Module.wasmurl;
    if (Module.variant) return prefix + "libav-6.0.7.0.2-" + Module.variant + ".dbg.thr.wasm";
  }
  // Otherwise, use the default
  return prefix + path;
};


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
  throw toThrow;
};

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = "";

function locateFile(path) {
  if (Module["locateFile"]) {
    return Module["locateFile"](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {
  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require("fs");
  var nodePath = require("path");
  // EXPORT_ES6 + ENVIRONMENT_IS_NODE always requires use of import.meta.url,
  // since there's no way getting the current absolute path of the module when
  // support for that is not available.
  if (!import.meta.url.startsWith("data:")) {
    scriptDirectory = nodePath.dirname(require("url").fileURLToPath(import.meta.url)) + "/";
  }
  // include: node_shell_read.js
  readBinary = filename => {
    // We need to re-wrap `file://` strings to URLs. Normalizing isn't
    // necessary in that case, the path should already be absolute.
    filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
    var ret = fs.readFileSync(filename);
    return ret;
  };
  readAsync = (filename, binary = true) => {
    // See the comment in the `readBinary` function.
    filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
    return new Promise((resolve, reject) => {
      fs.readFile(filename, binary ? undefined : "utf8", (err, data) => {
        if (err) reject(err); else resolve(binary ? data.buffer : data);
      });
    });
  };
  // end include: node_shell_read.js
  if (!Module["thisProgram"] && process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, "/");
  }
  arguments_ = process.argv.slice(2);
  // MODULARIZE will export the module in the proper place outside, we don't need to export here
  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };
} else // Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) {
    // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != "undefined" && document.currentScript) {
    // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptName) {
    scriptDirectory = _scriptName;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.startsWith("blob:")) {
    scriptDirectory = "";
  } else {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
  }
  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  if (!ENVIRONMENT_IS_NODE) {
    // include: web_or_worker_shell_read.js
    if (ENVIRONMENT_IS_WORKER) {
      readBinary = url => {
        var xhr = new XMLHttpRequest;
        xhr.open("GET", url, false);
        xhr.responseType = "arraybuffer";
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response));
      };
    }
    readAsync = url => {
      // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
      // See https://github.com/github/fetch/pull/92#issuecomment-140665932
      // Cordova or Electron apps are typically loaded from a file:// url.
      // So use XHR on webview if URL is a file URL.
      if (isFileURI(url)) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest;
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = () => {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              // file URLs can return 0
              resolve(xhr.response);
              return;
            }
            reject(xhr.status);
          };
          xhr.onerror = reject;
          xhr.send(null);
        });
      }
      return fetch(url, {
        credentials: "same-origin"
      }).then(response => {
        if (response.ok) {
          return response.arrayBuffer();
        }
        return Promise.reject(new Error(response.status + " : " + response.url));
      });
    };
  }
} else // end include: web_or_worker_shell_read.js
{}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
// Normally just binding console.log/console.error here works fine, but
// under node (with workers) we see missing/out-of-order messages so route
// directly to stdout and stderr.
// See https://github.com/emscripten-core/emscripten/issues/14804
var defaultPrint = console.log.bind(console);

var defaultPrintErr = console.error.bind(console);

if (ENVIRONMENT_IS_NODE) {
  defaultPrint = (...args) => fs.writeSync(1, args.join(" ") + "\n");
  defaultPrintErr = (...args) => fs.writeSync(2, args.join(" ") + "\n");
}

var out = Module["print"] || defaultPrint;

var err = Module["printErr"] || defaultPrintErr;

// Merge back in the overrides
Object.assign(Module, moduleOverrides);

// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module["arguments"]) arguments_ = Module["arguments"];

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message


// === Preamble library stuff ===
// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html
var wasmBinary = Module["wasmBinary"];

// Wasm globals
var wasmMemory;

// For sending to workers.
var wasmModule;

//========================================
// Runtime essentials
//========================================
// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */ function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implementation here for now.
    abort(text);
  }
}

// Memory management
var HEAP, /** @type {!Int8Array} */ HEAP8, /** @type {!Uint8Array} */ HEAPU8, /** @type {!Int16Array} */ HEAP16, /** @type {!Uint16Array} */ HEAPU16, /** @type {!Int32Array} */ HEAP32, /** @type {!Uint32Array} */ HEAPU32, /** @type {!Float32Array} */ HEAPF32, /** @type {!Float64Array} */ HEAPF64;


function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module["HEAP8"] = HEAP8 = new Int8Array(b);
  Module["HEAP16"] = HEAP16 = new Int16Array(b);
  Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
  Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
  Module["HEAP32"] = HEAP32 = new Int32Array(b);
  Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
  Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
  Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
}



// Pthread Web Worker handling code.
// This code runs only on pthread web workers and handles pthread setup
// and communication with the main thread via postMessage.
if (ENVIRONMENT_IS_PTHREAD) {
  var wasmPromiseResolve;
  var wasmPromiseReject;
  var receivedWasmModule;
  // Node.js support
  if (ENVIRONMENT_IS_NODE) {
    // Create as web-worker-like an environment as we can.
    var parentPort = worker_threads["parentPort"];
    parentPort.on("message", data => onmessage({
      data
    }));
    Object.assign(globalThis, {
      self: global,
      // Dummy importScripts.  The presence of this global is used
      // to detect that we are running on a Worker.
      // TODO(sbc): Find another way?
      importScripts: () => {},
      postMessage: msg => parentPort.postMessage(msg)
    });
  }
  // Thread-local guard variable for one-time init of the JS state
  var initializedJS = false;
  function threadPrintErr(...args) {
    var text = args.join(" ");
    // See https://github.com/emscripten-core/emscripten/issues/14804
    if (ENVIRONMENT_IS_NODE) {
      fs.writeSync(2, text + "\n");
      return;
    }
    console.error(text);
  }
  if (!Module["printErr"]) err = threadPrintErr;
  function threadAlert(...args) {
    var text = args.join(" ");
    postMessage({
      cmd: "alert",
      text,
      threadId: _pthread_self()
    });
  }
  self.alert = threadAlert;
  Module["instantiateWasm"] = (info, receiveInstance) => new Promise((resolve, reject) => {
    wasmPromiseResolve = module => {
      // Instantiate from the module posted from the main thread.
      // We can just use sync instantiation in the worker.
      var instance = new WebAssembly.Instance(module, getWasmImports());
      // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193,
      // the above line no longer optimizes out down to the following line.
      // When the regression is fixed, we can remove this if/else.
      receiveInstance(instance);
      resolve();
    };
    wasmPromiseReject = reject;
  });
  // Turn unhandled rejected promises into errors so that the main thread will be
  // notified about them.
  self.onunhandledrejection = e => {
    throw e.reason || e;
  };
  function handleMessage(e) {
    try {
      var msgData = e["data"];
      //dbg('msgData: ' + Object.keys(msgData));
      var cmd = msgData.cmd;
      if (cmd === "load") {
        // Preload command that is called once per worker to parse and load the Emscripten code.
        // Until we initialize the runtime, queue up any further incoming messages.
        let messageQueue = [];
        self.onmessage = e => messageQueue.push(e);
        // And add a callback for when the runtime is initialized.
        self.startWorker = instance => {
          // Notify the main thread that this thread has loaded.
          postMessage({
            cmd: "loaded"
          });
          // Process any messages that were queued before the thread was ready.
          for (let msg of messageQueue) {
            handleMessage(msg);
          }
          // Restore the real message handler.
          self.onmessage = handleMessage;
        };
        // Use `const` here to ensure that the variable is scoped only to
        // that iteration, allowing safe reference from a closure.
        for (const handler of msgData.handlers) {
          // The the main module has a handler for a certain even, but no
          // handler exists on the pthread worker, then proxy that handler
          // back to the main thread.
          if (!Module[handler] || Module[handler].proxy) {
            Module[handler] = (...args) => {
              postMessage({
                cmd: "callHandler",
                handler,
                args
              });
            };
            // Rebind the out / err handlers if needed
            if (handler == "print") out = Module[handler];
            if (handler == "printErr") err = Module[handler];
          }
        }
        wasmMemory = msgData.wasmMemory;
        updateMemoryViews();
        wasmPromiseResolve(msgData.wasmModule);
      } else if (cmd === "run") {
        // Call inside JS module to set up the stack frame for this pthread in JS module scope.
        // This needs to be the first thing that we do, as we cannot call to any C/C++ functions
        // until the thread stack is initialized.
        establishStackSpace(msgData.pthread_ptr);
        // Pass the thread address to wasm to store it for fast access.
        __emscripten_thread_init(msgData.pthread_ptr, /*is_main=*/ 0, /*is_runtime=*/ 0, /*can_block=*/ 1, 0, 0);
        PThread.receiveObjectTransfer(msgData);
        PThread.threadInitTLS();
        // Await mailbox notifications with `Atomics.waitAsync` so we can start
        // using the fast `Atomics.notify` notification path.
        __emscripten_thread_mailbox_await(msgData.pthread_ptr);
        if (!initializedJS) {
          initializedJS = true;
        }
        try {
          invokeEntryPoint(msgData.start_routine, msgData.arg);
        } catch (ex) {
          if (ex != "unwind") {
            // The pthread "crashed".  Do not call `_emscripten_thread_exit` (which
            // would make this thread joinable).  Instead, re-throw the exception
            // and let the top level handler propagate it back to the main thread.
            throw ex;
          }
        }
      } else if (msgData.target === "setimmediate") {} else // no-op
      if (cmd === "checkMailbox") {
        if (initializedJS) {
          checkMailbox();
        }
      } else if (cmd) {
        // The received message looks like something that should be handled by this message
        // handler, (since there is a cmd field present), but is not one of the
        // recognized commands:
        err(`worker: received unknown command ${cmd}`);
        err(msgData);
      }
    } catch (ex) {
      __emscripten_thread_crashed();
      throw ex;
    }
  }
  self.onmessage = handleMessage;
}

// ENVIRONMENT_IS_PTHREAD

// In non-standalone/normal mode, we create the memory here.

// Create the wasm memory. (Note: this only applies if IMPORTED_MEMORY is defined)
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
if (!ENVIRONMENT_IS_PTHREAD) {
  if (Module["wasmMemory"]) {
    wasmMemory = Module["wasmMemory"];
  } else {
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 25165824;
    wasmMemory = new WebAssembly.Memory({
      "initial": INITIAL_MEMORY / 65536,
      // In theory we should not need to emit the maximum if we want "unlimited"
      // or 4GB of memory, but VMs error on that atm, see
      // https://github.com/emscripten-core/emscripten/issues/14130
      // And in the pthreads case we definitely need to emit a maximum. So
      // always emit one.
      "maximum": 32768,
      "shared": true
    });
    if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
      err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
      if (ENVIRONMENT_IS_NODE) {
        err("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)");
      }
      throw Error("bad memory");
    }
  }
  updateMemoryViews();
}




var __ATPRERUN__ = [];

// functions called before the runtime is initialized
var __ATINIT__ = [];

// functions called during startup
var __ATEXIT__ = [];

// functions called during shutdown
var __ATPOSTRUN__ = [];

// functions called after the main() is called
var runtimeInitialized = false;

function preRun() {
  if (Module["preRun"]) {
    if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
    while (Module["preRun"].length) {
      addOnPreRun(Module["preRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  if (ENVIRONMENT_IS_PTHREAD) return;
  if (!Module["noFSInit"] && !FS.initialized) FS.init();
  FS.ignorePermissions = false;
  TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
  if (ENVIRONMENT_IS_PTHREAD) return;
  // PThreads reuse the runtime from the main thread.
  if (Module["postRun"]) {
    if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
    while (Module["postRun"].length) {
      addOnPostRun(Module["postRun"].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

// overridden to take different actions when all run dependencies are fulfilled
function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  Module["monitorRunDependencies"]?.(runDependencies);
}

function removeRunDependency(id) {
  runDependencies--;
  Module["monitorRunDependencies"]?.(runDependencies);
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback();
    }
  }
}

/** @param {string|number=} what */ function abort(what) {
  Module["onAbort"]?.(what);
  what = "Aborted(" + what + ")";
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);
  ABORT = true;
  what += ". Build with -sASSERTIONS for more info.";
  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.
  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */ var e = new WebAssembly.RuntimeError(what);
  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}




// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = "data:application/octet-stream;base64,";

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */ var isDataURI = filename => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */ var isFileURI = filename => filename.startsWith("file://");




function findWasmBinary() {
  if (Module["locateFile"]) {
    var f = "libav-6.0.7.0.2-webcodecs.dbg.thr.wasm";
    if (!isDataURI(f)) {
      return locateFile(f);
    }
    return f;
  }
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  return new URL("libav-6.0.7.0.2-webcodecs.dbg.thr.wasm", import.meta.url).href;
}

var wasmBinaryFile;

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    return readAsync(binaryFile).then(response => new Uint8Array(/** @type{!ArrayBuffer} */ (response)), // Fall back to getBinarySync if readAsync fails
    () => getBinarySync(binaryFile));
  }
  // Otherwise, getBinarySync should be able to get it synchronously
  return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then(binary => WebAssembly.instantiate(binary, imports)).then(receiver, reason => {
    err(`failed to asynchronously prepare wasm: ${reason}`);
    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
  !isFileURI(binaryFile) && // Avoid instantiateStreaming() on Node.js environment for now, as while
  // Node.js v18.1.0 implements it, it does not have a full fetch()
  // implementation yet.
  // Reference:
  //   https://github.com/emscripten-core/emscripten/pull/16917
  !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
    return fetch(binaryFile, {
      credentials: "same-origin"
    }).then(response => {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */ var result = WebAssembly.instantiateStreaming(response, imports);
      return result.then(callback, function(reason) {
        // We expect the most common failure cause to be a bad MIME type for the binary,
        // in which case falling back to ArrayBuffer instantiation should work.
        err(`wasm streaming compile failed: ${reason}`);
        err("falling back to ArrayBuffer instantiation");
        return instantiateArrayBuffer(binaryFile, imports, callback);
      });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}

function getWasmImports() {
  assignWasmImports();
  // prepare imports
  return {
    "env": wasmImports,
    "wasi_snapshot_preview1": wasmImports
  };
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  var info = getWasmImports();
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/ function receiveInstance(instance, module) {
    wasmExports = instance.exports;
    wasmExports = Asyncify.instrumentWasmExports(wasmExports);
    registerTLSInit(wasmExports["_emscripten_tls_init"]);
    addOnInit(wasmExports["__wasm_call_ctors"]);
    // We now have the Wasm module loaded up, keep a reference to the compiled module so we can post it to the workers.
    wasmModule = module;
    removeRunDependency("wasm-instantiate");
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency("wasm-instantiate");
  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    receiveInstance(result["instance"], result["module"]);
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module["instantiateWasm"]) {
    try {
      return Module["instantiateWasm"](info, receiveInstance);
    } catch (e) {
      err(`Module.instantiateWasm callback failed with error: ${e}`);
      // If instantiation fails, reject the module ready promise.
      readyPromiseReject(e);
    }
  }
  wasmBinaryFile ??= findWasmBinary();
  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {};
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;

var tempI64;



// === Body ===
function libavjs_main_thread(ignore) {
  noExitRuntime = Module.noExitRuntime = true;
  var origOnmessage = onmessage;
  onmessage = function(ev) {
    var a;
    function reply(succ, ret) {
      var transfer = [];
      if (typeof ret === "object" && ret && ret.libavjsTransfer) transfer = ret.libavjsTransfer;
      postMessage({
        c: "libavjs_ret",
        a: [ a[0], a[1], succ, ret ]
      }, transfer);
    }
    if (ev.data && ev.data.c === "libavjs_run") {
      a = ev.data.a;
      var succ = true;
      var ret;
      try {
        ret = Module[a[1]].apply(Module, a.slice(2));
      } catch (ex) {
        succ = false;
        ret = ex + "\n" + ex.stack;
      }
      if (succ && ret && ret.then) {
        ret.then(function(ret) {
          reply(true, ret);
        }).catch(function(ret) {
          reply(false, ret + "\n" + ret.stack);
        });
      } else {
        reply(succ, ret);
      }
    } else if (ev.data && ev.data.c === "libavjs_wait_reader") {
      var name = "" + ev.data.fd;
      var waiters = Module.ff_reader_dev_waiters[name] || [];
      delete Module.ff_reader_dev_waiters[name];
      for (var i = 0; i < waiters.length; i++) waiters[i]();
    } else {
      return origOnmessage.apply(this, arguments);
    }
  };
  postMessage({
    c: "libavjs_ready"
  });
}

function libavjs_wait_reader(fd) {
  return Asyncify.handleAsync(function() {
    return new Promise(function(res) {
      var name = "" + fd;
      var waiters = Module.ff_reader_dev_waiters[name];
      if (!waiters) waiters = Module.ff_reader_dev_waiters[name] = [];
      waiters.push(res);
      postMessage({
        c: "libavjs_wait_reader",
        fd
      });
    });
  });
}


/** @constructor */ function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = `Program terminated with exit(${status})`;
  this.status = status;
}

var terminateWorker = worker => {
  worker.terminate();
  // terminate() can be asynchronous, so in theory the worker can continue
  // to run for some amount of time after termination.  However from our POV
  // the worker now dead and we don't want to hear from it again, so we stub
  // out its message handler here.  This avoids having to check in each of
  // the onmessage handlers if the message was coming from valid worker.
  worker.onmessage = e => {};
};

var cleanupThread = pthread_ptr => {
  var worker = PThread.pthreads[pthread_ptr];
  PThread.returnWorkerToPool(worker);
};

var spawnThread = threadParams => {
  var worker = PThread.getNewWorker();
  if (!worker) {
    // No available workers in the PThread pool.
    return 6;
  }
  PThread.runningWorkers.push(worker);
  // Add to pthreads map
  PThread.pthreads[threadParams.pthread_ptr] = worker;
  worker.pthread_ptr = threadParams.pthread_ptr;
  var msg = {
    cmd: "run",
    start_routine: threadParams.startRoutine,
    arg: threadParams.arg,
    pthread_ptr: threadParams.pthread_ptr
  };
  if (ENVIRONMENT_IS_NODE) {
    // Mark worker as weakly referenced once we start executing a pthread,
    // so that its existence does not prevent Node.js from exiting.  This
    // has no effect if the worker is already weakly referenced (e.g. if
    // this worker was previously idle/unused).
    worker.unref();
  }
  // Ask the worker to start executing its pthread entry point function.
  worker.postMessage(msg, threadParams.transferList);
  return 0;
};

var runtimeKeepaliveCounter = 0;

var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;

var stackSave = () => _emscripten_stack_get_current();

var stackRestore = val => __emscripten_stack_restore(val);

var stackAlloc = sz => __emscripten_stack_alloc(sz);

var convertI32PairToI53Checked = (lo, hi) => ((hi + 2097152) >>> 0 < 4194305 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;

/** @type{function(number, (number|boolean), ...number)} */ var proxyToMainThread = (funcIndex, emAsmAddr, sync, ...callArgs) => {
  // EM_ASM proxying is done by passing a pointer to the address of the EM_ASM
  // content as `emAsmAddr`.  JS library proxying is done by passing an index
  // into `proxiedJSCallArgs` as `funcIndex`. If `emAsmAddr` is non-zero then
  // `funcIndex` will be ignored.
  // Additional arguments are passed after the first three are the actual
  // function arguments.
  // The serialization buffer contains the number of call params, and then
  // all the args here.
  // We also pass 'sync' to C separately, since C needs to look at it.
  // Allocate a buffer, which will be copied by the C code.
  // First passed parameter specifies the number of arguments to the function.
  // When BigInt support is enabled, we must handle types in a more complex
  // way, detecting at runtime if a value is a BigInt or not (as we have no
  // type info here). To do that, add a "prefix" before each value that
  // indicates if it is a BigInt, which effectively doubles the number of
  // values we serialize for proxying. TODO: pack this?
  var serializedNumCallArgs = callArgs.length;
  var sp = stackSave();
  var args = stackAlloc(serializedNumCallArgs * 8);
  var b = ((args) >> 3);
  for (var i = 0; i < callArgs.length; i++) {
    var arg = callArgs[i];
    GROWABLE_HEAP_F64()[b + i] = arg;
  }
  var rtn = __emscripten_run_on_main_thread_js(funcIndex, emAsmAddr, serializedNumCallArgs, args, sync);
  stackRestore(sp);
  return rtn;
};

function _proc_exit(code) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(0, 0, 1, code);
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    PThread.terminateAllThreads();
    Module["onExit"]?.(code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

var handleException = e => {
  // Certain exception types we do not treat as errors since they are used for
  // internal control flow.
  // 1. ExitStatus, which is thrown by exit()
  // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
  //    that wish to return to JS event loop.
  if (e instanceof ExitStatus || e == "unwind") {
    return EXITSTATUS;
  }
  quit_(1, e);
};

function exitOnMainThread(returnCode) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(1, 0, 0, returnCode);
  _exit(returnCode);
}

/** @suppress {duplicate } */ /** @param {boolean|number=} implicit */ var exitJS = (status, implicit) => {
  EXITSTATUS = status;
  if (ENVIRONMENT_IS_PTHREAD) {
    // implicit exit can never happen on a pthread
    // When running in a pthread we propagate the exit back to the main thread
    // where it can decide if the whole process should be shut down or not.
    // The pthread may have decided not to exit its own runtime, for example
    // because it runs a main loop, but that doesn't affect the main thread.
    exitOnMainThread(status);
    throw "unwind";
  }
  _proc_exit(status);
};

var _exit = exitJS;

var PThread = {
  unusedWorkers: [],
  runningWorkers: [],
  tlsInitFunctions: [],
  pthreads: {},
  init() {
    if ((!(ENVIRONMENT_IS_PTHREAD))) {
      PThread.initMainThread();
    }
  },
  initMainThread() {
    var pthreadPoolSize = navigator.hardwareConcurrency;
    // Start loading up the Worker pool, if requested.
    while (pthreadPoolSize--) {
      PThread.allocateUnusedWorker();
    }
    // MINIMAL_RUNTIME takes care of calling loadWasmModuleToAllWorkers
    // in postamble_minimal.js
    addOnPreRun(() => {
      addRunDependency("loading-workers");
      PThread.loadWasmModuleToAllWorkers(() => removeRunDependency("loading-workers"));
    });
  },
  terminateAllThreads: () => {
    // Attempt to kill all workers.  Sadly (at least on the web) there is no
    // way to terminate a worker synchronously, or to be notified when a
    // worker in actually terminated.  This means there is some risk that
    // pthreads will continue to be executing after `worker.terminate` has
    // returned.  For this reason, we don't call `returnWorkerToPool` here or
    // free the underlying pthread data structures.
    for (var worker of PThread.runningWorkers) {
      terminateWorker(worker);
    }
    for (var worker of PThread.unusedWorkers) {
      terminateWorker(worker);
    }
    PThread.unusedWorkers = [];
    PThread.runningWorkers = [];
    PThread.pthreads = [];
  },
  returnWorkerToPool: worker => {
    // We don't want to run main thread queued calls here, since we are doing
    // some operations that leave the worker queue in an invalid state until
    // we are completely done (it would be bad if free() ends up calling a
    // queued pthread_create which looks at the global data structures we are
    // modifying). To achieve that, defer the free() til the very end, when
    // we are all done.
    var pthread_ptr = worker.pthread_ptr;
    delete PThread.pthreads[pthread_ptr];
    // Note: worker is intentionally not terminated so the pool can
    // dynamically grow.
    PThread.unusedWorkers.push(worker);
    PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
    // Not a running Worker anymore
    // Detach the worker from the pthread object, and return it to the
    // worker pool as an unused worker.
    worker.pthread_ptr = 0;
    // Finally, free the underlying (and now-unused) pthread structure in
    // linear memory.
    __emscripten_thread_free_data(pthread_ptr);
  },
  receiveObjectTransfer(data) {},
  threadInitTLS() {
    // Call thread init functions (these are the _emscripten_tls_init for each
    // module loaded.
    PThread.tlsInitFunctions.forEach(f => f());
  },
  loadWasmModuleToWorker: worker => new Promise(onFinishedLoading => {
    worker.onmessage = e => {
      var d = e["data"];
      var cmd = d.cmd;
      // If this message is intended to a recipient that is not the main
      // thread, forward it to the target thread.
      if (d.targetThread && d.targetThread != _pthread_self()) {
        var targetWorker = PThread.pthreads[d.targetThread];
        if (targetWorker) {
          targetWorker.postMessage(d, d.transferList);
        } else {
          err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d.targetThread}, but that thread no longer exists!`);
        }
        return;
      }
      if (cmd === "checkMailbox") {
        checkMailbox();
      } else if (cmd === "spawnThread") {
        spawnThread(d);
      } else if (cmd === "cleanupThread") {
        cleanupThread(d.thread);
      } else if (cmd === "loaded") {
        worker.loaded = true;
        // Check that this worker doesn't have an associated pthread.
        if (ENVIRONMENT_IS_NODE && !worker.pthread_ptr) {
          // Once worker is loaded & idle, mark it as weakly referenced,
          // so that mere existence of a Worker in the pool does not prevent
          // Node.js from exiting the app.
          worker.unref();
        }
        onFinishedLoading(worker);
      } else if (cmd === "alert") {
        alert(`Thread ${d.threadId}: ${d.text}`);
      } else if (d.target === "setimmediate") {
        // Worker wants to postMessage() to itself to implement setImmediate()
        // emulation.
        worker.postMessage(d);
      } else if (cmd === "callHandler") {
        Module[d.handler](...d.args);
      } else if (cmd) {
        // The received message looks like something that should be handled by this message
        // handler, (since there is a e.data.cmd field present), but is not one of the
        // recognized commands:
        err(`worker sent an unknown command ${cmd}`);
      }
    };
    worker.onerror = e => {
      var message = "worker sent an error!";
      err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);
      throw e;
    };
    if (ENVIRONMENT_IS_NODE) {
      worker.on("message", data => worker.onmessage({
        data
      }));
      worker.on("error", e => worker.onerror(e));
    }
    // When running on a pthread, none of the incoming parameters on the module
    // object are present. Proxy known handlers back to the main thread if specified.
    var handlers = [];
    var knownHandlers = [ "onExit", "onAbort", "print", "printErr" ];
    for (var handler of knownHandlers) {
      if (Module.propertyIsEnumerable(handler)) {
        handlers.push(handler);
      }
    }
    // Ask the new worker to load up the Emscripten-compiled page. This is a heavy operation.
    worker.postMessage({
      cmd: "load",
      handlers,
      wasmMemory,
      wasmModule
    });
  }),
  loadWasmModuleToAllWorkers(onMaybeReady) {
    // Instantiation is synchronous in pthreads.
    if (ENVIRONMENT_IS_PTHREAD) {
      return onMaybeReady();
    }
    let pthreadPoolReady = Promise.all(PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker));
    pthreadPoolReady.then(onMaybeReady);
  },
  allocateUnusedWorker() {
    var worker;
    var workerOptions = {
      "type": "module",
      // This is the way that we signal to the node worker that it is hosting
      // a pthread.
      "workerData": "em-pthread",
      // This is the way that we signal to the Web Worker that it is hosting
      // a pthread.
      "name": "em-pthread"
    };
    // If we're using module output, use bundler-friendly pattern.
    // We need to generate the URL with import.meta.url as the base URL of the JS file
    // instead of just using new URL(import.meta.url) because bundler's only recognize
    // the first case in their bundling step. The latter ends up producing an invalid
    // URL to import from the server (e.g., for webpack the file:// path).
    worker = new Worker(new URL("libav-6.0.7.0.2-webcodecs.dbg.thr.mjs", import.meta.url), workerOptions);
    PThread.unusedWorkers.push(worker);
  },
  getNewWorker() {
    if (PThread.unusedWorkers.length == 0) {
      // PTHREAD_POOL_SIZE_STRICT should show a warning and, if set to level `2`, return from the function.
      PThread.allocateUnusedWorker();
      PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
    }
    return PThread.unusedWorkers.pop();
  }
};

var callRuntimeCallbacks = callbacks => {
  while (callbacks.length > 0) {
    // Pass the module as the first argument.
    callbacks.shift()(Module);
  }
};

var establishStackSpace = pthread_ptr => {
  // If memory growth is enabled, the memory views may have gotten out of date,
  // so resync them before accessing the pthread ptr below.
  updateMemoryViews();
  var stackHigh = GROWABLE_HEAP_U32()[(((pthread_ptr) + (52)) >> 2)];
  var stackSize = GROWABLE_HEAP_U32()[(((pthread_ptr) + (56)) >> 2)];
  var stackLow = stackHigh - stackSize;
  // Set stack limits used by `emscripten/stack.h` function.  These limits are
  // cached in wasm-side globals to make checks as fast as possible.
  _emscripten_stack_set_limits(stackHigh, stackLow);
  // Call inside wasm module to set up the stack frame for this pthread in wasm module scope
  stackRestore(stackHigh);
};

/**
     * @param {number} ptr
     * @param {string} type
     */ function getValue(ptr, type = "i8") {
  if (type.endsWith("*")) type = "*";
  switch (type) {
   case "i1":
    return GROWABLE_HEAP_I8()[ptr];

   case "i8":
    return GROWABLE_HEAP_I8()[ptr];

   case "i16":
    return GROWABLE_HEAP_I16()[((ptr) >> 1)];

   case "i32":
    return GROWABLE_HEAP_I32()[((ptr) >> 2)];

   case "i64":
    abort("to do getValue(i64) use WASM_BIGINT");

   case "float":
    return GROWABLE_HEAP_F32()[((ptr) >> 2)];

   case "double":
    return GROWABLE_HEAP_F64()[((ptr) >> 3)];

   case "*":
    return GROWABLE_HEAP_U32()[((ptr) >> 2)];

   default:
    abort(`invalid type for getValue: ${type}`);
  }
}

var invokeEntryPoint = (ptr, arg) => {
  // An old thread on this worker may have been canceled without returning the
  // `runtimeKeepaliveCounter` to zero. Reset it now so the new thread won't
  // be affected.
  runtimeKeepaliveCounter = 0;
  // Same for noExitRuntime.  The default for pthreads should always be false
  // otherwise pthreads would never complete and attempts to pthread_join to
  // them would block forever.
  // pthreads can still choose to set `noExitRuntime` explicitly, or
  // call emscripten_unwind_to_js_event_loop to extend their lifetime beyond
  // their main function.  See comment in src/runtime_pthread.js for more.
  noExitRuntime = 0;
  // pthread entry points are always of signature 'void *ThreadMain(void *arg)'
  // Native codebases sometimes spawn threads with other thread entry point
  // signatures, such as void ThreadMain(void *arg), void *ThreadMain(), or
  // void ThreadMain().  That is not acceptable per C/C++ specification, but
  // x86 compiler ABI extensions enable that to work. If you find the
  // following line to crash, either change the signature to "proper" void
  // *ThreadMain(void *arg) form, or try linking with the Emscripten linker
  // flag -sEMULATE_FUNCTION_POINTER_CASTS to add in emulation for this x86
  // ABI extension.
  var result = (a1 => dynCall_ii(ptr, a1))(arg);
  function finish(result) {
    if (keepRuntimeAlive()) {
      EXITSTATUS = result;
    } else {
      __emscripten_thread_exit(result);
    }
  }
  finish(result);
};

var noExitRuntime = Module["noExitRuntime"] || true;

var registerTLSInit = tlsInitFunc => PThread.tlsInitFunctions.push(tlsInitFunc);

/**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */ function setValue(ptr, value, type = "i8") {
  if (type.endsWith("*")) type = "*";
  switch (type) {
   case "i1":
    GROWABLE_HEAP_I8()[ptr] = value;
    break;

   case "i8":
    GROWABLE_HEAP_I8()[ptr] = value;
    break;

   case "i16":
    GROWABLE_HEAP_I16()[((ptr) >> 1)] = value;
    break;

   case "i32":
    GROWABLE_HEAP_I32()[((ptr) >> 2)] = value;
    break;

   case "i64":
    abort("to do setValue(i64) use WASM_BIGINT");

   case "float":
    GROWABLE_HEAP_F32()[((ptr) >> 2)] = value;
    break;

   case "double":
    GROWABLE_HEAP_F64()[((ptr) >> 3)] = value;
    break;

   case "*":
    GROWABLE_HEAP_U32()[((ptr) >> 2)] = value;
    break;

   default:
    abort(`invalid type for setValue: ${type}`);
  }
}

function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(2, 0, 1, pthread_ptr, attr, startRoutine, arg);
  return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
}

var ___pthread_create_js = (pthread_ptr, attr, startRoutine, arg) => {
  if (typeof SharedArrayBuffer == "undefined") {
    err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
    return 6;
  }
  // List of JS objects that will transfer ownership to the Worker hosting the thread
  var transferList = [];
  var error = 0;
  // Synchronously proxy the thread creation to main thread if possible. If we
  // need to transfer ownership of objects, then proxy asynchronously via
  // postMessage.
  if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
    return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
  }
  // If on the main thread, and accessing Canvas/OffscreenCanvas failed, abort
  // with the detected error.
  if (error) return error;
  var threadParams = {
    startRoutine,
    pthread_ptr,
    arg,
    transferList
  };
  if (ENVIRONMENT_IS_PTHREAD) {
    // The prepopulated pool of web workers that can host pthreads is stored
    // in the main JS thread. Therefore if a pthread is attempting to spawn a
    // new thread, the thread creation must be deferred to the main JS thread.
    threadParams.cmd = "spawnThread";
    postMessage(threadParams, transferList);
    // When we defer thread creation this way, we have no way to detect thread
    // creation synchronously today, so we have to assume success and return 0.
    return 0;
  }
  // We are the main thread, so we have the pthread warmup pool in this
  // thread and can fire off JS thread creation directly ourselves.
  return spawnThread(threadParams);
};

var PATH = {
  isAbs: path => path.charAt(0) === "/",
  splitPath: filename => {
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return splitPathRe.exec(filename).slice(1);
  },
  normalizeArray: (parts, allowAboveRoot) => {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
      for (;up; up--) {
        parts.unshift("..");
      }
    }
    return parts;
  },
  normalize: path => {
    var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
    // Normalize the path
    path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
    if (!path && !isAbsolute) {
      path = ".";
    }
    if (path && trailingSlash) {
      path += "/";
    }
    return (isAbsolute ? "/" : "") + path;
  },
  dirname: path => {
    var result = PATH.splitPath(path), root = result[0], dir = result[1];
    if (!root && !dir) {
      // No dirname whatsoever
      return ".";
    }
    if (dir) {
      // It has a dirname, strip trailing slash
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  },
  basename: path => {
    // EMSCRIPTEN return '/'' for '/', not an empty string
    if (path === "/") return "/";
    path = PATH.normalize(path);
    path = path.replace(/\/$/, "");
    var lastSlash = path.lastIndexOf("/");
    if (lastSlash === -1) return path;
    return path.substr(lastSlash + 1);
  },
  join: (...paths) => PATH.normalize(paths.join("/")),
  join2: (l, r) => PATH.normalize(l + "/" + r)
};

var initRandomFill = () => {
  if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
    // for modern web browsers
    // like with most Web APIs, we can't use Web Crypto API directly on shared memory,
    // so we need to create an intermediate buffer and copy it to the destination
    return view => (view.set(crypto.getRandomValues(new Uint8Array(view.byteLength))), 
    // Return the original view to match modern native implementations.
    view);
  } else if (ENVIRONMENT_IS_NODE) {
    // for nodejs with or without crypto support included
    try {
      var crypto_module = require("crypto");
      var randomFillSync = crypto_module["randomFillSync"];
      if (randomFillSync) {
        // nodejs with LTS crypto support
        return view => crypto_module["randomFillSync"](view);
      }
      // very old nodejs with the original crypto API
      var randomBytes = crypto_module["randomBytes"];
      return view => (view.set(randomBytes(view.byteLength)), // Return the original view to match modern native implementations.
      view);
    } catch (e) {}
  }
  // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
  abort("initRandomDevice");
};

var randomFill = view => (randomFill = initRandomFill())(view);

var PATH_FS = {
  resolve: (...args) => {
    var resolvedPath = "", resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = (i >= 0) ? args[i] : FS.cwd();
      // Skip empty and invalid entries
      if (typeof path != "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path) {
        return "";
      }
      // an invalid portion invalidates the whole thing
      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = PATH.isAbs(path);
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
    return ((resolvedAbsolute ? "/" : "") + resolvedPath) || ".";
  },
  relative: (from, to) => {
    from = PATH_FS.resolve(from).substr(1);
    to = PATH_FS.resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (;start < arr.length; start++) {
        if (arr[start] !== "") break;
      }
      var end = arr.length - 1;
      for (;end >= 0; end--) {
        if (arr[end] !== "") break;
      }
      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
  }
};

var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder : undefined;

/**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */ var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on
  // null terminator by itself.  Also, use the length info to avoid running tiny
  // strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation,
  // so that undefined means Infinity)
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.slice(idx, endPtr));
  }
  var str = "";
  // If building with TextDecoder, we have already computed the string length
  // above, so test loop end condition against that
  while (idx < endPtr) {
    // For UTF8 byte structure, see:
    // http://en.wikipedia.org/wiki/UTF-8#Description
    // https://www.ietf.org/rfc/rfc2279.txt
    // https://tools.ietf.org/html/rfc3629
    var u0 = heapOrArray[idx++];
    if (!(u0 & 128)) {
      str += String.fromCharCode(u0);
      continue;
    }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 224) == 192) {
      str += String.fromCharCode(((u0 & 31) << 6) | u1);
      continue;
    }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 240) == 224) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }
    if (u0 < 65536) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 65536;
      str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
    }
  }
  return str;
};

var FS_stdin_getChar_buffer = [];

var lengthBytesUTF8 = str => {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var c = str.charCodeAt(i);
    // possibly a lead surrogate
    if (c <= 127) {
      len++;
    } else if (c <= 2047) {
      len += 2;
    } else if (c >= 55296 && c <= 57343) {
      len += 4;
      ++i;
    } else {
      len += 3;
    }
  }
  return len;
};

var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
  // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
  // undefined and false each don't write out any bytes.
  if (!(maxBytesToWrite > 0)) return 0;
  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1;
  // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
    // and https://www.ietf.org/rfc/rfc2279.txt
    // and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i);
    // possibly a lead surrogate
    if (u >= 55296 && u <= 57343) {
      var u1 = str.charCodeAt(++i);
      u = 65536 + ((u & 1023) << 10) | (u1 & 1023);
    }
    if (u <= 127) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 2047) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 192 | (u >> 6);
      heap[outIdx++] = 128 | (u & 63);
    } else if (u <= 65535) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 224 | (u >> 12);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 240 | (u >> 18);
      heap[outIdx++] = 128 | ((u >> 12) & 63);
      heap[outIdx++] = 128 | ((u >> 6) & 63);
      heap[outIdx++] = 128 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
};

/** @type {function(string, boolean=, number=)} */ function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

var FS_stdin_getChar = () => {
  if (!FS_stdin_getChar_buffer.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
      // we will read data by chunks of BUFSIZE
      var BUFSIZE = 256;
      var buf = Buffer.alloc(BUFSIZE);
      var bytesRead = 0;
      // For some reason we must suppress a closure warning here, even though
      // fd definitely exists on process.stdin, and is even the proper way to
      // get the fd of stdin,
      // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
      // This started to happen after moving this logic out of library_tty.js,
      // so it is related to the surrounding code in some unclear manner.
      /** @suppress {missingProperties} */ var fd = process.stdin.fd;
      try {
        bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
      } catch (e) {
        // Cross-platform differences: on Windows, reading EOF throws an
        // exception, but on other OSes, reading EOF returns 0. Uniformize
        // behavior by treating the EOF exception to return 0.
        if (e.toString().includes("EOF")) bytesRead = 0; else throw e;
      }
      if (bytesRead > 0) {
        result = buf.slice(0, bytesRead).toString("utf-8");
      }
    } else if (typeof window != "undefined" && typeof window.prompt == "function") {
      // Browser.
      result = window.prompt("Input: ");
      // returns null on cancel
      if (result !== null) {
        result += "\n";
      }
    } else {}
    if (!result) {
      return null;
    }
    FS_stdin_getChar_buffer = intArrayFromString(result, true);
  }
  return FS_stdin_getChar_buffer.shift();
};

var TTY = {
  ttys: [],
  init() {},
  // https://github.com/emscripten-core/emscripten/pull/1555
  // if (ENVIRONMENT_IS_NODE) {
  //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
  //   // device, it always assumes it's a TTY device. because of this, we're forcing
  //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
  //   // with text files until FS.init can be refactored.
  //   process.stdin.setEncoding('utf8');
  // }
  shutdown() {},
  // https://github.com/emscripten-core/emscripten/pull/1555
  // if (ENVIRONMENT_IS_NODE) {
  //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
  //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
  //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
  //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
  //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
  //   process.stdin.pause();
  // }
  register(dev, ops) {
    TTY.ttys[dev] = {
      input: [],
      output: [],
      ops
    };
    FS.registerDevice(dev, TTY.stream_ops);
  },
  stream_ops: {
    open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    },
    close(stream) {
      // flush any pending line data
      stream.tty.ops.fsync(stream.tty);
    },
    fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    },
    read(stream, buffer, offset, length, pos) {
      /* ignored */ if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === undefined && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === undefined) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.timestamp = Date.now();
      }
      return bytesRead;
    },
    write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.timestamp = Date.now();
      }
      return i;
    }
  },
  default_tty_ops: {
    get_char(tty) {
      return FS_stdin_getChar();
    },
    put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    // val == 0 would cut text output off in the middle.
    fsync(tty) {
      if (tty.output && tty.output.length > 0) {
        out(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    },
    ioctl_tcgets(tty) {
      // typical setting
      return {
        c_iflag: 25856,
        c_oflag: 5,
        c_cflag: 191,
        c_lflag: 35387,
        c_cc: [ 3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      };
    },
    ioctl_tcsets(tty, optional_actions, data) {
      // currently just ignore
      return 0;
    },
    ioctl_tiocgwinsz(tty) {
      return [ 24, 80 ];
    }
  },
  default_tty1_ops: {
    put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    },
    fsync(tty) {
      if (tty.output && tty.output.length > 0) {
        err(UTF8ArrayToString(tty.output, 0));
        tty.output = [];
      }
    }
  }
};

var zeroMemory = (address, size) => {
  GROWABLE_HEAP_U8().fill(0, address, address + size);
  return address;
};

var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;

var mmapAlloc = size => {
  abort();
};

var MEMFS = {
  ops_table: null,
  mount(mount) {
    return MEMFS.createNode(null, "/", 16384 | 511, /* 0777 */ 0);
  },
  createNode(parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      // no supported
      throw new FS.ErrnoError(63);
    }
    MEMFS.ops_table ||= {
      dir: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          lookup: MEMFS.node_ops.lookup,
          mknod: MEMFS.node_ops.mknod,
          rename: MEMFS.node_ops.rename,
          unlink: MEMFS.node_ops.unlink,
          rmdir: MEMFS.node_ops.rmdir,
          readdir: MEMFS.node_ops.readdir,
          symlink: MEMFS.node_ops.symlink
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek
        }
      },
      file: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr
        },
        stream: {
          llseek: MEMFS.stream_ops.llseek,
          read: MEMFS.stream_ops.read,
          write: MEMFS.stream_ops.write,
          allocate: MEMFS.stream_ops.allocate,
          mmap: MEMFS.stream_ops.mmap,
          msync: MEMFS.stream_ops.msync
        }
      },
      link: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr,
          readlink: MEMFS.node_ops.readlink
        },
        stream: {}
      },
      chrdev: {
        node: {
          getattr: MEMFS.node_ops.getattr,
          setattr: MEMFS.node_ops.setattr
        },
        stream: FS.chrdev_stream_ops
      }
    };
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = MEMFS.ops_table.dir.node;
      node.stream_ops = MEMFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      node.node_ops = MEMFS.ops_table.file.node;
      node.stream_ops = MEMFS.ops_table.file.stream;
      node.usedBytes = 0;
      // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
      // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
      // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
      // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
      node.contents = null;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = MEMFS.ops_table.link.node;
      node.stream_ops = MEMFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = MEMFS.ops_table.chrdev.node;
      node.stream_ops = MEMFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    // add the new node to the parent
    if (parent) {
      parent.contents[name] = node;
      parent.timestamp = node.timestamp;
    }
    return node;
  },
  getFileDataAsTypedArray(node) {
    if (!node.contents) return new Uint8Array(0);
    if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
    // Make sure to not return excess unused bytes.
    return new Uint8Array(node.contents);
  },
  expandFileStorage(node, newCapacity) {
    var prevCapacity = node.contents ? node.contents.length : 0;
    if (prevCapacity >= newCapacity) return;
    // No need to expand, the storage was already large enough.
    // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
    // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
    // avoid overshooting the allocation cap by a very large margin.
    var CAPACITY_DOUBLING_MAX = 1024 * 1024;
    newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0);
    if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
    // At minimum allocate 256b for each file when expanding.
    var oldContents = node.contents;
    node.contents = new Uint8Array(newCapacity);
    // Allocate new storage.
    if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
  },
  // Copy old data over to the new storage.
  resizeFileStorage(node, newSize) {
    if (node.usedBytes == newSize) return;
    if (newSize == 0) {
      node.contents = null;
      // Fully decommit when requesting a resize to zero.
      node.usedBytes = 0;
    } else {
      var oldContents = node.contents;
      node.contents = new Uint8Array(newSize);
      // Allocate new storage.
      if (oldContents) {
        node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
      }
      // Copy old data over to the new storage.
      node.usedBytes = newSize;
    }
  },
  node_ops: {
    getattr(node) {
      var attr = {};
      // device numbers reuse inode numbers.
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
      //       but this is not required by the standard.
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr(node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
      if (attr.size !== undefined) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    },
    lookup(parent, name) {
      throw FS.genericErrors[44];
    },
    mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    },
    rename(old_node, new_dir, new_name) {
      // if we're overwriting a directory at new_name, make sure it's empty.
      if (FS.isDir(old_node.mode)) {
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        if (new_node) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
      }
      // do the internal rewiring
      delete old_node.parent.contents[old_node.name];
      old_node.parent.timestamp = Date.now();
      old_node.name = new_name;
      new_dir.contents[new_name] = old_node;
      new_dir.timestamp = old_node.parent.timestamp;
    },
    unlink(parent, name) {
      delete parent.contents[name];
      parent.timestamp = Date.now();
    },
    rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.timestamp = Date.now();
    },
    readdir(node) {
      var entries = [ ".", ".." ];
      for (var key of Object.keys(node.contents)) {
        entries.push(key);
      }
      return entries;
    },
    symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | /* 0777 */ 40960, 0);
      node.link = oldpath;
      return node;
    },
    readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    }
  },
  stream_ops: {
    read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        // non-trivial, and typed array
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
      }
      return size;
    },
    write(stream, buffer, offset, length, position, canOwn) {
      // If the buffer is located in main memory (HEAP), and if
      // memory can grow, we can't hold on to references of the
      // memory buffer, as they may get invalidated. That means we
      // need to do copy its contents.
      if (buffer.buffer === GROWABLE_HEAP_I8().buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        // This write is from a typed array to a typed array?
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          // Writing to an already allocated and used subrange of the file?
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        // Use typed array write which is available.
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    },
    llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    },
    allocate(stream, offset, length) {
      MEMFS.expandFileStorage(stream.node, offset + length);
      stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
    },
    mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      // Only make a new copy when MAP_PRIVATE is specified.
      if (!(flags & 2) && contents && contents.buffer === GROWABLE_HEAP_I8().buffer) {
        // We can't emulate MAP_SHARED when the file is not backed by the
        // buffer we're mapping to (e.g. the HEAP buffer).
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        if (contents) {
          // Try to avoid unnecessary slices.
          if (position > 0 || position + length < contents.length) {
            if (contents.subarray) {
              contents = contents.subarray(position, position + length);
            } else {
              contents = Array.prototype.slice.call(contents, position, position + length);
            }
          }
          GROWABLE_HEAP_I8().set(contents, ptr);
        }
      }
      return {
        ptr,
        allocated
      };
    },
    msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      // should we check if bytesWritten and length are the same?
      return 0;
    }
  }
};

/** @param {boolean=} noRunDep */ var asyncLoad = (url, onload, onerror, noRunDep) => {
  var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
  readAsync(url).then(arrayBuffer => {
    onload(new Uint8Array(arrayBuffer));
    if (dep) removeRunDependency(dep);
  }, err => {
    if (onerror) {
      onerror();
    } else {
      throw `Loading data file "${url}" failed.`;
    }
  });
  if (dep) addRunDependency(dep);
};

var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
  FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
};

var preloadPlugins = Module["preloadPlugins"] || [];

var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
  // Ensure plugins are ready.
  if (typeof Browser != "undefined") Browser.init();
  var handled = false;
  preloadPlugins.forEach(plugin => {
    if (handled) return;
    if (plugin["canHandle"](fullname)) {
      plugin["handle"](byteArray, fullname, finish, onerror);
      handled = true;
    }
  });
  return handled;
};

var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
  // TODO we should allow people to just pass in a complete filename instead
  // of parent and name being that we just join them anyways
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency(`cp ${fullname}`);
  // might have several active requests for the same fullname
  function processData(byteArray) {
    function finish(byteArray) {
      preFinish?.();
      if (!dontCreateFile) {
        FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
      }
      onload?.();
      removeRunDependency(dep);
    }
    if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
      onerror?.();
      removeRunDependency(dep);
    })) {
      return;
    }
    finish(byteArray);
  }
  addRunDependency(dep);
  if (typeof url == "string") {
    asyncLoad(url, processData, onerror);
  } else {
    processData(url);
  }
};

var FS_modeStringToFlags = str => {
  var flagModes = {
    "r": 0,
    "r+": 2,
    "w": 512 | 64 | 1,
    "w+": 512 | 64 | 2,
    "a": 1024 | 64 | 1,
    "a+": 1024 | 64 | 2
  };
  var flags = flagModes[str];
  if (typeof flags == "undefined") {
    throw new Error(`Unknown file open mode: ${str}`);
  }
  return flags;
};

var FS_getMode = (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
};

var FS = {
  root: null,
  mounts: [],
  devices: {},
  streams: [],
  nextInode: 1,
  nameTable: null,
  currentPath: "/",
  initialized: false,
  ignorePermissions: true,
  ErrnoError: class {
    // We set the `name` property to be able to identify `FS.ErrnoError`
    // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
    // - when using PROXYFS, an error can come from an underlying FS
    // as different FS objects have their own FS.ErrnoError each,
    // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
    // we'll use the reliable test `err.name == "ErrnoError"` instead
    constructor(errno) {
      // TODO(sbc): Use the inline member declaration syntax once we
      // support it in acorn and closure.
      this.name = "ErrnoError";
      this.errno = errno;
    }
  },
  genericErrors: {},
  filesystems: null,
  syncFSRequests: 0,
  readFiles: {},
  FSStream: class {
    constructor() {
      // TODO(https://github.com/emscripten-core/emscripten/issues/21414):
      // Use inline field declarations.
      this.shared = {};
    }
    get object() {
      return this.node;
    }
    set object(val) {
      this.node = val;
    }
    get isRead() {
      return (this.flags & 2097155) !== 1;
    }
    get isWrite() {
      return (this.flags & 2097155) !== 0;
    }
    get isAppend() {
      return (this.flags & 1024);
    }
    get flags() {
      return this.shared.flags;
    }
    set flags(val) {
      this.shared.flags = val;
    }
    get position() {
      return this.shared.position;
    }
    set position(val) {
      this.shared.position = val;
    }
  },
  FSNode: class {
    constructor(parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      // root node sets parent to itself
      this.parent = parent;
      this.mount = parent.mount;
      this.mounted = null;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = rdev;
      this.readMode = 292 | 73;
      this.writeMode = 146;
    }
    get read() {
      return (this.mode & this.readMode) === this.readMode;
    }
    set read(val) {
      val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
    }
    get write() {
      return (this.mode & this.writeMode) === this.writeMode;
    }
    set write(val) {
      val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
    }
    get isFolder() {
      return FS.isDir(this.mode);
    }
    get isDevice() {
      return FS.isChrdev(this.mode);
    }
  },
  lookupPath(path, opts = {}) {
    path = PATH_FS.resolve(path);
    if (!path) return {
      path: "",
      node: null
    };
    var defaults = {
      follow_mount: true,
      recurse_count: 0
    };
    opts = Object.assign(defaults, opts);
    if (opts.recurse_count > 8) {
      // max recursive lookup of 8
      throw new FS.ErrnoError(32);
    }
    // split the absolute path
    var parts = path.split("/").filter(p => !!p);
    // start at the root
    var current = FS.root;
    var current_path = "/";
    for (var i = 0; i < parts.length; i++) {
      var islast = (i === parts.length - 1);
      if (islast && opts.parent) {
        // stop resolving
        break;
      }
      current = FS.lookupNode(current, parts[i]);
      current_path = PATH.join2(current_path, parts[i]);
      // jump to the mount's root node if this is a mountpoint
      if (FS.isMountpoint(current)) {
        if (!islast || (islast && opts.follow_mount)) {
          current = current.mounted.root;
        }
      }
      // by default, lookupPath will not follow a symlink if it is the final path component.
      // setting opts.follow = true will override this behavior.
      if (!islast || opts.follow) {
        var count = 0;
        while (FS.isLink(current.mode)) {
          var link = FS.readlink(current_path);
          current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
          var lookup = FS.lookupPath(current_path, {
            recurse_count: opts.recurse_count + 1
          });
          current = lookup.node;
          if (count++ > 40) {
            // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
            throw new FS.ErrnoError(32);
          }
        }
      }
    }
    return {
      path: current_path,
      node: current
    };
  },
  getPath(node) {
    var path;
    while (true) {
      if (FS.isRoot(node)) {
        var mount = node.mount.mountpoint;
        if (!path) return mount;
        return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
      }
      path = path ? `${node.name}/${path}` : node.name;
      node = node.parent;
    }
  },
  hashName(parentid, name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return ((parentid + hash) >>> 0) % FS.nameTable.length;
  },
  hashAddNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    node.name_next = FS.nameTable[hash];
    FS.nameTable[hash] = node;
  },
  hashRemoveNode(node) {
    var hash = FS.hashName(node.parent.id, node.name);
    if (FS.nameTable[hash] === node) {
      FS.nameTable[hash] = node.name_next;
    } else {
      var current = FS.nameTable[hash];
      while (current) {
        if (current.name_next === node) {
          current.name_next = node.name_next;
          break;
        }
        current = current.name_next;
      }
    }
  },
  lookupNode(parent, name) {
    var errCode = FS.mayLookup(parent);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    var hash = FS.hashName(parent.id, name);
    for (var node = FS.nameTable[hash]; node; node = node.name_next) {
      var nodeName = node.name;
      if (node.parent.id === parent.id && nodeName === name) {
        return node;
      }
    }
    // if we failed to find it in the cache, call into the VFS
    return FS.lookup(parent, name);
  },
  createNode(parent, name, mode, rdev) {
    var node = new FS.FSNode(parent, name, mode, rdev);
    FS.hashAddNode(node);
    return node;
  },
  destroyNode(node) {
    FS.hashRemoveNode(node);
  },
  isRoot(node) {
    return node === node.parent;
  },
  isMountpoint(node) {
    return !!node.mounted;
  },
  isFile(mode) {
    return (mode & 61440) === 32768;
  },
  isDir(mode) {
    return (mode & 61440) === 16384;
  },
  isLink(mode) {
    return (mode & 61440) === 40960;
  },
  isChrdev(mode) {
    return (mode & 61440) === 8192;
  },
  isBlkdev(mode) {
    return (mode & 61440) === 24576;
  },
  isFIFO(mode) {
    return (mode & 61440) === 4096;
  },
  isSocket(mode) {
    return (mode & 49152) === 49152;
  },
  flagsToPermissionString(flag) {
    var perms = [ "r", "w", "rw" ][flag & 3];
    if ((flag & 512)) {
      perms += "w";
    }
    return perms;
  },
  nodePermissions(node, perms) {
    if (FS.ignorePermissions) {
      return 0;
    }
    // return 0 if any user, group or owner bits are set.
    if (perms.includes("r") && !(node.mode & 292)) {
      return 2;
    } else if (perms.includes("w") && !(node.mode & 146)) {
      return 2;
    } else if (perms.includes("x") && !(node.mode & 73)) {
      return 2;
    }
    return 0;
  },
  mayLookup(dir) {
    if (!FS.isDir(dir.mode)) return 54;
    var errCode = FS.nodePermissions(dir, "x");
    if (errCode) return errCode;
    if (!dir.node_ops.lookup) return 2;
    return 0;
  },
  mayCreate(dir, name) {
    try {
      var node = FS.lookupNode(dir, name);
      return 20;
    } catch (e) {}
    return FS.nodePermissions(dir, "wx");
  },
  mayDelete(dir, name, isdir) {
    var node;
    try {
      node = FS.lookupNode(dir, name);
    } catch (e) {
      return e.errno;
    }
    var errCode = FS.nodePermissions(dir, "wx");
    if (errCode) {
      return errCode;
    }
    if (isdir) {
      if (!FS.isDir(node.mode)) {
        return 54;
      }
      if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
        return 10;
      }
    } else {
      if (FS.isDir(node.mode)) {
        return 31;
      }
    }
    return 0;
  },
  mayOpen(node, flags) {
    if (!node) {
      return 44;
    }
    if (FS.isLink(node.mode)) {
      return 32;
    } else if (FS.isDir(node.mode)) {
      if (FS.flagsToPermissionString(flags) !== "r" || // opening for write
      (flags & 512)) {
        // TODO: check for O_SEARCH? (== search for dir only)
        return 31;
      }
    }
    return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
  },
  MAX_OPEN_FDS: 4096,
  nextfd() {
    for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
      if (!FS.streams[fd]) {
        return fd;
      }
    }
    throw new FS.ErrnoError(33);
  },
  getStreamChecked(fd) {
    var stream = FS.getStream(fd);
    if (!stream) {
      throw new FS.ErrnoError(8);
    }
    return stream;
  },
  getStream: fd => FS.streams[fd],
  createStream(stream, fd = -1) {
    // clone it, so we can return an instance of FSStream
    stream = Object.assign(new FS.FSStream, stream);
    if (fd == -1) {
      fd = FS.nextfd();
    }
    stream.fd = fd;
    FS.streams[fd] = stream;
    return stream;
  },
  closeStream(fd) {
    FS.streams[fd] = null;
  },
  dupStream(origStream, fd = -1) {
    var stream = FS.createStream(origStream, fd);
    stream.stream_ops?.dup?.(stream);
    return stream;
  },
  chrdev_stream_ops: {
    open(stream) {
      var device = FS.getDevice(stream.node.rdev);
      // override node's stream ops with the device's
      stream.stream_ops = device.stream_ops;
      // forward the open call
      stream.stream_ops.open?.(stream);
    },
    llseek() {
      throw new FS.ErrnoError(70);
    }
  },
  major: dev => ((dev) >> 8),
  minor: dev => ((dev) & 255),
  makedev: (ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
    FS.devices[dev] = {
      stream_ops: ops
    };
  },
  getDevice: dev => FS.devices[dev],
  getMounts(mount) {
    var mounts = [];
    var check = [ mount ];
    while (check.length) {
      var m = check.pop();
      mounts.push(m);
      check.push(...m.mounts);
    }
    return mounts;
  },
  syncfs(populate, callback) {
    if (typeof populate == "function") {
      callback = populate;
      populate = false;
    }
    FS.syncFSRequests++;
    if (FS.syncFSRequests > 1) {
      err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    }
    var mounts = FS.getMounts(FS.root.mount);
    var completed = 0;
    function doCallback(errCode) {
      FS.syncFSRequests--;
      return callback(errCode);
    }
    function done(errCode) {
      if (errCode) {
        if (!done.errored) {
          done.errored = true;
          return doCallback(errCode);
        }
        return;
      }
      if (++completed >= mounts.length) {
        doCallback(null);
      }
    }
    // sync all mounts
    mounts.forEach(mount => {
      if (!mount.type.syncfs) {
        return done(null);
      }
      mount.type.syncfs(mount, populate, done);
    });
  },
  mount(type, opts, mountpoint) {
    var root = mountpoint === "/";
    var pseudo = !mountpoint;
    var node;
    if (root && FS.root) {
      throw new FS.ErrnoError(10);
    } else if (!root && !pseudo) {
      var lookup = FS.lookupPath(mountpoint, {
        follow_mount: false
      });
      mountpoint = lookup.path;
      // use the absolute path
      node = lookup.node;
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      if (!FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
    }
    var mount = {
      type,
      opts,
      mountpoint,
      mounts: []
    };
    // create a root node for the fs
    var mountRoot = type.mount(mount);
    mountRoot.mount = mount;
    mount.root = mountRoot;
    if (root) {
      FS.root = mountRoot;
    } else if (node) {
      // set as a mountpoint
      node.mounted = mount;
      // add the new mount to the current mount's children
      if (node.mount) {
        node.mount.mounts.push(mount);
      }
    }
    return mountRoot;
  },
  unmount(mountpoint) {
    var lookup = FS.lookupPath(mountpoint, {
      follow_mount: false
    });
    if (!FS.isMountpoint(lookup.node)) {
      throw new FS.ErrnoError(28);
    }
    // destroy the nodes for this mount, and all its child mounts
    var node = lookup.node;
    var mount = node.mounted;
    var mounts = FS.getMounts(mount);
    Object.keys(FS.nameTable).forEach(hash => {
      var current = FS.nameTable[hash];
      while (current) {
        var next = current.name_next;
        if (mounts.includes(current.mount)) {
          FS.destroyNode(current);
        }
        current = next;
      }
    });
    // no longer a mountpoint
    node.mounted = null;
    // remove this mount from the child mounts
    var idx = node.mount.mounts.indexOf(mount);
    node.mount.mounts.splice(idx, 1);
  },
  lookup(parent, name) {
    return parent.node_ops.lookup(parent, name);
  },
  mknod(path, mode, dev) {
    var lookup = FS.lookupPath(path, {
      parent: true
    });
    var parent = lookup.node;
    var name = PATH.basename(path);
    if (!name || name === "." || name === "..") {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.mayCreate(parent, name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.mknod) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.mknod(parent, name, mode, dev);
  },
  create(path, mode) {
    mode = mode !== undefined ? mode : 438;
    /* 0666 */ mode &= 4095;
    mode |= 32768;
    return FS.mknod(path, mode, 0);
  },
  mkdir(path, mode) {
    mode = mode !== undefined ? mode : 511;
    /* 0777 */ mode &= 511 | 512;
    mode |= 16384;
    return FS.mknod(path, mode, 0);
  },
  mkdirTree(path, mode) {
    var dirs = path.split("/");
    var d = "";
    for (var i = 0; i < dirs.length; ++i) {
      if (!dirs[i]) continue;
      d += "/" + dirs[i];
      try {
        FS.mkdir(d, mode);
      } catch (e) {
        if (e.errno != 20) throw e;
      }
    }
  },
  mkdev(path, mode, dev) {
    if (typeof dev == "undefined") {
      dev = mode;
      mode = 438;
    }
    /* 0666 */ mode |= 8192;
    return FS.mknod(path, mode, dev);
  },
  symlink(oldpath, newpath) {
    if (!PATH_FS.resolve(oldpath)) {
      throw new FS.ErrnoError(44);
    }
    var lookup = FS.lookupPath(newpath, {
      parent: true
    });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var newname = PATH.basename(newpath);
    var errCode = FS.mayCreate(parent, newname);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.symlink) {
      throw new FS.ErrnoError(63);
    }
    return parent.node_ops.symlink(parent, newname, oldpath);
  },
  rename(old_path, new_path) {
    var old_dirname = PATH.dirname(old_path);
    var new_dirname = PATH.dirname(new_path);
    var old_name = PATH.basename(old_path);
    var new_name = PATH.basename(new_path);
    // parents must exist
    var lookup, old_dir, new_dir;
    // let the errors from non existent directories percolate up
    lookup = FS.lookupPath(old_path, {
      parent: true
    });
    old_dir = lookup.node;
    lookup = FS.lookupPath(new_path, {
      parent: true
    });
    new_dir = lookup.node;
    if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
    // need to be part of the same mount
    if (old_dir.mount !== new_dir.mount) {
      throw new FS.ErrnoError(75);
    }
    // source must exist
    var old_node = FS.lookupNode(old_dir, old_name);
    // old path should not be an ancestor of the new path
    var relative = PATH_FS.relative(old_path, new_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(28);
    }
    // new path should not be an ancestor of the old path
    relative = PATH_FS.relative(new_path, old_dirname);
    if (relative.charAt(0) !== ".") {
      throw new FS.ErrnoError(55);
    }
    // see if the new path already exists
    var new_node;
    try {
      new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    // early out if nothing needs to change
    if (old_node === new_node) {
      return;
    }
    // we'll need to delete the old entry
    var isdir = FS.isDir(old_node.mode);
    var errCode = FS.mayDelete(old_dir, old_name, isdir);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    // need delete permissions if we'll be overwriting.
    // need create permissions if new doesn't already exist.
    errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!old_dir.node_ops.rename) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
      throw new FS.ErrnoError(10);
    }
    // if we are going to change the parent, check write permissions
    if (new_dir !== old_dir) {
      errCode = FS.nodePermissions(old_dir, "w");
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    // remove the node from the lookup hash
    FS.hashRemoveNode(old_node);
    // do the underlying fs rename
    try {
      old_dir.node_ops.rename(old_node, new_dir, new_name);
      // update old node (we do this here to avoid each backend 
      // needing to)
      old_node.parent = new_dir;
    } catch (e) {
      throw e;
    } finally {
      // add the node back to the hash (in case node_ops.rename
      // changed its name)
      FS.hashAddNode(old_node);
    }
  },
  rmdir(path) {
    var lookup = FS.lookupPath(path, {
      parent: true
    });
    var parent = lookup.node;
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, true);
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.rmdir) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.rmdir(parent, name);
    FS.destroyNode(node);
  },
  readdir(path) {
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    var node = lookup.node;
    if (!node.node_ops.readdir) {
      throw new FS.ErrnoError(54);
    }
    return node.node_ops.readdir(node);
  },
  unlink(path) {
    var lookup = FS.lookupPath(path, {
      parent: true
    });
    var parent = lookup.node;
    if (!parent) {
      throw new FS.ErrnoError(44);
    }
    var name = PATH.basename(path);
    var node = FS.lookupNode(parent, name);
    var errCode = FS.mayDelete(parent, name, false);
    if (errCode) {
      // According to POSIX, we should map EISDIR to EPERM, but
      // we instead do what Linux does (and we must, as we use
      // the musl linux libc).
      throw new FS.ErrnoError(errCode);
    }
    if (!parent.node_ops.unlink) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isMountpoint(node)) {
      throw new FS.ErrnoError(10);
    }
    parent.node_ops.unlink(parent, name);
    FS.destroyNode(node);
  },
  readlink(path) {
    var lookup = FS.lookupPath(path);
    var link = lookup.node;
    if (!link) {
      throw new FS.ErrnoError(44);
    }
    if (!link.node_ops.readlink) {
      throw new FS.ErrnoError(28);
    }
    return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
  },
  stat(path, dontFollow) {
    var lookup = FS.lookupPath(path, {
      follow: !dontFollow
    });
    var node = lookup.node;
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    if (!node.node_ops.getattr) {
      throw new FS.ErrnoError(63);
    }
    return node.node_ops.getattr(node);
  },
  lstat(path) {
    return FS.stat(path, true);
  },
  chmod(path, mode, dontFollow) {
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, {
        follow: !dontFollow
      });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, {
      mode: (mode & 4095) | (node.mode & ~4095),
      timestamp: Date.now()
    });
  },
  lchmod(path, mode) {
    FS.chmod(path, mode, true);
  },
  fchmod(fd, mode) {
    var stream = FS.getStreamChecked(fd);
    FS.chmod(stream.node, mode);
  },
  chown(path, uid, gid, dontFollow) {
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, {
        follow: !dontFollow
      });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    node.node_ops.setattr(node, {
      timestamp: Date.now()
    });
  },
  // we ignore the uid / gid for now
  lchown(path, uid, gid) {
    FS.chown(path, uid, gid, true);
  },
  fchown(fd, uid, gid) {
    var stream = FS.getStreamChecked(fd);
    FS.chown(stream.node, uid, gid);
  },
  truncate(path, len) {
    if (len < 0) {
      throw new FS.ErrnoError(28);
    }
    var node;
    if (typeof path == "string") {
      var lookup = FS.lookupPath(path, {
        follow: true
      });
      node = lookup.node;
    } else {
      node = path;
    }
    if (!node.node_ops.setattr) {
      throw new FS.ErrnoError(63);
    }
    if (FS.isDir(node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!FS.isFile(node.mode)) {
      throw new FS.ErrnoError(28);
    }
    var errCode = FS.nodePermissions(node, "w");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    node.node_ops.setattr(node, {
      size: len,
      timestamp: Date.now()
    });
  },
  ftruncate(fd, len) {
    var stream = FS.getStreamChecked(fd);
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(28);
    }
    FS.truncate(stream.node, len);
  },
  utime(path, atime, mtime) {
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    var node = lookup.node;
    node.node_ops.setattr(node, {
      timestamp: Math.max(atime, mtime)
    });
  },
  open(path, flags, mode) {
    if (path === "") {
      throw new FS.ErrnoError(44);
    }
    flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
    if ((flags & 64)) {
      mode = typeof mode == "undefined" ? 438 : /* 0666 */ mode;
      mode = (mode & 4095) | 32768;
    } else {
      mode = 0;
    }
    var node;
    if (typeof path == "object") {
      node = path;
    } else {
      path = PATH.normalize(path);
      try {
        var lookup = FS.lookupPath(path, {
          follow: !(flags & 131072)
        });
        node = lookup.node;
      } catch (e) {}
    }
    // perhaps we need to create the node
    var created = false;
    if ((flags & 64)) {
      if (node) {
        // if O_CREAT and O_EXCL are set, error out if the node already exists
        if ((flags & 128)) {
          throw new FS.ErrnoError(20);
        }
      } else {
        // node doesn't exist, try to create it
        node = FS.mknod(path, mode, 0);
        created = true;
      }
    }
    if (!node) {
      throw new FS.ErrnoError(44);
    }
    // can't truncate a device
    if (FS.isChrdev(node.mode)) {
      flags &= ~512;
    }
    // if asked only for a directory, then this must be one
    if ((flags & 65536) && !FS.isDir(node.mode)) {
      throw new FS.ErrnoError(54);
    }
    // check permissions, if this is not a file we just created now (it is ok to
    // create and write to a file with read-only permissions; it is read-only
    // for later use)
    if (!created) {
      var errCode = FS.mayOpen(node, flags);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
    }
    // do truncation if necessary
    if ((flags & 512) && !created) {
      FS.truncate(node, 0);
    }
    // we've already handled these, don't pass down to the underlying vfs
    flags &= ~(128 | 512 | 131072);
    // register the stream with the filesystem
    var stream = FS.createStream({
      node,
      path: FS.getPath(node),
      // we want the absolute path to the node
      flags,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      // used by the file family libc calls (fopen, fwrite, ferror, etc.)
      ungotten: [],
      error: false
    });
    // call the new stream's open function
    if (stream.stream_ops.open) {
      stream.stream_ops.open(stream);
    }
    if (Module["logReadFiles"] && !(flags & 1)) {
      if (!(path in FS.readFiles)) {
        FS.readFiles[path] = 1;
      }
    }
    return stream;
  },
  close(stream) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (stream.getdents) stream.getdents = null;
    // free readdir state
    try {
      if (stream.stream_ops.close) {
        stream.stream_ops.close(stream);
      }
    } catch (e) {
      throw e;
    } finally {
      FS.closeStream(stream.fd);
    }
    stream.fd = null;
  },
  isClosed(stream) {
    return stream.fd === null;
  },
  llseek(stream, offset, whence) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (!stream.seekable || !stream.stream_ops.llseek) {
      throw new FS.ErrnoError(70);
    }
    if (whence != 0 && whence != 1 && whence != 2) {
      throw new FS.ErrnoError(28);
    }
    stream.position = stream.stream_ops.llseek(stream, offset, whence);
    stream.ungotten = [];
    return stream.position;
  },
  read(stream, buffer, offset, length, position) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.read) {
      throw new FS.ErrnoError(28);
    }
    var seeking = typeof position != "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
    if (!seeking) stream.position += bytesRead;
    return bytesRead;
  },
  write(stream, buffer, offset, length, position, canOwn) {
    if (length < 0 || position < 0) {
      throw new FS.ErrnoError(28);
    }
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(31);
    }
    if (!stream.stream_ops.write) {
      throw new FS.ErrnoError(28);
    }
    if (stream.seekable && stream.flags & 1024) {
      // seek to the end before writing in append mode
      FS.llseek(stream, 0, 2);
    }
    var seeking = typeof position != "undefined";
    if (!seeking) {
      position = stream.position;
    } else if (!stream.seekable) {
      throw new FS.ErrnoError(70);
    }
    var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
    if (!seeking) stream.position += bytesWritten;
    return bytesWritten;
  },
  allocate(stream, offset, length) {
    if (FS.isClosed(stream)) {
      throw new FS.ErrnoError(8);
    }
    if (offset < 0 || length <= 0) {
      throw new FS.ErrnoError(28);
    }
    if ((stream.flags & 2097155) === 0) {
      throw new FS.ErrnoError(8);
    }
    if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (!stream.stream_ops.allocate) {
      throw new FS.ErrnoError(138);
    }
    stream.stream_ops.allocate(stream, offset, length);
  },
  mmap(stream, length, position, prot, flags) {
    // User requests writing to file (prot & PROT_WRITE != 0).
    // Checking if we have permissions to write to the file unless
    // MAP_PRIVATE flag is set. According to POSIX spec it is possible
    // to write to file opened in read-only mode with MAP_PRIVATE flag,
    // as all modifications will be visible only in the memory of
    // the current process.
    if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
      throw new FS.ErrnoError(2);
    }
    if ((stream.flags & 2097155) === 1) {
      throw new FS.ErrnoError(2);
    }
    if (!stream.stream_ops.mmap) {
      throw new FS.ErrnoError(43);
    }
    if (!length) {
      throw new FS.ErrnoError(28);
    }
    return stream.stream_ops.mmap(stream, length, position, prot, flags);
  },
  msync(stream, buffer, offset, length, mmapFlags) {
    if (!stream.stream_ops.msync) {
      return 0;
    }
    return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
  },
  ioctl(stream, cmd, arg) {
    if (!stream.stream_ops.ioctl) {
      throw new FS.ErrnoError(59);
    }
    return stream.stream_ops.ioctl(stream, cmd, arg);
  },
  readFile(path, opts = {}) {
    opts.flags = opts.flags || 0;
    opts.encoding = opts.encoding || "binary";
    if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
      throw new Error(`Invalid encoding type "${opts.encoding}"`);
    }
    var ret;
    var stream = FS.open(path, opts.flags);
    var stat = FS.stat(path);
    var length = stat.size;
    var buf = new Uint8Array(length);
    FS.read(stream, buf, 0, length, 0);
    if (opts.encoding === "utf8") {
      ret = UTF8ArrayToString(buf, 0);
    } else if (opts.encoding === "binary") {
      ret = buf;
    }
    FS.close(stream);
    return ret;
  },
  writeFile(path, data, opts = {}) {
    opts.flags = opts.flags || 577;
    var stream = FS.open(path, opts.flags, opts.mode);
    if (typeof data == "string") {
      var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
      var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
      FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
    } else if (ArrayBuffer.isView(data)) {
      FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
    } else {
      throw new Error("Unsupported data type");
    }
    FS.close(stream);
  },
  cwd: () => FS.currentPath,
  chdir(path) {
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    if (lookup.node === null) {
      throw new FS.ErrnoError(44);
    }
    if (!FS.isDir(lookup.node.mode)) {
      throw new FS.ErrnoError(54);
    }
    var errCode = FS.nodePermissions(lookup.node, "x");
    if (errCode) {
      throw new FS.ErrnoError(errCode);
    }
    FS.currentPath = lookup.path;
  },
  createDefaultDirectories() {
    FS.mkdir("/tmp");
    FS.mkdir("/home");
    FS.mkdir("/home/web_user");
  },
  createDefaultDevices() {
    // create /dev
    FS.mkdir("/dev");
    // setup /dev/null
    FS.registerDevice(FS.makedev(1, 3), {
      read: () => 0,
      write: (stream, buffer, offset, length, pos) => length
    });
    FS.mkdev("/dev/null", FS.makedev(1, 3));
    // setup /dev/tty and /dev/tty1
    // stderr needs to print output using err() rather than out()
    // so we register a second tty just for it.
    TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
    TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
    FS.mkdev("/dev/tty", FS.makedev(5, 0));
    FS.mkdev("/dev/tty1", FS.makedev(6, 0));
    // setup /dev/[u]random
    // use a buffer to avoid overhead of individual crypto calls per byte
    var randomBuffer = new Uint8Array(1024), randomLeft = 0;
    var randomByte = () => {
      if (randomLeft === 0) {
        randomLeft = randomFill(randomBuffer).byteLength;
      }
      return randomBuffer[--randomLeft];
    };
    FS.createDevice("/dev", "random", randomByte);
    FS.createDevice("/dev", "urandom", randomByte);
    // we're not going to emulate the actual shm device,
    // just create the tmp dirs that reside in it commonly
    FS.mkdir("/dev/shm");
    FS.mkdir("/dev/shm/tmp");
  },
  createSpecialDirectories() {
    // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
    // name of the stream for fd 6 (see test_unistd_ttyname)
    FS.mkdir("/proc");
    var proc_self = FS.mkdir("/proc/self");
    FS.mkdir("/proc/self/fd");
    FS.mount({
      mount() {
        var node = FS.createNode(proc_self, "fd", 16384 | 511, /* 0777 */ 73);
        node.node_ops = {
          lookup(parent, name) {
            var fd = +name;
            var stream = FS.getStreamChecked(fd);
            var ret = {
              parent: null,
              mount: {
                mountpoint: "fake"
              },
              node_ops: {
                readlink: () => stream.path
              }
            };
            ret.parent = ret;
            // make it look like a simple root node
            return ret;
          }
        };
        return node;
      }
    }, {}, "/proc/self/fd");
  },
  createStandardStreams(input, output, error) {
    // TODO deprecate the old functionality of a single
    // input / output callback and that utilizes FS.createDevice
    // and instead require a unique set of stream ops
    // by default, we symlink the standard streams to the
    // default tty devices. however, if the standard streams
    // have been overwritten we create a unique device for
    // them instead.
    if (input) {
      FS.createDevice("/dev", "stdin", input);
    } else {
      FS.symlink("/dev/tty", "/dev/stdin");
    }
    if (output) {
      FS.createDevice("/dev", "stdout", null, output);
    } else {
      FS.symlink("/dev/tty", "/dev/stdout");
    }
    if (error) {
      FS.createDevice("/dev", "stderr", null, error);
    } else {
      FS.symlink("/dev/tty1", "/dev/stderr");
    }
    // open default streams for the stdin, stdout and stderr devices
    var stdin = FS.open("/dev/stdin", 0);
    var stdout = FS.open("/dev/stdout", 1);
    var stderr = FS.open("/dev/stderr", 1);
  },
  staticInit() {
    // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
    [ 44 ].forEach(code => {
      FS.genericErrors[code] = new FS.ErrnoError(code);
      FS.genericErrors[code].stack = "<generic error, no stack>";
    });
    FS.nameTable = new Array(4096);
    FS.mount(MEMFS, {}, "/");
    FS.createDefaultDirectories();
    FS.createDefaultDevices();
    FS.createSpecialDirectories();
    FS.filesystems = {
      "MEMFS": MEMFS
    };
  },
  init(input, output, error) {
    FS.initialized = true;
    // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
    input ??= Module["stdin"];
    output ??= Module["stdout"];
    error ??= Module["stderr"];
    FS.createStandardStreams(input, output, error);
  },
  quit() {
    FS.initialized = false;
    // force-flush all streams, so we get musl std streams printed out
    // close all of our streams
    for (var i = 0; i < FS.streams.length; i++) {
      var stream = FS.streams[i];
      if (!stream) {
        continue;
      }
      FS.close(stream);
    }
  },
  findObject(path, dontResolveLastLink) {
    var ret = FS.analyzePath(path, dontResolveLastLink);
    if (!ret.exists) {
      return null;
    }
    return ret.object;
  },
  analyzePath(path, dontResolveLastLink) {
    // operate from within the context of the symlink's target
    try {
      var lookup = FS.lookupPath(path, {
        follow: !dontResolveLastLink
      });
      path = lookup.path;
    } catch (e) {}
    var ret = {
      isRoot: false,
      exists: false,
      error: 0,
      name: null,
      path: null,
      object: null,
      parentExists: false,
      parentPath: null,
      parentObject: null
    };
    try {
      var lookup = FS.lookupPath(path, {
        parent: true
      });
      ret.parentExists = true;
      ret.parentPath = lookup.path;
      ret.parentObject = lookup.node;
      ret.name = PATH.basename(path);
      lookup = FS.lookupPath(path, {
        follow: !dontResolveLastLink
      });
      ret.exists = true;
      ret.path = lookup.path;
      ret.object = lookup.node;
      ret.name = lookup.node.name;
      ret.isRoot = lookup.path === "/";
    } catch (e) {
      ret.error = e.errno;
    }
    return ret;
  },
  createPath(parent, path, canRead, canWrite) {
    parent = typeof parent == "string" ? parent : FS.getPath(parent);
    var parts = path.split("/").reverse();
    while (parts.length) {
      var part = parts.pop();
      if (!part) continue;
      var current = PATH.join2(parent, part);
      try {
        FS.mkdir(current);
      } catch (e) {}
      // ignore EEXIST
      parent = current;
    }
    return current;
  },
  createFile(parent, name, properties, canRead, canWrite) {
    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
    var mode = FS_getMode(canRead, canWrite);
    return FS.create(path, mode);
  },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
    var path = name;
    if (parent) {
      parent = typeof parent == "string" ? parent : FS.getPath(parent);
      path = name ? PATH.join2(parent, name) : parent;
    }
    var mode = FS_getMode(canRead, canWrite);
    var node = FS.create(path, mode);
    if (data) {
      if (typeof data == "string") {
        var arr = new Array(data.length);
        for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
        data = arr;
      }
      // make sure we can write to the file
      FS.chmod(node, mode | 146);
      var stream = FS.open(node, 577);
      FS.write(stream, data, 0, data.length, 0, canOwn);
      FS.close(stream);
      FS.chmod(node, mode);
    }
  },
  createDevice(parent, name, input, output) {
    var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
    var mode = FS_getMode(!!input, !!output);
    FS.createDevice.major ??= 64;
    var dev = FS.makedev(FS.createDevice.major++, 0);
    // Create a fake device that a set of stream ops to emulate
    // the old behavior.
    FS.registerDevice(dev, {
      open(stream) {
        stream.seekable = false;
      },
      close(stream) {
        // flush any pending line data
        if (output?.buffer?.length) {
          output(10);
        }
      },
      read(stream, buffer, offset, length, pos) {
        /* ignored */ var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === undefined && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === undefined) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.timestamp = Date.now();
        }
        return bytesRead;
      },
      write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.timestamp = Date.now();
        }
        return i;
      }
    });
    return FS.mkdev(path, mode, dev);
  },
  forceLoadFile(obj) {
    if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
    if (typeof XMLHttpRequest != "undefined") {
      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    } else {
      // Command-line.
      try {
        obj.contents = readBinary(obj.url);
        obj.usedBytes = obj.contents.length;
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
    }
  },
  createLazyFile(parent, name, url, canRead, canWrite) {
    // Lazy chunked Uint8Array (implements get and length from Uint8Array).
    // Actual getting is abstracted away for eventual reuse.
    class LazyUint8Array {
      constructor() {
        this.lengthKnown = false;
        this.chunks = [];
      }
      // Loaded chunks. Index is the chunk number
      get(idx) {
        if (idx > this.length - 1 || idx < 0) {
          return undefined;
        }
        var chunkOffset = idx % this.chunkSize;
        var chunkNum = (idx / this.chunkSize) | 0;
        return this.getter(chunkNum)[chunkOffset];
      }
      setDataGetter(getter) {
        this.getter = getter;
      }
      cacheLength() {
        // Find length
        var xhr = new XMLHttpRequest;
        xhr.open("HEAD", url, false);
        xhr.send(null);
        if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
        var datalength = Number(xhr.getResponseHeader("Content-length"));
        var header;
        var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
        var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
        var chunkSize = 1024 * 1024;
        // Chunk size in bytes
        if (!hasByteServing) chunkSize = datalength;
        // Function to get a range from the remote URL.
        var doXHR = (from, to) => {
          if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
          if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
          // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
          var xhr = new XMLHttpRequest;
          xhr.open("GET", url, false);
          if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
          // Some hints to the browser that we want binary data.
          xhr.responseType = "arraybuffer";
          if (xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          }
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          if (xhr.response !== undefined) {
            return new Uint8Array(/** @type{Array<number>} */ (xhr.response || []));
          }
          return intArrayFromString(xhr.responseText || "", true);
        };
        var lazyArray = this;
        lazyArray.setDataGetter(chunkNum => {
          var start = chunkNum * chunkSize;
          var end = (chunkNum + 1) * chunkSize - 1;
          // including this byte
          end = Math.min(end, datalength - 1);
          // if datalength-1 is selected, this is the last block
          if (typeof lazyArray.chunks[chunkNum] == "undefined") {
            lazyArray.chunks[chunkNum] = doXHR(start, end);
          }
          if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
          return lazyArray.chunks[chunkNum];
        });
        if (usesGzip || !datalength) {
          // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
          chunkSize = datalength = 1;
          // this will force getter(0)/doXHR do download the whole file
          datalength = this.getter(0).length;
          chunkSize = datalength;
          out("LazyFiles on gzip forces download of the whole file when length is accessed");
        }
        this._length = datalength;
        this._chunkSize = chunkSize;
        this.lengthKnown = true;
      }
      get length() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._length;
      }
      get chunkSize() {
        if (!this.lengthKnown) {
          this.cacheLength();
        }
        return this._chunkSize;
      }
    }
    if (typeof XMLHttpRequest != "undefined") {
      if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var lazyArray = new LazyUint8Array;
      var properties = {
        isDevice: false,
        contents: lazyArray
      };
    } else {
      var properties = {
        isDevice: false,
        url
      };
    }
    var node = FS.createFile(parent, name, properties, canRead, canWrite);
    // This is a total hack, but I want to get this lazy file code out of the
    // core of MEMFS. If we want to keep this lazy file concept I feel it should
    // be its own thin LAZYFS proxying calls to MEMFS.
    if (properties.contents) {
      node.contents = properties.contents;
    } else if (properties.url) {
      node.contents = null;
      node.url = properties.url;
    }
    // Add a function that defers querying the file size until it is asked the first time.
    Object.defineProperties(node, {
      usedBytes: {
        get: function() {
          return this.contents.length;
        }
      }
    });
    // override each stream op with one that tries to force load the lazy file first
    var stream_ops = {};
    var keys = Object.keys(node.stream_ops);
    keys.forEach(key => {
      var fn = node.stream_ops[key];
      stream_ops[key] = (...args) => {
        FS.forceLoadFile(node);
        return fn(...args);
      };
    });
    function writeChunks(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= contents.length) return 0;
      var size = Math.min(contents.length - position, length);
      if (contents.slice) {
        // normal array
        for (var i = 0; i < size; i++) {
          buffer[offset + i] = contents[position + i];
        }
      } else {
        for (var i = 0; i < size; i++) {
          // LazyUint8Array from sync binary XHR
          buffer[offset + i] = contents.get(position + i);
        }
      }
      return size;
    }
    // use a custom read function
    stream_ops.read = (stream, buffer, offset, length, position) => {
      FS.forceLoadFile(node);
      return writeChunks(stream, buffer, offset, length, position);
    };
    // use a custom mmap function
    stream_ops.mmap = (stream, length, position, prot, flags) => {
      FS.forceLoadFile(node);
      var ptr = mmapAlloc(length);
      if (!ptr) {
        throw new FS.ErrnoError(48);
      }
      writeChunks(stream, GROWABLE_HEAP_I8(), ptr, length, position);
      return {
        ptr,
        allocated: true
      };
    };
    node.stream_ops = stream_ops;
    return node;
  }
};

/**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */ var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";

var SYSCALLS = {
  DEFAULT_POLLMASK: 5,
  calculateAt(dirfd, path, allowEmpty) {
    if (PATH.isAbs(path)) {
      return path;
    }
    // relative path
    var dir;
    if (dirfd === -100) {
      dir = FS.cwd();
    } else {
      var dirstream = SYSCALLS.getStreamFromFD(dirfd);
      dir = dirstream.path;
    }
    if (path.length == 0) {
      if (!allowEmpty) {
        throw new FS.ErrnoError(44);
      }
      return dir;
    }
    return PATH.join2(dir, path);
  },
  doStat(func, path, buf) {
    var stat = func(path);
    GROWABLE_HEAP_I32()[((buf) >> 2)] = stat.dev;
    GROWABLE_HEAP_I32()[(((buf) + (4)) >> 2)] = stat.mode;
    GROWABLE_HEAP_U32()[(((buf) + (8)) >> 2)] = stat.nlink;
    GROWABLE_HEAP_I32()[(((buf) + (12)) >> 2)] = stat.uid;
    GROWABLE_HEAP_I32()[(((buf) + (16)) >> 2)] = stat.gid;
    GROWABLE_HEAP_I32()[(((buf) + (20)) >> 2)] = stat.rdev;
    (tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((buf) + (24)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (28)) >> 2)] = tempI64[1]);
    GROWABLE_HEAP_I32()[(((buf) + (32)) >> 2)] = 4096;
    GROWABLE_HEAP_I32()[(((buf) + (36)) >> 2)] = stat.blocks;
    var atime = stat.atime.getTime();
    var mtime = stat.mtime.getTime();
    var ctime = stat.ctime.getTime();
    (tempI64 = [ Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), 
    (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((buf) + (40)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (44)) >> 2)] = tempI64[1]);
    GROWABLE_HEAP_U32()[(((buf) + (48)) >> 2)] = (atime % 1e3) * 1e3 * 1e3;
    (tempI64 = [ Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), 
    (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((buf) + (56)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (60)) >> 2)] = tempI64[1]);
    GROWABLE_HEAP_U32()[(((buf) + (64)) >> 2)] = (mtime % 1e3) * 1e3 * 1e3;
    (tempI64 = [ Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), 
    (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((buf) + (72)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (76)) >> 2)] = tempI64[1]);
    GROWABLE_HEAP_U32()[(((buf) + (80)) >> 2)] = (ctime % 1e3) * 1e3 * 1e3;
    (tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((buf) + (88)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((buf) + (92)) >> 2)] = tempI64[1]);
    return 0;
  },
  doMsync(addr, stream, len, flags, offset) {
    if (!FS.isFile(stream.node.mode)) {
      throw new FS.ErrnoError(43);
    }
    if (flags & 2) {
      // MAP_PRIVATE calls need not to be synced back to underlying fs
      return 0;
    }
    var buffer = GROWABLE_HEAP_U8().slice(addr, addr + len);
    FS.msync(stream, buffer, offset, len, flags);
  },
  getStreamFromFD(fd) {
    var stream = FS.getStreamChecked(fd);
    return stream;
  },
  varargs: undefined,
  getStr(ptr) {
    var ret = UTF8ToString(ptr);
    return ret;
  }
};

function ___syscall_dup3(fd, newfd, flags) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(3, 0, 1, fd, newfd, flags);
  try {
    var old = SYSCALLS.getStreamFromFD(fd);
    if (old.fd === newfd) return -28;
    // Check newfd is within range of valid open file descriptors.
    if (newfd < 0 || newfd >= FS.MAX_OPEN_FDS) return -8;
    var existing = FS.getStream(newfd);
    if (existing) FS.close(existing);
    return FS.dupStream(old, newfd).fd;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_faccessat(dirfd, path, amode, flags) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(4, 0, 1, dirfd, path, amode, flags);
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    if (amode & ~7) {
      // need a valid mode
      return -28;
    }
    var lookup = FS.lookupPath(path, {
      follow: true
    });
    var node = lookup.node;
    if (!node) {
      return -44;
    }
    var perms = "";
    if (amode & 4) perms += "r";
    if (amode & 2) perms += "w";
    if (amode & 1) perms += "x";
    if (perms && /* otherwise, they've just passed F_OK */ FS.nodePermissions(node, perms)) {
      return -2;
    }
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

/** @suppress {duplicate } */ function syscallGetVarargI() {
  // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
  var ret = GROWABLE_HEAP_I32()[((+SYSCALLS.varargs) >> 2)];
  SYSCALLS.varargs += 4;
  return ret;
}

var syscallGetVarargP = syscallGetVarargI;

function ___syscall_fcntl64(fd, cmd, varargs) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(5, 0, 1, fd, cmd, varargs);
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (cmd) {
     case 0:
      {
        var arg = syscallGetVarargI();
        if (arg < 0) {
          return -28;
        }
        while (FS.streams[arg]) {
          arg++;
        }
        var newStream;
        newStream = FS.dupStream(stream, arg);
        return newStream.fd;
      }

     case 1:
     case 2:
      return 0;

     // FD_CLOEXEC makes no sense for a single process.
      case 3:
      return stream.flags;

     case 4:
      {
        var arg = syscallGetVarargI();
        stream.flags |= arg;
        return 0;
      }

     case 12:
      {
        var arg = syscallGetVarargP();
        var offset = 0;
        // We're always unlocked.
        GROWABLE_HEAP_I16()[(((arg) + (offset)) >> 1)] = 2;
        return 0;
      }

     case 13:
     case 14:
      return 0;
    }
    // Pretend that the locking is successful.
    return -28;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_fstat64(fd, buf) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(6, 0, 1, fd, buf);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    return SYSCALLS.doStat(FS.stat, stream.path, buf);
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);

function ___syscall_getdents64(fd, dirp, count) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(7, 0, 1, fd, dirp, count);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    stream.getdents ||= FS.readdir(stream.path);
    var struct_size = 280;
    var pos = 0;
    var off = FS.llseek(stream, 0, 1);
    var idx = Math.floor(off / struct_size);
    while (idx < stream.getdents.length && pos + struct_size <= count) {
      var id;
      var type;
      var name = stream.getdents[idx];
      if (name === ".") {
        id = stream.node.id;
        type = 4;
      } else // DT_DIR
      if (name === "..") {
        var lookup = FS.lookupPath(stream.path, {
          parent: true
        });
        id = lookup.node.id;
        type = 4;
      } else // DT_DIR
      {
        var child = FS.lookupNode(stream.node, name);
        id = child.id;
        type = FS.isChrdev(child.mode) ? 2 : // DT_CHR, character device.
        FS.isDir(child.mode) ? 4 : // DT_DIR, directory.
        FS.isLink(child.mode) ? 10 : // DT_LNK, symbolic link.
        8;
      }
      // DT_REG, regular file.
      (tempI64 = [ id >>> 0, (tempDouble = id, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
      GROWABLE_HEAP_I32()[((dirp + pos) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((dirp + pos) + (4)) >> 2)] = tempI64[1]);
      (tempI64 = [ (idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, 
      (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
      GROWABLE_HEAP_I32()[(((dirp + pos) + (8)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((dirp + pos) + (12)) >> 2)] = tempI64[1]);
      GROWABLE_HEAP_I16()[(((dirp + pos) + (16)) >> 1)] = 280;
      GROWABLE_HEAP_I8()[(dirp + pos) + (18)] = type;
      stringToUTF8(name, dirp + pos + 19, 256);
      pos += struct_size;
      idx += 1;
    }
    FS.llseek(stream, idx * struct_size, 0);
    return pos;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_ioctl(fd, op, varargs) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(8, 0, 1, fd, op, varargs);
  SYSCALLS.varargs = varargs;
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    switch (op) {
     case 21509:
      {
        if (!stream.tty) return -59;
        return 0;
      }

     case 21505:
      {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcgets) {
          var termios = stream.tty.ops.ioctl_tcgets(stream);
          var argp = syscallGetVarargP();
          GROWABLE_HEAP_I32()[((argp) >> 2)] = termios.c_iflag || 0;
          GROWABLE_HEAP_I32()[(((argp) + (4)) >> 2)] = termios.c_oflag || 0;
          GROWABLE_HEAP_I32()[(((argp) + (8)) >> 2)] = termios.c_cflag || 0;
          GROWABLE_HEAP_I32()[(((argp) + (12)) >> 2)] = termios.c_lflag || 0;
          for (var i = 0; i < 32; i++) {
            GROWABLE_HEAP_I8()[(argp + i) + (17)] = termios.c_cc[i] || 0;
          }
          return 0;
        }
        return 0;
      }

     case 21510:
     case 21511:
     case 21512:
      {
        if (!stream.tty) return -59;
        return 0;
      }

     // no-op, not actually adjusting terminal settings
      case 21506:
     case 21507:
     case 21508:
      {
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tcsets) {
          var argp = syscallGetVarargP();
          var c_iflag = GROWABLE_HEAP_I32()[((argp) >> 2)];
          var c_oflag = GROWABLE_HEAP_I32()[(((argp) + (4)) >> 2)];
          var c_cflag = GROWABLE_HEAP_I32()[(((argp) + (8)) >> 2)];
          var c_lflag = GROWABLE_HEAP_I32()[(((argp) + (12)) >> 2)];
          var c_cc = [];
          for (var i = 0; i < 32; i++) {
            c_cc.push(GROWABLE_HEAP_I8()[(argp + i) + (17)]);
          }
          return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
            c_iflag,
            c_oflag,
            c_cflag,
            c_lflag,
            c_cc
          });
        }
        return 0;
      }

     // no-op, not actually adjusting terminal settings
      case 21519:
      {
        if (!stream.tty) return -59;
        var argp = syscallGetVarargP();
        GROWABLE_HEAP_I32()[((argp) >> 2)] = 0;
        return 0;
      }

     case 21520:
      {
        if (!stream.tty) return -59;
        return -28;
      }

     // not supported
      case 21531:
      {
        var argp = syscallGetVarargP();
        return FS.ioctl(stream, op, argp);
      }

     case 21523:
      {
        // TODO: in theory we should write to the winsize struct that gets
        // passed in, but for now musl doesn't read anything on it
        if (!stream.tty) return -59;
        if (stream.tty.ops.ioctl_tiocgwinsz) {
          var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
          var argp = syscallGetVarargP();
          GROWABLE_HEAP_I16()[((argp) >> 1)] = winsize[0];
          GROWABLE_HEAP_I16()[(((argp) + (2)) >> 1)] = winsize[1];
        }
        return 0;
      }

     case 21524:
      {
        // TODO: technically, this ioctl call should change the window size.
        // but, since emscripten doesn't have any concept of a terminal window
        // yet, we'll just silently throw it away as we do TIOCGWINSZ
        if (!stream.tty) return -59;
        return 0;
      }

     case 21515:
      {
        if (!stream.tty) return -59;
        return 0;
      }

     default:
      return -28;
    }
  } // not supported
  catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_lstat64(path, buf) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(9, 0, 1, path, buf);
  try {
    path = SYSCALLS.getStr(path);
    return SYSCALLS.doStat(FS.lstat, path, buf);
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_newfstatat(dirfd, path, buf, flags) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(10, 0, 1, dirfd, path, buf, flags);
  try {
    path = SYSCALLS.getStr(path);
    var nofollow = flags & 256;
    var allowEmpty = flags & 4096;
    flags = flags & (~6400);
    path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
    return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(11, 0, 1, dirfd, path, flags, varargs);
  SYSCALLS.varargs = varargs;
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    var mode = varargs ? syscallGetVarargI() : 0;
    return FS.open(path, flags, mode).fd;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(12, 0, 1, olddirfd, oldpath, newdirfd, newpath);
  try {
    oldpath = SYSCALLS.getStr(oldpath);
    newpath = SYSCALLS.getStr(newpath);
    oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
    newpath = SYSCALLS.calculateAt(newdirfd, newpath);
    FS.rename(oldpath, newpath);
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_rmdir(path) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(13, 0, 1, path);
  try {
    path = SYSCALLS.getStr(path);
    FS.rmdir(path);
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_stat64(path, buf) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(14, 0, 1, path, buf);
  try {
    path = SYSCALLS.getStr(path);
    return SYSCALLS.doStat(FS.stat, path, buf);
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

function ___syscall_unlinkat(dirfd, path, flags) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(15, 0, 1, dirfd, path, flags);
  try {
    path = SYSCALLS.getStr(path);
    path = SYSCALLS.calculateAt(dirfd, path);
    if (flags === 0) {
      FS.unlink(path);
    } else if (flags === 512) {
      FS.rmdir(path);
    } else {
      abort("Invalid flags passed to unlinkat");
    }
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return -e.errno;
  }
}

var __abort_js = () => {
  abort("");
};

var nowIsMonotonic = 1;

var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

var __emscripten_init_main_thread_js = tb => {
  // Pass the thread address to the native code where they stored in wasm
  // globals which act as a form of TLS. Global constructors trying
  // to access this value will read the wrong value, but that is UB anyway.
  __emscripten_thread_init(tb, /*is_main=*/ !ENVIRONMENT_IS_WORKER, /*is_runtime=*/ 1, /*can_block=*/ !ENVIRONMENT_IS_WEB, /*default_stacksize=*/ 1048576, /*start_profiling=*/ false);
  PThread.threadInitTLS();
};

var maybeExit = () => {
  if (!keepRuntimeAlive()) {
    try {
      if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS); else _exit(EXITSTATUS);
    } catch (e) {
      handleException(e);
    }
  }
};

var callUserCallback = func => {
  if (ABORT) {
    return;
  }
  try {
    func();
    maybeExit();
  } catch (e) {
    handleException(e);
  }
};

var __emscripten_thread_mailbox_await = pthread_ptr => {
  if (typeof Atomics.waitAsync === "function") {
    // Wait on the pthread's initial self-pointer field because it is easy and
    // safe to access from sending threads that need to notify the waiting
    // thread.
    // TODO: How to make this work with wasm64?
    var wait = Atomics.waitAsync(GROWABLE_HEAP_I32(), ((pthread_ptr) >> 2), pthread_ptr);
    wait.value.then(checkMailbox);
    var waitingAsync = pthread_ptr + 128;
    Atomics.store(GROWABLE_HEAP_I32(), ((waitingAsync) >> 2), 1);
  }
};

// If `Atomics.waitAsync` is not implemented, then we will always fall back
// to postMessage and there is no need to do anything here.
var checkMailbox = () => {
  // Only check the mailbox if we have a live pthread runtime. We implement
  // pthread_self to return 0 if there is no live runtime.
  var pthread_ptr = _pthread_self();
  if (pthread_ptr) {
    // If we are using Atomics.waitAsync as our notification mechanism, wait
    // for a notification before processing the mailbox to avoid missing any
    // work that could otherwise arrive after we've finished processing the
    // mailbox and before we're ready for the next notification.
    __emscripten_thread_mailbox_await(pthread_ptr);
    callUserCallback(__emscripten_check_mailbox);
  }
};

var __emscripten_notify_mailbox_postmessage = (targetThread, currThreadId) => {
  if (targetThread == currThreadId) {
    setTimeout(checkMailbox);
  } else if (ENVIRONMENT_IS_PTHREAD) {
    postMessage({
      targetThread,
      cmd: "checkMailbox"
    });
  } else {
    var worker = PThread.pthreads[targetThread];
    if (!worker) {
      return;
    }
    worker.postMessage({
      cmd: "checkMailbox"
    });
  }
};

var proxiedJSCallArgs = [];

var __emscripten_receive_on_main_thread_js = (funcIndex, emAsmAddr, callingThread, numCallArgs, args) => {
  // Sometimes we need to backproxy events to the calling thread (e.g.
  // HTML5 DOM events handlers such as
  // emscripten_set_mousemove_callback()), so keep track in a globally
  // accessible variable about the thread that initiated the proxying.
  proxiedJSCallArgs.length = numCallArgs;
  var b = ((args) >> 3);
  for (var i = 0; i < numCallArgs; i++) {
    proxiedJSCallArgs[i] = GROWABLE_HEAP_F64()[b + i];
  }
  // Proxied JS library funcs use funcIndex and EM_ASM functions use emAsmAddr
  var func = proxiedFunctionTable[funcIndex];
  PThread.currentProxiedOperationCallerThread = callingThread;
  var rtn = func(...proxiedJSCallArgs);
  PThread.currentProxiedOperationCallerThread = 0;
  return rtn;
};

var __emscripten_thread_cleanup = thread => {
  // Called when a thread needs to be cleaned up so it can be reused.
  // A thread is considered reusable when it either returns from its
  // entry point, calls pthread_exit, or acts upon a cancellation.
  // Detached threads are responsible for calling this themselves,
  // otherwise pthread_join is responsible for calling this.
  if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread); else postMessage({
    cmd: "cleanupThread",
    thread
  });
};

var __emscripten_thread_set_strongref = thread => {
  // Called when a thread needs to be strongly referenced.
  // Currently only used for:
  // - keeping the "main" thread alive in PROXY_TO_PTHREAD mode;
  // - crashed threads that needs to propagate the uncaught exception
  //   back to the main thread.
  if (ENVIRONMENT_IS_NODE) {
    PThread.pthreads[thread].ref();
  }
};

function __gmtime_js(time_low, time_high, tmPtr) {
  var time = convertI32PairToI53Checked(time_low, time_high);
  var date = new Date(time * 1e3);
  GROWABLE_HEAP_I32()[((tmPtr) >> 2)] = date.getUTCSeconds();
  GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)] = date.getUTCMinutes();
  GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)] = date.getUTCHours();
  GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)] = date.getUTCDate();
  GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)] = date.getUTCMonth();
  GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] = date.getUTCFullYear() - 1900;
  GROWABLE_HEAP_I32()[(((tmPtr) + (24)) >> 2)] = date.getUTCDay();
  var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
  var yday = ((date.getTime() - start) / (1e3 * 60 * 60 * 24)) | 0;
  GROWABLE_HEAP_I32()[(((tmPtr) + (28)) >> 2)] = yday;
}

var isLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

var MONTH_DAYS_LEAP_CUMULATIVE = [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ];

var MONTH_DAYS_REGULAR_CUMULATIVE = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ];

var ydayFromDate = date => {
  var leap = isLeapYear(date.getFullYear());
  var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
  var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
  // -1 since it's days since Jan 1
  return yday;
};

function __localtime_js(time_low, time_high, tmPtr) {
  var time = convertI32PairToI53Checked(time_low, time_high);
  var date = new Date(time * 1e3);
  GROWABLE_HEAP_I32()[((tmPtr) >> 2)] = date.getSeconds();
  GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)] = date.getMinutes();
  GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)] = date.getHours();
  GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)] = date.getDate();
  GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)] = date.getMonth();
  GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] = date.getFullYear() - 1900;
  GROWABLE_HEAP_I32()[(((tmPtr) + (24)) >> 2)] = date.getDay();
  var yday = ydayFromDate(date) | 0;
  GROWABLE_HEAP_I32()[(((tmPtr) + (28)) >> 2)] = yday;
  GROWABLE_HEAP_I32()[(((tmPtr) + (36)) >> 2)] = -(date.getTimezoneOffset() * 60);
  // Attention: DST is in December in South, and some regions don't have DST at all.
  var start = new Date(date.getFullYear(), 0, 1);
  var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  var winterOffset = start.getTimezoneOffset();
  var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
  GROWABLE_HEAP_I32()[(((tmPtr) + (32)) >> 2)] = dst;
}

/** @suppress {duplicate } */ var setTempRet0 = val => __emscripten_tempret_set(val);

var _setTempRet0 = setTempRet0;

var __mktime_js = function(tmPtr) {
  var ret = (() => {
    var date = new Date(GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] + 1900, GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)], GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)], GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)], GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)], GROWABLE_HEAP_I32()[((tmPtr) >> 2)], 0);
    // There's an ambiguous hour when the time goes back; the tm_isdst field is
    // used to disambiguate it.  Date() basically guesses, so we fix it up if it
    // guessed wrong, or fill in tm_isdst with the guess if it's -1.
    var dst = GROWABLE_HEAP_I32()[(((tmPtr) + (32)) >> 2)];
    var guessedOffset = date.getTimezoneOffset();
    var start = new Date(date.getFullYear(), 0, 1);
    var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dstOffset = Math.min(winterOffset, summerOffset);
    // DST is in December in South
    if (dst < 0) {
      // Attention: some regions don't have DST at all.
      GROWABLE_HEAP_I32()[(((tmPtr) + (32)) >> 2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
    } else if ((dst > 0) != (dstOffset == guessedOffset)) {
      var nonDstOffset = Math.max(winterOffset, summerOffset);
      var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
      // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
      date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
    }
    GROWABLE_HEAP_I32()[(((tmPtr) + (24)) >> 2)] = date.getDay();
    var yday = ydayFromDate(date) | 0;
    GROWABLE_HEAP_I32()[(((tmPtr) + (28)) >> 2)] = yday;
    // To match expected behavior, update fields from date
    GROWABLE_HEAP_I32()[((tmPtr) >> 2)] = date.getSeconds();
    GROWABLE_HEAP_I32()[(((tmPtr) + (4)) >> 2)] = date.getMinutes();
    GROWABLE_HEAP_I32()[(((tmPtr) + (8)) >> 2)] = date.getHours();
    GROWABLE_HEAP_I32()[(((tmPtr) + (12)) >> 2)] = date.getDate();
    GROWABLE_HEAP_I32()[(((tmPtr) + (16)) >> 2)] = date.getMonth();
    GROWABLE_HEAP_I32()[(((tmPtr) + (20)) >> 2)] = date.getYear();
    var timeMs = date.getTime();
    if (isNaN(timeMs)) {
      return -1;
    }
    // Return time in microseconds
    return timeMs / 1e3;
  })();
  return (setTempRet0((tempDouble = ret, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0)), 
  ret >>> 0);
};

var __tzset_js = (timezone, daylight, std_name, dst_name) => {
  // TODO: Use (malleable) environment variables instead of system settings.
  var currentYear = (new Date).getFullYear();
  var winter = new Date(currentYear, 0, 1);
  var summer = new Date(currentYear, 6, 1);
  var winterOffset = winter.getTimezoneOffset();
  var summerOffset = summer.getTimezoneOffset();
  // Local standard timezone offset. Local standard time is not adjusted for
  // daylight savings.  This code uses the fact that getTimezoneOffset returns
  // a greater value during Standard Time versus Daylight Saving Time (DST).
  // Thus it determines the expected output during Standard Time, and it
  // compares whether the output of the given date the same (Standard) or less
  // (DST).
  var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  // timezone is specified as seconds west of UTC ("The external variable
  // `timezone` shall be set to the difference, in seconds, between
  // Coordinated Universal Time (UTC) and local standard time."), the same
  // as returned by stdTimezoneOffset.
  // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
  GROWABLE_HEAP_U32()[((timezone) >> 2)] = stdTimezoneOffset * 60;
  GROWABLE_HEAP_I32()[((daylight) >> 2)] = Number(winterOffset != summerOffset);
  var extractZone = timezoneOffset => {
    // Why inverse sign?
    // Read here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
    var sign = timezoneOffset >= 0 ? "-" : "+";
    var absOffset = Math.abs(timezoneOffset);
    var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
    var minutes = String(absOffset % 60).padStart(2, "0");
    return `UTC${sign}${hours}${minutes}`;
  };
  var winterName = extractZone(winterOffset);
  var summerName = extractZone(summerOffset);
  if (summerOffset < winterOffset) {
    // Northern hemisphere
    stringToUTF8(winterName, std_name, 17);
    stringToUTF8(summerName, dst_name, 17);
  } else {
    stringToUTF8(winterName, dst_name, 17);
    stringToUTF8(summerName, std_name, 17);
  }
};

var warnOnce = text => {
  warnOnce.shown ||= {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
    err(text);
  }
};

var _emscripten_check_blocking_allowed = () => {};

var _emscripten_date_now = () => Date.now();

var runtimeKeepalivePush = () => {
  runtimeKeepaliveCounter += 1;
};

var _emscripten_exit_with_live_runtime = () => {
  runtimeKeepalivePush();
  throw "unwind";
};

var getHeapMax = () => // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
// full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
// for any code that deals with heap sizes, which would require special
// casing all heap size related code to treat 0 specially.
2147483648;

var _emscripten_get_heap_max = () => getHeapMax();

var _emscripten_get_now = () => performance.timeOrigin + performance.now();

var _emscripten_num_logical_cores = () => ENVIRONMENT_IS_NODE ? require("os").cpus().length : navigator["hardwareConcurrency"];

var growMemory = size => {
  var b = wasmMemory.buffer;
  var pages = (size - b.byteLength + 65535) / 65536;
  try {
    // round size grow request up to wasm page size (fixed 64KB per spec)
    wasmMemory.grow(pages);
    // .grow() takes a delta compared to the previous size
    updateMemoryViews();
    return 1;
  } /*success*/ catch (e) {}
};

// implicit 0 return to save code size (caller will cast "undefined" into 0
// anyhow)
var _emscripten_resize_heap = requestedSize => {
  var oldSize = GROWABLE_HEAP_U8().length;
  // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
  requestedSize >>>= 0;
  // With multithreaded builds, races can happen (another thread might increase the size
  // in between), so return a failure, and let the caller retry.
  if (requestedSize <= oldSize) {
    return false;
  }
  // Memory resize rules:
  // 1.  Always increase heap size to at least the requested size, rounded up
  //     to next page multiple.
  // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
  //     geometrically: increase the heap size according to
  //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
  //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
  // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
  //     linearly: increase the heap size by at least
  //     MEMORY_GROWTH_LINEAR_STEP bytes.
  // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
  //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
  // 4.  If we were unable to allocate as much memory, it may be due to
  //     over-eager decision to excessively reserve due to (3) above.
  //     Hence if an allocation fails, cut down on the amount of excess
  //     growth, in an attempt to succeed to perform a smaller allocation.
  // A limit is set for how much we can grow. We should not exceed that
  // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
  var maxHeapSize = getHeapMax();
  if (requestedSize > maxHeapSize) {
    return false;
  }
  // Loop through potential heap size increases. If we attempt a too eager
  // reservation that fails, cut down on the attempted size and reserve a
  // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
  for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
    var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
    // ensure geometric growth
    // but limit overreserving (default to capping at +96MB overgrowth at most)
    overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
    var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
    var replacement = growMemory(newSize);
    if (replacement) {
      return true;
    }
  }
  return false;
};

var ENV = {};

var getExecutableName = () => thisProgram || "./this.program";

var getEnvStrings = () => {
  if (!getEnvStrings.strings) {
    // Default values.
    // Browser language detection #8751
    var lang = ((typeof navigator == "object" && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8";
    var env = {
      "USER": "web_user",
      "LOGNAME": "web_user",
      "PATH": "/",
      "PWD": "/",
      "HOME": "/home/web_user",
      "LANG": lang,
      "_": getExecutableName()
    };
    // Apply the user-provided values, if any.
    for (var x in ENV) {
      // x is a key in ENV; if ENV[x] is undefined, that means it was
      // explicitly set to be so. We allow user code to do that to
      // force variables with default values to remain unset.
      if (ENV[x] === undefined) delete env[x]; else env[x] = ENV[x];
    }
    var strings = [];
    for (var x in env) {
      strings.push(`${x}=${env[x]}`);
    }
    getEnvStrings.strings = strings;
  }
  return getEnvStrings.strings;
};

var stringToAscii = (str, buffer) => {
  for (var i = 0; i < str.length; ++i) {
    GROWABLE_HEAP_I8()[buffer++] = str.charCodeAt(i);
  }
  // Null-terminate the string
  GROWABLE_HEAP_I8()[buffer] = 0;
};

var _environ_get = function(__environ, environ_buf) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(16, 0, 1, __environ, environ_buf);
  var bufSize = 0;
  getEnvStrings().forEach((string, i) => {
    var ptr = environ_buf + bufSize;
    GROWABLE_HEAP_U32()[(((__environ) + (i * 4)) >> 2)] = ptr;
    stringToAscii(string, ptr);
    bufSize += string.length + 1;
  });
  return 0;
};

var _environ_sizes_get = function(penviron_count, penviron_buf_size) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(17, 0, 1, penviron_count, penviron_buf_size);
  var strings = getEnvStrings();
  GROWABLE_HEAP_U32()[((penviron_count) >> 2)] = strings.length;
  var bufSize = 0;
  strings.forEach(string => bufSize += string.length + 1);
  GROWABLE_HEAP_U32()[((penviron_buf_size) >> 2)] = bufSize;
  return 0;
};

function _fd_close(fd) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(18, 0, 1, fd);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.close(stream);
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}

function _fd_fdstat_get(fd, pbuf) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(19, 0, 1, fd, pbuf);
  try {
    var rightsBase = 0;
    var rightsInheriting = 0;
    var flags = 0;
    {
      var stream = SYSCALLS.getStreamFromFD(fd);
      // All character devices are terminals (other things a Linux system would
      // assume is a character device, like the mouse, we have special APIs for).
      var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
    }
    GROWABLE_HEAP_I8()[pbuf] = type;
    GROWABLE_HEAP_I16()[(((pbuf) + (2)) >> 1)] = flags;
    (tempI64 = [ rightsBase >>> 0, (tempDouble = rightsBase, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((pbuf) + (8)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((pbuf) + (12)) >> 2)] = tempI64[1]);
    (tempI64 = [ rightsInheriting >>> 0, (tempDouble = rightsInheriting, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[(((pbuf) + (16)) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((pbuf) + (20)) >> 2)] = tempI64[1]);
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}

/** @param {number=} offset */ var doReadv = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = GROWABLE_HEAP_U32()[((iov) >> 2)];
    var len = GROWABLE_HEAP_U32()[(((iov) + (4)) >> 2)];
    iov += 8;
    var curr = FS.read(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) break;
    // nothing more to read
    if (typeof offset != "undefined") {
      offset += curr;
    }
  }
  return ret;
};

function _fd_read(fd, iov, iovcnt, pnum) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(20, 0, 1, fd, iov, iovcnt, pnum);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doReadv(stream, iov, iovcnt);
    GROWABLE_HEAP_U32()[((pnum) >> 2)] = num;
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(21, 0, 1, fd, offset_low, offset_high, whence, newOffset);
  var offset = convertI32PairToI53Checked(offset_low, offset_high);
  try {
    if (isNaN(offset)) return 61;
    var stream = SYSCALLS.getStreamFromFD(fd);
    FS.llseek(stream, offset, whence);
    (tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, (+(Math.abs(tempDouble))) >= 1 ? (tempDouble > 0 ? (+(Math.floor((tempDouble) / 4294967296))) >>> 0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble))) >>> 0)) / 4294967296))))) >>> 0) : 0) ], 
    GROWABLE_HEAP_I32()[((newOffset) >> 2)] = tempI64[0], GROWABLE_HEAP_I32()[(((newOffset) + (4)) >> 2)] = tempI64[1]);
    if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
    // reset readdir state
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}

/** @param {number=} offset */ var doWritev = (stream, iov, iovcnt, offset) => {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
    var ptr = GROWABLE_HEAP_U32()[((iov) >> 2)];
    var len = GROWABLE_HEAP_U32()[(((iov) + (4)) >> 2)];
    iov += 8;
    var curr = FS.write(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
    if (curr < 0) return -1;
    ret += curr;
    if (curr < len) {
      // No more space to write.
      break;
    }
    if (typeof offset != "undefined") {
      offset += curr;
    }
  }
  return ret;
};

function _fd_write(fd, iov, iovcnt, pnum) {
  if (ENVIRONMENT_IS_PTHREAD) return proxyToMainThread(22, 0, 1, fd, iov, iovcnt, pnum);
  try {
    var stream = SYSCALLS.getStreamFromFD(fd);
    var num = doWritev(stream, iov, iovcnt);
    GROWABLE_HEAP_U32()[((pnum) >> 2)] = num;
    return 0;
  } catch (e) {
    if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
    return e.errno;
  }
}

var runAndAbortIfError = func => {
  try {
    return func();
  } catch (e) {
    abort(e);
  }
};

var sigToWasmTypes = sig => {
  var typeNames = {
    "i": "i32",
    "j": "i64",
    "f": "f32",
    "d": "f64",
    "e": "externref",
    "p": "i32"
  };
  var type = {
    parameters: [],
    results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
  };
  for (var i = 1; i < sig.length; ++i) {
    type.parameters.push(typeNames[sig[i]]);
  }
  return type;
};

var runtimeKeepalivePop = () => {
  runtimeKeepaliveCounter -= 1;
};

var Asyncify = {
  instrumentWasmImports(imports) {
    var importPattern = /^(libavjs_wait_reader|invoke_.*|__asyncjs__.*)$/;
    for (let [x, original] of Object.entries(imports)) {
      if (typeof original == "function") {
        let isAsyncifyImport = original.isAsync || importPattern.test(x);
      }
    }
  },
  instrumentWasmExports(exports) {
    var ret = {};
    for (let [x, original] of Object.entries(exports)) {
      if (typeof original == "function") {
        ret[x] = (...args) => {
          Asyncify.exportCallStack.push(x);
          try {
            return original(...args);
          } finally {
            if (!ABORT) {
              var y = Asyncify.exportCallStack.pop();
              Asyncify.maybeStopUnwind();
            }
          }
        };
      } else {
        ret[x] = original;
      }
    }
    return ret;
  },
  State: {
    Normal: 0,
    Unwinding: 1,
    Rewinding: 2,
    Disabled: 3
  },
  state: 0,
  StackSize: 4096,
  currData: null,
  handleSleepReturnValue: 0,
  exportCallStack: [],
  callStackNameToId: {},
  callStackIdToName: {},
  callStackId: 0,
  asyncPromiseHandlers: null,
  sleepCallbacks: [],
  getCallStackId(funcName) {
    var id = Asyncify.callStackNameToId[funcName];
    if (id === undefined) {
      id = Asyncify.callStackId++;
      Asyncify.callStackNameToId[funcName] = id;
      Asyncify.callStackIdToName[id] = funcName;
    }
    return id;
  },
  maybeStopUnwind() {
    if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
      // We just finished unwinding.
      // Be sure to set the state before calling any other functions to avoid
      // possible infinite recursion here (For example in debug pthread builds
      // the dbg() function itself can call back into WebAssembly to get the
      // current pthread_self() pointer).
      Asyncify.state = Asyncify.State.Normal;
      runtimeKeepalivePush();
      // Keep the runtime alive so that a re-wind can be done later.
      runAndAbortIfError(_asyncify_stop_unwind);
      if (typeof Fibers != "undefined") {
        Fibers.trampoline();
      }
    }
  },
  whenDone() {
    return new Promise((resolve, reject) => {
      Asyncify.asyncPromiseHandlers = {
        resolve,
        reject
      };
    });
  },
  allocateData() {
    // An asyncify data structure has three fields:
    //  0  current stack pos
    //  4  max stack pos
    //  8  id of function at bottom of the call stack (callStackIdToName[id] == name of js function)
    // The Asyncify ABI only interprets the first two fields, the rest is for the runtime.
    // We also embed a stack in the same memory region here, right next to the structure.
    // This struct is also defined as asyncify_data_t in emscripten/fiber.h
    var ptr = _malloc(12 + Asyncify.StackSize);
    Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
    Asyncify.setDataRewindFunc(ptr);
    return ptr;
  },
  setDataHeader(ptr, stack, stackSize) {
    GROWABLE_HEAP_U32()[((ptr) >> 2)] = stack;
    GROWABLE_HEAP_U32()[(((ptr) + (4)) >> 2)] = stack + stackSize;
  },
  setDataRewindFunc(ptr) {
    var bottomOfCallStack = Asyncify.exportCallStack[0];
    var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
    GROWABLE_HEAP_I32()[(((ptr) + (8)) >> 2)] = rewindId;
  },
  getDataRewindFuncName(ptr) {
    var id = GROWABLE_HEAP_I32()[(((ptr) + (8)) >> 2)];
    var name = Asyncify.callStackIdToName[id];
    return name;
  },
  getDataRewindFunc(name) {
    var func = wasmExports[name];
    return func;
  },
  doRewind(ptr) {
    var name = Asyncify.getDataRewindFuncName(ptr);
    var func = Asyncify.getDataRewindFunc(name);
    // Once we have rewound and the stack we no longer need to artificially
    // keep the runtime alive.
    runtimeKeepalivePop();
    return func();
  },
  handleSleep(startAsync) {
    if (ABORT) return;
    if (Asyncify.state === Asyncify.State.Normal) {
      // Prepare to sleep. Call startAsync, and see what happens:
      // if the code decided to call our callback synchronously,
      // then no async operation was in fact begun, and we don't
      // need to do anything.
      var reachedCallback = false;
      var reachedAfterCallback = false;
      startAsync((handleSleepReturnValue = 0) => {
        if (ABORT) return;
        Asyncify.handleSleepReturnValue = handleSleepReturnValue;
        reachedCallback = true;
        if (!reachedAfterCallback) {
          // We are happening synchronously, so no need for async.
          return;
        }
        Asyncify.state = Asyncify.State.Rewinding;
        runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
        if (typeof MainLoop != "undefined" && MainLoop.func) {
          MainLoop.resume();
        }
        var asyncWasmReturnValue, isError = false;
        try {
          asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
        } catch (err) {
          asyncWasmReturnValue = err;
          isError = true;
        }
        // Track whether the return value was handled by any promise handlers.
        var handled = false;
        if (!Asyncify.currData) {
          // All asynchronous execution has finished.
          // `asyncWasmReturnValue` now contains the final
          // return value of the exported async WASM function.
          // Note: `asyncWasmReturnValue` is distinct from
          // `Asyncify.handleSleepReturnValue`.
          // `Asyncify.handleSleepReturnValue` contains the return
          // value of the last C function to have executed
          // `Asyncify.handleSleep()`, where as `asyncWasmReturnValue`
          // contains the return value of the exported WASM function
          // that may have called C functions that
          // call `Asyncify.handleSleep()`.
          var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
          if (asyncPromiseHandlers) {
            Asyncify.asyncPromiseHandlers = null;
            (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
            handled = true;
          }
        }
        if (isError && !handled) {
          // If there was an error and it was not handled by now, we have no choice but to
          // rethrow that error into the global scope where it can be caught only by
          // `onerror` or `onunhandledpromiserejection`.
          throw asyncWasmReturnValue;
        }
      });
      reachedAfterCallback = true;
      if (!reachedCallback) {
        // A true async operation was begun; start a sleep.
        Asyncify.state = Asyncify.State.Unwinding;
        // TODO: reuse, don't alloc/free every sleep
        Asyncify.currData = Asyncify.allocateData();
        if (typeof MainLoop != "undefined" && MainLoop.func) {
          MainLoop.pause();
        }
        runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
      }
    } else if (Asyncify.state === Asyncify.State.Rewinding) {
      // Stop a resume.
      Asyncify.state = Asyncify.State.Normal;
      runAndAbortIfError(_asyncify_stop_rewind);
      _free(Asyncify.currData);
      Asyncify.currData = null;
      // Call all sleep callbacks now that the sleep-resume is all done.
      Asyncify.sleepCallbacks.forEach(callUserCallback);
    } else {
      abort(`invalid state: ${Asyncify.state}`);
    }
    return Asyncify.handleSleepReturnValue;
  },
  handleAsync(startAsync) {
    return Asyncify.handleSleep(wakeUp => {
      // TODO: add error handling as a second param when handleSleep implements it.
      startAsync().then(wakeUp);
    });
  }
};

var getCFunc = ident => {
  var func = Module["_" + ident];
  // closure exported function
  return func;
};

var writeArrayToMemory = (array, buffer) => {
  GROWABLE_HEAP_I8().set(array, buffer);
};

var stringToUTF8OnStack = str => {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8(str, ret, size);
  return ret;
};

/**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */ var ccall = (ident, returnType, argTypes, args, opts) => {
  // For fast lookup of conversion functions
  var toC = {
    "string": str => {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) {
        // null string
        ret = stringToUTF8OnStack(str);
      }
      return ret;
    },
    "array": arr => {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };
  function convertReturnValue(ret) {
    if (returnType === "string") {
      return UTF8ToString(ret);
    }
    if (returnType === "boolean") return Boolean(ret);
    return ret;
  }
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  // Data for a previous async operation that was in flight before us.
  var previousAsync = Asyncify.currData;
  var ret = func(...cArgs);
  function onDone(ret) {
    runtimeKeepalivePop();
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  var asyncMode = opts?.async;
  // Keep the runtime alive through all calls. Note that this call might not be
  // async, but for simplicity we push and pop in all calls.
  runtimeKeepalivePush();
  if (Asyncify.currData != previousAsync) {
    // This is a new async operation. The wasm is paused and has unwound its stack.
    // We need to return a Promise that resolves the return value
    // once the stack is rewound and execution finishes.
    return Asyncify.whenDone().then(onDone);
  }
  ret = onDone(ret);
  // If this is an async ccall, ensure we return a promise
  if (asyncMode) return Promise.resolve(ret);
  return ret;
};

/**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */ var cwrap = (ident, returnType, argTypes, opts) => {
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = !argTypes || argTypes.every(type => type === "number" || type === "boolean");
  var numericRet = returnType !== "string";
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return (...args) => ccall(ident, returnType, argTypes, args, opts);
};

PThread.init();

FS.createPreloadedFile = FS_createPreloadedFile;

FS.staticInit();

// proxiedFunctionTable specifies the list of functions that can be called
// either synchronously or asynchronously from other threads in postMessage()d
// or internally queued events. This way a pthread in a Worker can synchronously
// access e.g. the DOM on the main thread.
var proxiedFunctionTable = [ _proc_exit, exitOnMainThread, pthreadCreateProxied, ___syscall_dup3, ___syscall_faccessat, ___syscall_fcntl64, ___syscall_fstat64, ___syscall_getdents64, ___syscall_ioctl, ___syscall_lstat64, ___syscall_newfstatat, ___syscall_openat, ___syscall_renameat, ___syscall_rmdir, ___syscall_stat64, ___syscall_unlinkat, _environ_get, _environ_sizes_get, _fd_close, _fd_fdstat_get, _fd_read, _fd_seek, _fd_write ];

var wasmImports;

function assignWasmImports() {
  wasmImports = {
    /** @export */ __pthread_create_js: ___pthread_create_js,
    /** @export */ __syscall_dup3: ___syscall_dup3,
    /** @export */ __syscall_faccessat: ___syscall_faccessat,
    /** @export */ __syscall_fcntl64: ___syscall_fcntl64,
    /** @export */ __syscall_fstat64: ___syscall_fstat64,
    /** @export */ __syscall_getdents64: ___syscall_getdents64,
    /** @export */ __syscall_ioctl: ___syscall_ioctl,
    /** @export */ __syscall_lstat64: ___syscall_lstat64,
    /** @export */ __syscall_newfstatat: ___syscall_newfstatat,
    /** @export */ __syscall_openat: ___syscall_openat,
    /** @export */ __syscall_renameat: ___syscall_renameat,
    /** @export */ __syscall_rmdir: ___syscall_rmdir,
    /** @export */ __syscall_stat64: ___syscall_stat64,
    /** @export */ __syscall_unlinkat: ___syscall_unlinkat,
    /** @export */ _abort_js: __abort_js,
    /** @export */ _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
    /** @export */ _emscripten_init_main_thread_js: __emscripten_init_main_thread_js,
    /** @export */ _emscripten_notify_mailbox_postmessage: __emscripten_notify_mailbox_postmessage,
    /** @export */ _emscripten_receive_on_main_thread_js: __emscripten_receive_on_main_thread_js,
    /** @export */ _emscripten_thread_cleanup: __emscripten_thread_cleanup,
    /** @export */ _emscripten_thread_mailbox_await: __emscripten_thread_mailbox_await,
    /** @export */ _emscripten_thread_set_strongref: __emscripten_thread_set_strongref,
    /** @export */ _gmtime_js: __gmtime_js,
    /** @export */ _localtime_js: __localtime_js,
    /** @export */ _mktime_js: __mktime_js,
    /** @export */ _tzset_js: __tzset_js,
    /** @export */ emscripten_check_blocking_allowed: _emscripten_check_blocking_allowed,
    /** @export */ emscripten_date_now: _emscripten_date_now,
    /** @export */ emscripten_exit_with_live_runtime: _emscripten_exit_with_live_runtime,
    /** @export */ emscripten_get_heap_max: _emscripten_get_heap_max,
    /** @export */ emscripten_get_now: _emscripten_get_now,
    /** @export */ emscripten_num_logical_cores: _emscripten_num_logical_cores,
    /** @export */ emscripten_resize_heap: _emscripten_resize_heap,
    /** @export */ environ_get: _environ_get,
    /** @export */ environ_sizes_get: _environ_sizes_get,
    /** @export */ exit: _exit,
    /** @export */ fd_close: _fd_close,
    /** @export */ fd_fdstat_get: _fd_fdstat_get,
    /** @export */ fd_read: _fd_read,
    /** @export */ fd_seek: _fd_seek,
    /** @export */ fd_write: _fd_write,
    /** @export */ libavjs_main_thread,
    /** @export */ libavjs_wait_reader,
    /** @export */ memory: wasmMemory
  };
}

var wasmExports = createWasm();

var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports["__wasm_call_ctors"])();

var _ff_nothing = Module["_ff_nothing"] = () => (_ff_nothing = Module["_ff_nothing"] = wasmExports["ff_nothing"])();

var _AVFrame_crop_bottom = Module["_AVFrame_crop_bottom"] = a0 => (_AVFrame_crop_bottom = Module["_AVFrame_crop_bottom"] = wasmExports["AVFrame_crop_bottom"])(a0);

var _AVFrame_crop_bottom_s = Module["_AVFrame_crop_bottom_s"] = (a0, a1) => (_AVFrame_crop_bottom_s = Module["_AVFrame_crop_bottom_s"] = wasmExports["AVFrame_crop_bottom_s"])(a0, a1);

var _AVFrame_crop_left = Module["_AVFrame_crop_left"] = a0 => (_AVFrame_crop_left = Module["_AVFrame_crop_left"] = wasmExports["AVFrame_crop_left"])(a0);

var _AVFrame_crop_left_s = Module["_AVFrame_crop_left_s"] = (a0, a1) => (_AVFrame_crop_left_s = Module["_AVFrame_crop_left_s"] = wasmExports["AVFrame_crop_left_s"])(a0, a1);

var _AVFrame_crop_right = Module["_AVFrame_crop_right"] = a0 => (_AVFrame_crop_right = Module["_AVFrame_crop_right"] = wasmExports["AVFrame_crop_right"])(a0);

var _AVFrame_crop_right_s = Module["_AVFrame_crop_right_s"] = (a0, a1) => (_AVFrame_crop_right_s = Module["_AVFrame_crop_right_s"] = wasmExports["AVFrame_crop_right_s"])(a0, a1);

var _AVFrame_crop_top = Module["_AVFrame_crop_top"] = a0 => (_AVFrame_crop_top = Module["_AVFrame_crop_top"] = wasmExports["AVFrame_crop_top"])(a0);

var _AVFrame_crop_top_s = Module["_AVFrame_crop_top_s"] = (a0, a1) => (_AVFrame_crop_top_s = Module["_AVFrame_crop_top_s"] = wasmExports["AVFrame_crop_top_s"])(a0, a1);

var _AVFrame_data_a = Module["_AVFrame_data_a"] = (a0, a1) => (_AVFrame_data_a = Module["_AVFrame_data_a"] = wasmExports["AVFrame_data_a"])(a0, a1);

var _AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = (a0, a1, a2) => (_AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = wasmExports["AVFrame_data_a_s"])(a0, a1, a2);

var _AVFrame_format = Module["_AVFrame_format"] = a0 => (_AVFrame_format = Module["_AVFrame_format"] = wasmExports["AVFrame_format"])(a0);

var _AVFrame_format_s = Module["_AVFrame_format_s"] = (a0, a1) => (_AVFrame_format_s = Module["_AVFrame_format_s"] = wasmExports["AVFrame_format_s"])(a0, a1);

var _AVFrame_height = Module["_AVFrame_height"] = a0 => (_AVFrame_height = Module["_AVFrame_height"] = wasmExports["AVFrame_height"])(a0);

var _AVFrame_height_s = Module["_AVFrame_height_s"] = (a0, a1) => (_AVFrame_height_s = Module["_AVFrame_height_s"] = wasmExports["AVFrame_height_s"])(a0, a1);

var _AVFrame_key_frame = Module["_AVFrame_key_frame"] = a0 => (_AVFrame_key_frame = Module["_AVFrame_key_frame"] = wasmExports["AVFrame_key_frame"])(a0);

var _AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = (a0, a1) => (_AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = wasmExports["AVFrame_key_frame_s"])(a0, a1);

var _AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = (a0, a1) => (_AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = wasmExports["AVFrame_linesize_a"])(a0, a1);

var _AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = (a0, a1, a2) => (_AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = wasmExports["AVFrame_linesize_a_s"])(a0, a1, a2);

var _AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = a0 => (_AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = wasmExports["AVFrame_nb_samples"])(a0);

var _AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = (a0, a1) => (_AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = wasmExports["AVFrame_nb_samples_s"])(a0, a1);

var _AVFrame_pict_type = Module["_AVFrame_pict_type"] = a0 => (_AVFrame_pict_type = Module["_AVFrame_pict_type"] = wasmExports["AVFrame_pict_type"])(a0);

var _AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = (a0, a1) => (_AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = wasmExports["AVFrame_pict_type_s"])(a0, a1);

var _AVFrame_pts = Module["_AVFrame_pts"] = a0 => (_AVFrame_pts = Module["_AVFrame_pts"] = wasmExports["AVFrame_pts"])(a0);

var _AVFrame_ptshi = Module["_AVFrame_ptshi"] = a0 => (_AVFrame_ptshi = Module["_AVFrame_ptshi"] = wasmExports["AVFrame_ptshi"])(a0);

var _AVFrame_pts_s = Module["_AVFrame_pts_s"] = (a0, a1) => (_AVFrame_pts_s = Module["_AVFrame_pts_s"] = wasmExports["AVFrame_pts_s"])(a0, a1);

var _AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = (a0, a1) => (_AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = wasmExports["AVFrame_ptshi_s"])(a0, a1);

var _AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = a0 => (_AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = wasmExports["AVFrame_sample_rate"])(a0);

var _AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = (a0, a1) => (_AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = wasmExports["AVFrame_sample_rate_s"])(a0, a1);

var _AVFrame_width = Module["_AVFrame_width"] = a0 => (_AVFrame_width = Module["_AVFrame_width"] = wasmExports["AVFrame_width"])(a0);

var _AVFrame_width_s = Module["_AVFrame_width_s"] = (a0, a1) => (_AVFrame_width_s = Module["_AVFrame_width_s"] = wasmExports["AVFrame_width_s"])(a0, a1);

var _AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = a0 => (_AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = wasmExports["AVFrame_sample_aspect_ratio_num"])(a0);

var _AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = a0 => (_AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = wasmExports["AVFrame_sample_aspect_ratio_den"])(a0);

var _AVFrame_sample_aspect_ratio_num_s = Module["_AVFrame_sample_aspect_ratio_num_s"] = (a0, a1) => (_AVFrame_sample_aspect_ratio_num_s = Module["_AVFrame_sample_aspect_ratio_num_s"] = wasmExports["AVFrame_sample_aspect_ratio_num_s"])(a0, a1);

var _AVFrame_sample_aspect_ratio_den_s = Module["_AVFrame_sample_aspect_ratio_den_s"] = (a0, a1) => (_AVFrame_sample_aspect_ratio_den_s = Module["_AVFrame_sample_aspect_ratio_den_s"] = wasmExports["AVFrame_sample_aspect_ratio_den_s"])(a0, a1);

var _AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = (a0, a1, a2) => (_AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = wasmExports["AVFrame_sample_aspect_ratio_s"])(a0, a1, a2);

var _AVFrame_time_base_num = Module["_AVFrame_time_base_num"] = a0 => (_AVFrame_time_base_num = Module["_AVFrame_time_base_num"] = wasmExports["AVFrame_time_base_num"])(a0);

var _AVFrame_time_base_den = Module["_AVFrame_time_base_den"] = a0 => (_AVFrame_time_base_den = Module["_AVFrame_time_base_den"] = wasmExports["AVFrame_time_base_den"])(a0);

var _AVFrame_time_base_num_s = Module["_AVFrame_time_base_num_s"] = (a0, a1) => (_AVFrame_time_base_num_s = Module["_AVFrame_time_base_num_s"] = wasmExports["AVFrame_time_base_num_s"])(a0, a1);

var _AVFrame_time_base_den_s = Module["_AVFrame_time_base_den_s"] = (a0, a1) => (_AVFrame_time_base_den_s = Module["_AVFrame_time_base_den_s"] = wasmExports["AVFrame_time_base_den_s"])(a0, a1);

var _AVFrame_time_base_s = Module["_AVFrame_time_base_s"] = (a0, a1, a2) => (_AVFrame_time_base_s = Module["_AVFrame_time_base_s"] = wasmExports["AVFrame_time_base_s"])(a0, a1, a2);

var _AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = (a0, a1, a2) => (_AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = wasmExports["AVFrame_channel_layoutmask_s"])(a0, a1, a2);

var _AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = a0 => (_AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = wasmExports["AVFrame_channel_layoutmask"])(a0);

var _AVFrame_channels = Module["_AVFrame_channels"] = a0 => (_AVFrame_channels = Module["_AVFrame_channels"] = wasmExports["AVFrame_channels"])(a0);

var _AVFrame_channels_s = Module["_AVFrame_channels_s"] = (a0, a1) => (_AVFrame_channels_s = Module["_AVFrame_channels_s"] = wasmExports["AVFrame_channels_s"])(a0, a1);

var _AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = a0 => (_AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = wasmExports["AVFrame_ch_layout_nb_channels"])(a0);

var _AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = (a0, a1) => (_AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = wasmExports["AVFrame_ch_layout_nb_channels_s"])(a0, a1);

var _AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = a0 => (_AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = wasmExports["AVFrame_channel_layout"])(a0);

var _AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = a0 => (_AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = wasmExports["AVFrame_channel_layouthi"])(a0);

var _AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = (a0, a1) => (_AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = wasmExports["AVFrame_channel_layout_s"])(a0, a1);

var _AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = (a0, a1) => (_AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = wasmExports["AVFrame_channel_layouthi_s"])(a0, a1);

var _ff_frame_rescale_ts_js = Module["_ff_frame_rescale_ts_js"] = (a0, a1, a2, a3, a4) => (_ff_frame_rescale_ts_js = Module["_ff_frame_rescale_ts_js"] = wasmExports["ff_frame_rescale_ts_js"])(a0, a1, a2, a3, a4);

var _AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = a0 => (_AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = wasmExports["AVPixFmtDescriptor_flags"])(a0);

var _AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = (a0, a1, a2) => (_AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = wasmExports["AVPixFmtDescriptor_flags_s"])(a0, a1, a2);

var _AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = a0 => (_AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = wasmExports["AVPixFmtDescriptor_nb_components"])(a0);

var _AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = (a0, a1) => (_AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = wasmExports["AVPixFmtDescriptor_nb_components_s"])(a0, a1);

var _AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = a0 => (_AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = wasmExports["AVPixFmtDescriptor_log2_chroma_h"])(a0);

var _AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = (a0, a1) => (_AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = wasmExports["AVPixFmtDescriptor_log2_chroma_h_s"])(a0, a1);

var _AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = a0 => (_AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = wasmExports["AVPixFmtDescriptor_log2_chroma_w"])(a0);

var _AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = (a0, a1) => (_AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = wasmExports["AVPixFmtDescriptor_log2_chroma_w_s"])(a0, a1);

var _AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = (a0, a1) => (_AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = wasmExports["AVPixFmtDescriptor_comp_depth"])(a0, a1);

var _av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = (a0, a1, a2, a3, a4, a5) => (_av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = wasmExports["av_opt_set_int_list_js"])(a0, a1, a2, a3, a4, a5);

var _AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = a0 => (_AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = wasmExports["AVCodec_sample_fmts"])(a0);

var _AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = (a0, a1) => (_AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = wasmExports["AVCodec_sample_fmts_s"])(a0, a1);

var _AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = (a0, a1) => (_AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = wasmExports["AVCodec_sample_fmts_a"])(a0, a1);

var _AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = (a0, a1, a2) => (_AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = wasmExports["AVCodec_sample_fmts_a_s"])(a0, a1, a2);

var _AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = a0 => (_AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = wasmExports["AVCodec_supported_samplerates"])(a0);

var _AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = (a0, a1) => (_AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = wasmExports["AVCodec_supported_samplerates_s"])(a0, a1);

var _AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = (a0, a1) => (_AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = wasmExports["AVCodec_supported_samplerates_a"])(a0, a1);

var _AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = (a0, a1, a2) => (_AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = wasmExports["AVCodec_supported_samplerates_a_s"])(a0, a1, a2);

var _AVCodec_type = Module["_AVCodec_type"] = a0 => (_AVCodec_type = Module["_AVCodec_type"] = wasmExports["AVCodec_type"])(a0);

var _AVCodec_type_s = Module["_AVCodec_type_s"] = (a0, a1) => (_AVCodec_type_s = Module["_AVCodec_type_s"] = wasmExports["AVCodec_type_s"])(a0, a1);

var _AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = a0 => (_AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = wasmExports["AVCodecContext_codec_id"])(a0);

var _AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = (a0, a1) => (_AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = wasmExports["AVCodecContext_codec_id_s"])(a0, a1);

var _AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = a0 => (_AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = wasmExports["AVCodecContext_codec_type"])(a0);

var _AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = (a0, a1) => (_AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = wasmExports["AVCodecContext_codec_type_s"])(a0, a1);

var _AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = a0 => (_AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = wasmExports["AVCodecContext_bit_rate"])(a0);

var _AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = a0 => (_AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = wasmExports["AVCodecContext_bit_ratehi"])(a0);

var _AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = (a0, a1) => (_AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = wasmExports["AVCodecContext_bit_rate_s"])(a0, a1);

var _AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = (a0, a1) => (_AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = wasmExports["AVCodecContext_bit_ratehi_s"])(a0, a1);

var _AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = a0 => (_AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = wasmExports["AVCodecContext_extradata"])(a0);

var _AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = (a0, a1) => (_AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = wasmExports["AVCodecContext_extradata_s"])(a0, a1);

var _AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = a0 => (_AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = wasmExports["AVCodecContext_extradata_size"])(a0);

var _AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = (a0, a1) => (_AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = wasmExports["AVCodecContext_extradata_size_s"])(a0, a1);

var _AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = a0 => (_AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = wasmExports["AVCodecContext_frame_size"])(a0);

var _AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = (a0, a1) => (_AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = wasmExports["AVCodecContext_frame_size_s"])(a0, a1);

var _AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = a0 => (_AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = wasmExports["AVCodecContext_gop_size"])(a0);

var _AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = (a0, a1) => (_AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = wasmExports["AVCodecContext_gop_size_s"])(a0, a1);

var _AVCodecContext_height = Module["_AVCodecContext_height"] = a0 => (_AVCodecContext_height = Module["_AVCodecContext_height"] = wasmExports["AVCodecContext_height"])(a0);

var _AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = (a0, a1) => (_AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = wasmExports["AVCodecContext_height_s"])(a0, a1);

var _AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = a0 => (_AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = wasmExports["AVCodecContext_keyint_min"])(a0);

var _AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = (a0, a1) => (_AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = wasmExports["AVCodecContext_keyint_min_s"])(a0, a1);

var _AVCodecContext_level = Module["_AVCodecContext_level"] = a0 => (_AVCodecContext_level = Module["_AVCodecContext_level"] = wasmExports["AVCodecContext_level"])(a0);

var _AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = (a0, a1) => (_AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = wasmExports["AVCodecContext_level_s"])(a0, a1);

var _AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = a0 => (_AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = wasmExports["AVCodecContext_max_b_frames"])(a0);

var _AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = (a0, a1) => (_AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = wasmExports["AVCodecContext_max_b_frames_s"])(a0, a1);

var _AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = a0 => (_AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = wasmExports["AVCodecContext_pix_fmt"])(a0);

var _AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = (a0, a1) => (_AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = wasmExports["AVCodecContext_pix_fmt_s"])(a0, a1);

var _AVCodecContext_profile = Module["_AVCodecContext_profile"] = a0 => (_AVCodecContext_profile = Module["_AVCodecContext_profile"] = wasmExports["AVCodecContext_profile"])(a0);

var _AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = (a0, a1) => (_AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = wasmExports["AVCodecContext_profile_s"])(a0, a1);

var _AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = a0 => (_AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = wasmExports["AVCodecContext_rc_max_rate"])(a0);

var _AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = a0 => (_AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = wasmExports["AVCodecContext_rc_max_ratehi"])(a0);

var _AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = (a0, a1) => (_AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = wasmExports["AVCodecContext_rc_max_rate_s"])(a0, a1);

var _AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = (a0, a1) => (_AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = wasmExports["AVCodecContext_rc_max_ratehi_s"])(a0, a1);

var _AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = a0 => (_AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = wasmExports["AVCodecContext_rc_min_rate"])(a0);

var _AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = a0 => (_AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = wasmExports["AVCodecContext_rc_min_ratehi"])(a0);

var _AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = (a0, a1) => (_AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = wasmExports["AVCodecContext_rc_min_rate_s"])(a0, a1);

var _AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = (a0, a1) => (_AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = wasmExports["AVCodecContext_rc_min_ratehi_s"])(a0, a1);

var _AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = a0 => (_AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = wasmExports["AVCodecContext_sample_fmt"])(a0);

var _AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = (a0, a1) => (_AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = wasmExports["AVCodecContext_sample_fmt_s"])(a0, a1);

var _AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = a0 => (_AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = wasmExports["AVCodecContext_sample_rate"])(a0);

var _AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = (a0, a1) => (_AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = wasmExports["AVCodecContext_sample_rate_s"])(a0, a1);

var _AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = a0 => (_AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = wasmExports["AVCodecContext_qmax"])(a0);

var _AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = (a0, a1) => (_AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = wasmExports["AVCodecContext_qmax_s"])(a0, a1);

var _AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = a0 => (_AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = wasmExports["AVCodecContext_qmin"])(a0);

var _AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = (a0, a1) => (_AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = wasmExports["AVCodecContext_qmin_s"])(a0, a1);

var _AVCodecContext_width = Module["_AVCodecContext_width"] = a0 => (_AVCodecContext_width = Module["_AVCodecContext_width"] = wasmExports["AVCodecContext_width"])(a0);

var _AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = (a0, a1) => (_AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = wasmExports["AVCodecContext_width_s"])(a0, a1);

var _AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = a0 => (_AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = wasmExports["AVCodecContext_framerate_num"])(a0);

var _AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = a0 => (_AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = wasmExports["AVCodecContext_framerate_den"])(a0);

var _AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = (a0, a1) => (_AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = wasmExports["AVCodecContext_framerate_num_s"])(a0, a1);

var _AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = (a0, a1) => (_AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = wasmExports["AVCodecContext_framerate_den_s"])(a0, a1);

var _AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = (a0, a1, a2) => (_AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = wasmExports["AVCodecContext_framerate_s"])(a0, a1, a2);

var _AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = a0 => (_AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = wasmExports["AVCodecContext_sample_aspect_ratio_num"])(a0);

var _AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = a0 => (_AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = wasmExports["AVCodecContext_sample_aspect_ratio_den"])(a0);

var _AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = (a0, a1) => (_AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = wasmExports["AVCodecContext_sample_aspect_ratio_num_s"])(a0, a1);

var _AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = (a0, a1) => (_AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = wasmExports["AVCodecContext_sample_aspect_ratio_den_s"])(a0, a1);

var _AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = (a0, a1, a2) => (_AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = wasmExports["AVCodecContext_sample_aspect_ratio_s"])(a0, a1, a2);

var _AVCodecContext_time_base_num = Module["_AVCodecContext_time_base_num"] = a0 => (_AVCodecContext_time_base_num = Module["_AVCodecContext_time_base_num"] = wasmExports["AVCodecContext_time_base_num"])(a0);

var _AVCodecContext_time_base_den = Module["_AVCodecContext_time_base_den"] = a0 => (_AVCodecContext_time_base_den = Module["_AVCodecContext_time_base_den"] = wasmExports["AVCodecContext_time_base_den"])(a0);

var _AVCodecContext_time_base_num_s = Module["_AVCodecContext_time_base_num_s"] = (a0, a1) => (_AVCodecContext_time_base_num_s = Module["_AVCodecContext_time_base_num_s"] = wasmExports["AVCodecContext_time_base_num_s"])(a0, a1);

var _AVCodecContext_time_base_den_s = Module["_AVCodecContext_time_base_den_s"] = (a0, a1) => (_AVCodecContext_time_base_den_s = Module["_AVCodecContext_time_base_den_s"] = wasmExports["AVCodecContext_time_base_den_s"])(a0, a1);

var _AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = (a0, a1, a2) => (_AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = wasmExports["AVCodecContext_time_base_s"])(a0, a1, a2);

var _AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = (a0, a1, a2) => (_AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = wasmExports["AVCodecContext_channel_layoutmask_s"])(a0, a1, a2);

var _AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = a0 => (_AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = wasmExports["AVCodecContext_channel_layoutmask"])(a0);

var _AVCodecContext_channels = Module["_AVCodecContext_channels"] = a0 => (_AVCodecContext_channels = Module["_AVCodecContext_channels"] = wasmExports["AVCodecContext_channels"])(a0);

var _AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = (a0, a1) => (_AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = wasmExports["AVCodecContext_channels_s"])(a0, a1);

var _AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = a0 => (_AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = wasmExports["AVCodecContext_ch_layout_nb_channels"])(a0);

var _AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = (a0, a1) => (_AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = wasmExports["AVCodecContext_ch_layout_nb_channels_s"])(a0, a1);

var _AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = a0 => (_AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = wasmExports["AVCodecContext_channel_layout"])(a0);

var _AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = a0 => (_AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = wasmExports["AVCodecContext_channel_layouthi"])(a0);

var _AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = (a0, a1) => (_AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = wasmExports["AVCodecContext_channel_layout_s"])(a0, a1);

var _AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = (a0, a1) => (_AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = wasmExports["AVCodecContext_channel_layouthi_s"])(a0, a1);

var _AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = a0 => (_AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = wasmExports["AVCodecDescriptor_id"])(a0);

var _AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = (a0, a1) => (_AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = wasmExports["AVCodecDescriptor_id_s"])(a0, a1);

var _AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = a0 => (_AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = wasmExports["AVCodecDescriptor_long_name"])(a0);

var _AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = (a0, a1) => (_AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = wasmExports["AVCodecDescriptor_long_name_s"])(a0, a1);

var _AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = (a0, a1) => (_AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = wasmExports["AVCodecDescriptor_mime_types_a"])(a0, a1);

var _AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = (a0, a1, a2) => (_AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = wasmExports["AVCodecDescriptor_mime_types_a_s"])(a0, a1, a2);

var _AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = a0 => (_AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = wasmExports["AVCodecDescriptor_name"])(a0);

var _AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = (a0, a1) => (_AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = wasmExports["AVCodecDescriptor_name_s"])(a0, a1);

var _AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = a0 => (_AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = wasmExports["AVCodecDescriptor_props"])(a0);

var _AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = (a0, a1) => (_AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = wasmExports["AVCodecDescriptor_props_s"])(a0, a1);

var _AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = a0 => (_AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = wasmExports["AVCodecDescriptor_type"])(a0);

var _AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = (a0, a1) => (_AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = wasmExports["AVCodecDescriptor_type_s"])(a0, a1);

var _AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = a0 => (_AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = wasmExports["AVCodecParameters_codec_id"])(a0);

var _AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = (a0, a1) => (_AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = wasmExports["AVCodecParameters_codec_id_s"])(a0, a1);

var _AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = a0 => (_AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = wasmExports["AVCodecParameters_codec_tag"])(a0);

var _AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = (a0, a1) => (_AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = wasmExports["AVCodecParameters_codec_tag_s"])(a0, a1);

var _AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = a0 => (_AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = wasmExports["AVCodecParameters_codec_type"])(a0);

var _AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = (a0, a1) => (_AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = wasmExports["AVCodecParameters_codec_type_s"])(a0, a1);

var _AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = a0 => (_AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = wasmExports["AVCodecParameters_extradata"])(a0);

var _AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = (a0, a1) => (_AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = wasmExports["AVCodecParameters_extradata_s"])(a0, a1);

var _AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = a0 => (_AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = wasmExports["AVCodecParameters_extradata_size"])(a0);

var _AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = (a0, a1) => (_AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = wasmExports["AVCodecParameters_extradata_size_s"])(a0, a1);

var _AVCodecParameters_format = Module["_AVCodecParameters_format"] = a0 => (_AVCodecParameters_format = Module["_AVCodecParameters_format"] = wasmExports["AVCodecParameters_format"])(a0);

var _AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = (a0, a1) => (_AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = wasmExports["AVCodecParameters_format_s"])(a0, a1);

var _AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = a0 => (_AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = wasmExports["AVCodecParameters_bit_rate"])(a0);

var _AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = (a0, a1, a2) => (_AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = wasmExports["AVCodecParameters_bit_rate_s"])(a0, a1, a2);

var _AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = a0 => (_AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = wasmExports["AVCodecParameters_profile"])(a0);

var _AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = (a0, a1) => (_AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = wasmExports["AVCodecParameters_profile_s"])(a0, a1);

var _AVCodecParameters_level = Module["_AVCodecParameters_level"] = a0 => (_AVCodecParameters_level = Module["_AVCodecParameters_level"] = wasmExports["AVCodecParameters_level"])(a0);

var _AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = (a0, a1) => (_AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = wasmExports["AVCodecParameters_level_s"])(a0, a1);

var _AVCodecParameters_width = Module["_AVCodecParameters_width"] = a0 => (_AVCodecParameters_width = Module["_AVCodecParameters_width"] = wasmExports["AVCodecParameters_width"])(a0);

var _AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = (a0, a1) => (_AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = wasmExports["AVCodecParameters_width_s"])(a0, a1);

var _AVCodecParameters_height = Module["_AVCodecParameters_height"] = a0 => (_AVCodecParameters_height = Module["_AVCodecParameters_height"] = wasmExports["AVCodecParameters_height"])(a0);

var _AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = (a0, a1) => (_AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = wasmExports["AVCodecParameters_height_s"])(a0, a1);

var _AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = a0 => (_AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = wasmExports["AVCodecParameters_color_range"])(a0);

var _AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = (a0, a1) => (_AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = wasmExports["AVCodecParameters_color_range_s"])(a0, a1);

var _AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = a0 => (_AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = wasmExports["AVCodecParameters_color_primaries"])(a0);

var _AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = (a0, a1) => (_AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = wasmExports["AVCodecParameters_color_primaries_s"])(a0, a1);

var _AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = a0 => (_AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = wasmExports["AVCodecParameters_color_trc"])(a0);

var _AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = (a0, a1) => (_AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = wasmExports["AVCodecParameters_color_trc_s"])(a0, a1);

var _AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = a0 => (_AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = wasmExports["AVCodecParameters_color_space"])(a0);

var _AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = (a0, a1) => (_AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = wasmExports["AVCodecParameters_color_space_s"])(a0, a1);

var _AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = a0 => (_AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = wasmExports["AVCodecParameters_chroma_location"])(a0);

var _AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = (a0, a1) => (_AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = wasmExports["AVCodecParameters_chroma_location_s"])(a0, a1);

var _AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = a0 => (_AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = wasmExports["AVCodecParameters_sample_rate"])(a0);

var _AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = (a0, a1) => (_AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = wasmExports["AVCodecParameters_sample_rate_s"])(a0, a1);

var _AVCodecParameters_framerate_num = Module["_AVCodecParameters_framerate_num"] = a0 => (_AVCodecParameters_framerate_num = Module["_AVCodecParameters_framerate_num"] = wasmExports["AVCodecParameters_framerate_num"])(a0);

var _AVCodecParameters_framerate_den = Module["_AVCodecParameters_framerate_den"] = a0 => (_AVCodecParameters_framerate_den = Module["_AVCodecParameters_framerate_den"] = wasmExports["AVCodecParameters_framerate_den"])(a0);

var _AVCodecParameters_framerate_num_s = Module["_AVCodecParameters_framerate_num_s"] = (a0, a1) => (_AVCodecParameters_framerate_num_s = Module["_AVCodecParameters_framerate_num_s"] = wasmExports["AVCodecParameters_framerate_num_s"])(a0, a1);

var _AVCodecParameters_framerate_den_s = Module["_AVCodecParameters_framerate_den_s"] = (a0, a1) => (_AVCodecParameters_framerate_den_s = Module["_AVCodecParameters_framerate_den_s"] = wasmExports["AVCodecParameters_framerate_den_s"])(a0, a1);

var _AVCodecParameters_framerate_s = Module["_AVCodecParameters_framerate_s"] = (a0, a1, a2) => (_AVCodecParameters_framerate_s = Module["_AVCodecParameters_framerate_s"] = wasmExports["AVCodecParameters_framerate_s"])(a0, a1, a2);

var _AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = (a0, a1, a2) => (_AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = wasmExports["AVCodecParameters_channel_layoutmask_s"])(a0, a1, a2);

var _AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = a0 => (_AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = wasmExports["AVCodecParameters_channel_layoutmask"])(a0);

var _AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = a0 => (_AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = wasmExports["AVCodecParameters_channels"])(a0);

var _AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = (a0, a1) => (_AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = wasmExports["AVCodecParameters_channels_s"])(a0, a1);

var _AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = a0 => (_AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = wasmExports["AVCodecParameters_ch_layout_nb_channels"])(a0);

var _AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = (a0, a1) => (_AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = wasmExports["AVCodecParameters_ch_layout_nb_channels_s"])(a0, a1);

var _AVPacket_data = Module["_AVPacket_data"] = a0 => (_AVPacket_data = Module["_AVPacket_data"] = wasmExports["AVPacket_data"])(a0);

var _AVPacket_data_s = Module["_AVPacket_data_s"] = (a0, a1) => (_AVPacket_data_s = Module["_AVPacket_data_s"] = wasmExports["AVPacket_data_s"])(a0, a1);

var _AVPacket_dts = Module["_AVPacket_dts"] = a0 => (_AVPacket_dts = Module["_AVPacket_dts"] = wasmExports["AVPacket_dts"])(a0);

var _AVPacket_dtshi = Module["_AVPacket_dtshi"] = a0 => (_AVPacket_dtshi = Module["_AVPacket_dtshi"] = wasmExports["AVPacket_dtshi"])(a0);

var _AVPacket_dts_s = Module["_AVPacket_dts_s"] = (a0, a1) => (_AVPacket_dts_s = Module["_AVPacket_dts_s"] = wasmExports["AVPacket_dts_s"])(a0, a1);

var _AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = (a0, a1) => (_AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = wasmExports["AVPacket_dtshi_s"])(a0, a1);

var _AVPacket_duration = Module["_AVPacket_duration"] = a0 => (_AVPacket_duration = Module["_AVPacket_duration"] = wasmExports["AVPacket_duration"])(a0);

var _AVPacket_durationhi = Module["_AVPacket_durationhi"] = a0 => (_AVPacket_durationhi = Module["_AVPacket_durationhi"] = wasmExports["AVPacket_durationhi"])(a0);

var _AVPacket_duration_s = Module["_AVPacket_duration_s"] = (a0, a1) => (_AVPacket_duration_s = Module["_AVPacket_duration_s"] = wasmExports["AVPacket_duration_s"])(a0, a1);

var _AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = (a0, a1) => (_AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = wasmExports["AVPacket_durationhi_s"])(a0, a1);

var _AVPacket_flags = Module["_AVPacket_flags"] = a0 => (_AVPacket_flags = Module["_AVPacket_flags"] = wasmExports["AVPacket_flags"])(a0);

var _AVPacket_flags_s = Module["_AVPacket_flags_s"] = (a0, a1) => (_AVPacket_flags_s = Module["_AVPacket_flags_s"] = wasmExports["AVPacket_flags_s"])(a0, a1);

var _AVPacket_pos = Module["_AVPacket_pos"] = a0 => (_AVPacket_pos = Module["_AVPacket_pos"] = wasmExports["AVPacket_pos"])(a0);

var _AVPacket_poshi = Module["_AVPacket_poshi"] = a0 => (_AVPacket_poshi = Module["_AVPacket_poshi"] = wasmExports["AVPacket_poshi"])(a0);

var _AVPacket_pos_s = Module["_AVPacket_pos_s"] = (a0, a1) => (_AVPacket_pos_s = Module["_AVPacket_pos_s"] = wasmExports["AVPacket_pos_s"])(a0, a1);

var _AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = (a0, a1) => (_AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = wasmExports["AVPacket_poshi_s"])(a0, a1);

var _AVPacket_pts = Module["_AVPacket_pts"] = a0 => (_AVPacket_pts = Module["_AVPacket_pts"] = wasmExports["AVPacket_pts"])(a0);

var _AVPacket_ptshi = Module["_AVPacket_ptshi"] = a0 => (_AVPacket_ptshi = Module["_AVPacket_ptshi"] = wasmExports["AVPacket_ptshi"])(a0);

var _AVPacket_pts_s = Module["_AVPacket_pts_s"] = (a0, a1) => (_AVPacket_pts_s = Module["_AVPacket_pts_s"] = wasmExports["AVPacket_pts_s"])(a0, a1);

var _AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = (a0, a1) => (_AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = wasmExports["AVPacket_ptshi_s"])(a0, a1);

var _AVPacket_side_data = Module["_AVPacket_side_data"] = a0 => (_AVPacket_side_data = Module["_AVPacket_side_data"] = wasmExports["AVPacket_side_data"])(a0);

var _AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = (a0, a1) => (_AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = wasmExports["AVPacket_side_data_s"])(a0, a1);

var _AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = a0 => (_AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = wasmExports["AVPacket_side_data_elems"])(a0);

var _AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = (a0, a1) => (_AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = wasmExports["AVPacket_side_data_elems_s"])(a0, a1);

var _AVPacket_size = Module["_AVPacket_size"] = a0 => (_AVPacket_size = Module["_AVPacket_size"] = wasmExports["AVPacket_size"])(a0);

var _AVPacket_size_s = Module["_AVPacket_size_s"] = (a0, a1) => (_AVPacket_size_s = Module["_AVPacket_size_s"] = wasmExports["AVPacket_size_s"])(a0, a1);

var _AVPacket_stream_index = Module["_AVPacket_stream_index"] = a0 => (_AVPacket_stream_index = Module["_AVPacket_stream_index"] = wasmExports["AVPacket_stream_index"])(a0);

var _AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = (a0, a1) => (_AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = wasmExports["AVPacket_stream_index_s"])(a0, a1);

var _AVPacket_time_base_num = Module["_AVPacket_time_base_num"] = a0 => (_AVPacket_time_base_num = Module["_AVPacket_time_base_num"] = wasmExports["AVPacket_time_base_num"])(a0);

var _AVPacket_time_base_den = Module["_AVPacket_time_base_den"] = a0 => (_AVPacket_time_base_den = Module["_AVPacket_time_base_den"] = wasmExports["AVPacket_time_base_den"])(a0);

var _AVPacket_time_base_num_s = Module["_AVPacket_time_base_num_s"] = (a0, a1) => (_AVPacket_time_base_num_s = Module["_AVPacket_time_base_num_s"] = wasmExports["AVPacket_time_base_num_s"])(a0, a1);

var _AVPacket_time_base_den_s = Module["_AVPacket_time_base_den_s"] = (a0, a1) => (_AVPacket_time_base_den_s = Module["_AVPacket_time_base_den_s"] = wasmExports["AVPacket_time_base_den_s"])(a0, a1);

var _AVPacket_time_base_s = Module["_AVPacket_time_base_s"] = (a0, a1, a2) => (_AVPacket_time_base_s = Module["_AVPacket_time_base_s"] = wasmExports["AVPacket_time_base_s"])(a0, a1, a2);

var _AVPacketSideData_data = Module["_AVPacketSideData_data"] = (a0, a1) => (_AVPacketSideData_data = Module["_AVPacketSideData_data"] = wasmExports["AVPacketSideData_data"])(a0, a1);

var _AVPacketSideData_size = Module["_AVPacketSideData_size"] = (a0, a1) => (_AVPacketSideData_size = Module["_AVPacketSideData_size"] = wasmExports["AVPacketSideData_size"])(a0, a1);

var _AVPacketSideData_type = Module["_AVPacketSideData_type"] = (a0, a1) => (_AVPacketSideData_type = Module["_AVPacketSideData_type"] = wasmExports["AVPacketSideData_type"])(a0, a1);

var _avcodec_open2_js = Module["_avcodec_open2_js"] = (a0, a1, a2) => (_avcodec_open2_js = Module["_avcodec_open2_js"] = wasmExports["avcodec_open2_js"])(a0, a1, a2);

var _avcodec_open2 = Module["_avcodec_open2"] = (a0, a1, a2) => (_avcodec_open2 = Module["_avcodec_open2"] = wasmExports["avcodec_open2"])(a0, a1, a2);

var _av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = (a0, a1, a2, a3, a4) => (_av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = wasmExports["av_packet_rescale_ts_js"])(a0, a1, a2, a3, a4);

var _AVFormatContext_flags = Module["_AVFormatContext_flags"] = a0 => (_AVFormatContext_flags = Module["_AVFormatContext_flags"] = wasmExports["AVFormatContext_flags"])(a0);

var _AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = (a0, a1) => (_AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = wasmExports["AVFormatContext_flags_s"])(a0, a1);

var _AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = a0 => (_AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = wasmExports["AVFormatContext_nb_streams"])(a0);

var _AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = (a0, a1) => (_AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = wasmExports["AVFormatContext_nb_streams_s"])(a0, a1);

var _AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = a0 => (_AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = wasmExports["AVFormatContext_oformat"])(a0);

var _AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = (a0, a1) => (_AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = wasmExports["AVFormatContext_oformat_s"])(a0, a1);

var _AVFormatContext_pb = Module["_AVFormatContext_pb"] = a0 => (_AVFormatContext_pb = Module["_AVFormatContext_pb"] = wasmExports["AVFormatContext_pb"])(a0);

var _AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = (a0, a1) => (_AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = wasmExports["AVFormatContext_pb_s"])(a0, a1);

var _AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = (a0, a1) => (_AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = wasmExports["AVFormatContext_streams_a"])(a0, a1);

var _AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = (a0, a1, a2) => (_AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = wasmExports["AVFormatContext_streams_a_s"])(a0, a1, a2);

var _AVStream_codecpar = Module["_AVStream_codecpar"] = a0 => (_AVStream_codecpar = Module["_AVStream_codecpar"] = wasmExports["AVStream_codecpar"])(a0);

var _AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = (a0, a1) => (_AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = wasmExports["AVStream_codecpar_s"])(a0, a1);

var _AVStream_discard = Module["_AVStream_discard"] = a0 => (_AVStream_discard = Module["_AVStream_discard"] = wasmExports["AVStream_discard"])(a0);

var _AVStream_discard_s = Module["_AVStream_discard_s"] = (a0, a1) => (_AVStream_discard_s = Module["_AVStream_discard_s"] = wasmExports["AVStream_discard_s"])(a0, a1);

var _AVStream_duration = Module["_AVStream_duration"] = a0 => (_AVStream_duration = Module["_AVStream_duration"] = wasmExports["AVStream_duration"])(a0);

var _AVStream_durationhi = Module["_AVStream_durationhi"] = a0 => (_AVStream_durationhi = Module["_AVStream_durationhi"] = wasmExports["AVStream_durationhi"])(a0);

var _AVStream_duration_s = Module["_AVStream_duration_s"] = (a0, a1) => (_AVStream_duration_s = Module["_AVStream_duration_s"] = wasmExports["AVStream_duration_s"])(a0, a1);

var _AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = (a0, a1) => (_AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = wasmExports["AVStream_durationhi_s"])(a0, a1);

var _AVStream_time_base_num = Module["_AVStream_time_base_num"] = a0 => (_AVStream_time_base_num = Module["_AVStream_time_base_num"] = wasmExports["AVStream_time_base_num"])(a0);

var _AVStream_time_base_den = Module["_AVStream_time_base_den"] = a0 => (_AVStream_time_base_den = Module["_AVStream_time_base_den"] = wasmExports["AVStream_time_base_den"])(a0);

var _AVStream_time_base_num_s = Module["_AVStream_time_base_num_s"] = (a0, a1) => (_AVStream_time_base_num_s = Module["_AVStream_time_base_num_s"] = wasmExports["AVStream_time_base_num_s"])(a0, a1);

var _AVStream_time_base_den_s = Module["_AVStream_time_base_den_s"] = (a0, a1) => (_AVStream_time_base_den_s = Module["_AVStream_time_base_den_s"] = wasmExports["AVStream_time_base_den_s"])(a0, a1);

var _AVStream_time_base_s = Module["_AVStream_time_base_s"] = (a0, a1, a2) => (_AVStream_time_base_s = Module["_AVStream_time_base_s"] = wasmExports["AVStream_time_base_s"])(a0, a1, a2);

var _avformat_seek_file_min = Module["_avformat_seek_file_min"] = (a0, a1, a2, a3, a4) => (_avformat_seek_file_min = Module["_avformat_seek_file_min"] = wasmExports["avformat_seek_file_min"])(a0, a1, a2, a3, a4);

var _avformat_seek_file = Module["_avformat_seek_file"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (_avformat_seek_file = Module["_avformat_seek_file"] = wasmExports["avformat_seek_file"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var _avformat_seek_file_max = Module["_avformat_seek_file_max"] = (a0, a1, a2, a3, a4) => (_avformat_seek_file_max = Module["_avformat_seek_file_max"] = wasmExports["avformat_seek_file_max"])(a0, a1, a2, a3, a4);

var _avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = (a0, a1, a2, a3, a4) => (_avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = wasmExports["avformat_seek_file_approx"])(a0, a1, a2, a3, a4);

var _AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = a0 => (_AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = wasmExports["AVFilterInOut_filter_ctx"])(a0);

var _AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = (a0, a1) => (_AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = wasmExports["AVFilterInOut_filter_ctx_s"])(a0, a1);

var _AVFilterInOut_name = Module["_AVFilterInOut_name"] = a0 => (_AVFilterInOut_name = Module["_AVFilterInOut_name"] = wasmExports["AVFilterInOut_name"])(a0);

var _AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = (a0, a1) => (_AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = wasmExports["AVFilterInOut_name_s"])(a0, a1);

var _AVFilterInOut_next = Module["_AVFilterInOut_next"] = a0 => (_AVFilterInOut_next = Module["_AVFilterInOut_next"] = wasmExports["AVFilterInOut_next"])(a0);

var _AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = (a0, a1) => (_AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = wasmExports["AVFilterInOut_next_s"])(a0, a1);

var _AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = a0 => (_AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = wasmExports["AVFilterInOut_pad_idx"])(a0);

var _AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = (a0, a1) => (_AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = wasmExports["AVFilterInOut_pad_idx_s"])(a0, a1);

var _av_buffersink_get_time_base_num = Module["_av_buffersink_get_time_base_num"] = a0 => (_av_buffersink_get_time_base_num = Module["_av_buffersink_get_time_base_num"] = wasmExports["av_buffersink_get_time_base_num"])(a0);

var _av_buffersink_get_time_base_den = Module["_av_buffersink_get_time_base_den"] = a0 => (_av_buffersink_get_time_base_den = Module["_av_buffersink_get_time_base_den"] = wasmExports["av_buffersink_get_time_base_den"])(a0);

var _ff_buffersink_set_ch_layout = Module["_ff_buffersink_set_ch_layout"] = (a0, a1, a2) => (_ff_buffersink_set_ch_layout = Module["_ff_buffersink_set_ch_layout"] = wasmExports["ff_buffersink_set_ch_layout"])(a0, a1, a2);

var _av_opt_set = Module["_av_opt_set"] = (a0, a1, a2, a3) => (_av_opt_set = Module["_av_opt_set"] = wasmExports["av_opt_set"])(a0, a1, a2, a3);

var _libavjs_with_swscale = Module["_libavjs_with_swscale"] = () => (_libavjs_with_swscale = Module["_libavjs_with_swscale"] = wasmExports["libavjs_with_swscale"])();

var _sws_getContext = Module["_sws_getContext"] = () => (_sws_getContext = Module["_sws_getContext"] = wasmExports["sws_getContext"])();

var _sws_freeContext = Module["_sws_freeContext"] = () => (_sws_freeContext = Module["_sws_freeContext"] = wasmExports["sws_freeContext"])();

var _sws_scale_frame = Module["_sws_scale_frame"] = () => (_sws_scale_frame = Module["_sws_scale_frame"] = wasmExports["sws_scale_frame"])();

var _ffmpeg_main = Module["_ffmpeg_main"] = () => (_ffmpeg_main = Module["_ffmpeg_main"] = wasmExports["ffmpeg_main"])();

var _ffprobe_main = Module["_ffprobe_main"] = () => (_ffprobe_main = Module["_ffprobe_main"] = wasmExports["ffprobe_main"])();

var _libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = () => (_libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = wasmExports["libavjs_create_main_thread"])();

var _emfiberthreads_timeout_expiry = Module["_emfiberthreads_timeout_expiry"] = () => (_emfiberthreads_timeout_expiry = Module["_emfiberthreads_timeout_expiry"] = wasmExports["emfiberthreads_timeout_expiry"])();

var _avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = (a0, a1, a2) => (_avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = wasmExports["avformat_alloc_output_context2_js"])(a0, a1, a2);

var _avformat_open_input_js = Module["_avformat_open_input_js"] = (a0, a1, a2) => (_avformat_open_input_js = Module["_avformat_open_input_js"] = wasmExports["avformat_open_input_js"])(a0, a1, a2);

var _avformat_open_input = Module["_avformat_open_input"] = (a0, a1, a2, a3) => (_avformat_open_input = Module["_avformat_open_input"] = wasmExports["avformat_open_input"])(a0, a1, a2, a3);

var _avio_open2_js = Module["_avio_open2_js"] = (a0, a1, a2, a3) => (_avio_open2_js = Module["_avio_open2_js"] = wasmExports["avio_open2_js"])(a0, a1, a2, a3);

var _avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = (a0, a1, a2, a3, a4) => (_avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = wasmExports["avfilter_graph_create_filter_js"])(a0, a1, a2, a3, a4);

var _av_dict_copy_js = Module["_av_dict_copy_js"] = (a0, a1, a2) => (_av_dict_copy_js = Module["_av_dict_copy_js"] = wasmExports["av_dict_copy_js"])(a0, a1, a2);

var _av_dict_set_js = Module["_av_dict_set_js"] = (a0, a1, a2, a3) => (_av_dict_set_js = Module["_av_dict_set_js"] = wasmExports["av_dict_set_js"])(a0, a1, a2, a3);

var _av_compare_ts_js = Module["_av_compare_ts_js"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (_av_compare_ts_js = Module["_av_compare_ts_js"] = wasmExports["av_compare_ts_js"])(a0, a1, a2, a3, a4, a5, a6, a7);

var _ff_error = Module["_ff_error"] = a0 => (_ff_error = Module["_ff_error"] = wasmExports["ff_error"])(a0);

var _mallinfo_uordblks = Module["_mallinfo_uordblks"] = () => (_mallinfo_uordblks = Module["_mallinfo_uordblks"] = wasmExports["mallinfo_uordblks"])();

var _av_strdup = Module["_av_strdup"] = a0 => (_av_strdup = Module["_av_strdup"] = wasmExports["av_strdup"])(a0);

var _av_dict_free = Module["_av_dict_free"] = a0 => (_av_dict_free = Module["_av_dict_free"] = wasmExports["av_dict_free"])(a0);

var _av_frame_alloc = Module["_av_frame_alloc"] = () => (_av_frame_alloc = Module["_av_frame_alloc"] = wasmExports["av_frame_alloc"])();

var _av_frame_free = Module["_av_frame_free"] = a0 => (_av_frame_free = Module["_av_frame_free"] = wasmExports["av_frame_free"])(a0);

var _av_frame_unref = Module["_av_frame_unref"] = a0 => (_av_frame_unref = Module["_av_frame_unref"] = wasmExports["av_frame_unref"])(a0);

var _av_frame_get_buffer = Module["_av_frame_get_buffer"] = (a0, a1) => (_av_frame_get_buffer = Module["_av_frame_get_buffer"] = wasmExports["av_frame_get_buffer"])(a0, a1);

var _av_frame_ref = Module["_av_frame_ref"] = (a0, a1) => (_av_frame_ref = Module["_av_frame_ref"] = wasmExports["av_frame_ref"])(a0, a1);

var _av_frame_clone = Module["_av_frame_clone"] = a0 => (_av_frame_clone = Module["_av_frame_clone"] = wasmExports["av_frame_clone"])(a0);

var _av_frame_make_writable = Module["_av_frame_make_writable"] = a0 => (_av_frame_make_writable = Module["_av_frame_make_writable"] = wasmExports["av_frame_make_writable"])(a0);

var _av_log_get_level = Module["_av_log_get_level"] = () => (_av_log_get_level = Module["_av_log_get_level"] = wasmExports["av_log_get_level"])();

var _av_log_set_level = Module["_av_log_set_level"] = a0 => (_av_log_set_level = Module["_av_log_set_level"] = wasmExports["av_log_set_level"])(a0);

var _free = Module["_free"] = a0 => (_free = Module["_free"] = wasmExports["free"])(a0);

var _av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = a0 => (_av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = wasmExports["av_get_sample_fmt_name"])(a0);

var _av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = a0 => (_av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = wasmExports["av_pix_fmt_desc_get"])(a0);

var _open = Module["_open"] = (a0, a1, a2) => (_open = Module["_open"] = wasmExports["open"])(a0, a1, a2);

var _av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = a0 => (_av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = wasmExports["av_get_bytes_per_sample"])(a0);

var _avformat_free_context = Module["_avformat_free_context"] = a0 => (_avformat_free_context = Module["_avformat_free_context"] = wasmExports["avformat_free_context"])(a0);

var _av_find_best_stream = Module["_av_find_best_stream"] = (a0, a1, a2, a3, a4, a5) => (_av_find_best_stream = Module["_av_find_best_stream"] = wasmExports["av_find_best_stream"])(a0, a1, a2, a3, a4, a5);

var _avio_close = Module["_avio_close"] = a0 => (_avio_close = Module["_avio_close"] = wasmExports["avio_close"])(a0);

var _avio_flush = Module["_avio_flush"] = a0 => (_avio_flush = Module["_avio_flush"] = wasmExports["avio_flush"])(a0);

var _avformat_alloc_context = Module["_avformat_alloc_context"] = () => (_avformat_alloc_context = Module["_avformat_alloc_context"] = wasmExports["avformat_alloc_context"])();

var _avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = (a0, a1) => (_avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = wasmExports["avcodec_parameters_to_context"])(a0, a1);

var _avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = a0 => (_avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = wasmExports["avcodec_descriptor_get"])(a0);

var _av_packet_unref = Module["_av_packet_unref"] = a0 => (_av_packet_unref = Module["_av_packet_unref"] = wasmExports["av_packet_unref"])(a0);

var _avcodec_free_context = Module["_avcodec_free_context"] = a0 => (_avcodec_free_context = Module["_avcodec_free_context"] = wasmExports["avcodec_free_context"])(a0);

var _avcodec_parameters_free = Module["_avcodec_parameters_free"] = a0 => (_avcodec_parameters_free = Module["_avcodec_parameters_free"] = wasmExports["avcodec_parameters_free"])(a0);

var _av_packet_free = Module["_av_packet_free"] = a0 => (_av_packet_free = Module["_av_packet_free"] = wasmExports["av_packet_free"])(a0);

var _avformat_new_stream = Module["_avformat_new_stream"] = (a0, a1) => (_avformat_new_stream = Module["_avformat_new_stream"] = wasmExports["avformat_new_stream"])(a0, a1);

var _avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = (a0, a1) => (_avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = wasmExports["avcodec_parameters_copy"])(a0, a1);

var _av_packet_ref = Module["_av_packet_ref"] = (a0, a1) => (_av_packet_ref = Module["_av_packet_ref"] = wasmExports["av_packet_ref"])(a0, a1);

var _avcodec_find_decoder = Module["_avcodec_find_decoder"] = a0 => (_avcodec_find_decoder = Module["_avcodec_find_decoder"] = wasmExports["avcodec_find_decoder"])(a0);

var _avformat_close_input = Module["_avformat_close_input"] = a0 => (_avformat_close_input = Module["_avformat_close_input"] = wasmExports["avformat_close_input"])(a0);

var _av_read_frame = Module["_av_read_frame"] = (a0, a1) => (_av_read_frame = Module["_av_read_frame"] = wasmExports["av_read_frame"])(a0, a1);

var _avcodec_get_name = Module["_avcodec_get_name"] = a0 => (_avcodec_get_name = Module["_avcodec_get_name"] = wasmExports["avcodec_get_name"])(a0);

var _av_packet_new_side_data = Module["_av_packet_new_side_data"] = (a0, a1, a2) => (_av_packet_new_side_data = Module["_av_packet_new_side_data"] = wasmExports["av_packet_new_side_data"])(a0, a1, a2);

var _avformat_find_stream_info = Module["_avformat_find_stream_info"] = (a0, a1) => (_avformat_find_stream_info = Module["_avformat_find_stream_info"] = wasmExports["avformat_find_stream_info"])(a0, a1);

var _avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = (a0, a1) => (_avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = wasmExports["avcodec_parameters_from_context"])(a0, a1);

var _avcodec_send_packet = Module["_avcodec_send_packet"] = (a0, a1) => (_avcodec_send_packet = Module["_avcodec_send_packet"] = wasmExports["avcodec_send_packet"])(a0, a1);

var _avcodec_receive_frame = Module["_avcodec_receive_frame"] = (a0, a1) => (_avcodec_receive_frame = Module["_avcodec_receive_frame"] = wasmExports["avcodec_receive_frame"])(a0, a1);

var _avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = a0 => (_avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = wasmExports["avcodec_alloc_context3"])(a0);

var _avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = () => (_avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = wasmExports["avcodec_parameters_alloc"])();

var _av_find_input_format = Module["_av_find_input_format"] = a0 => (_av_find_input_format = Module["_av_find_input_format"] = wasmExports["av_find_input_format"])(a0);

var _av_packet_clone = Module["_av_packet_clone"] = a0 => (_av_packet_clone = Module["_av_packet_clone"] = wasmExports["av_packet_clone"])(a0);

var _av_packet_alloc = Module["_av_packet_alloc"] = () => (_av_packet_alloc = Module["_av_packet_alloc"] = wasmExports["av_packet_alloc"])();

var _av_grow_packet = Module["_av_grow_packet"] = (a0, a1) => (_av_grow_packet = Module["_av_grow_packet"] = wasmExports["av_grow_packet"])(a0, a1);

var _av_packet_make_writable = Module["_av_packet_make_writable"] = a0 => (_av_packet_make_writable = Module["_av_packet_make_writable"] = wasmExports["av_packet_make_writable"])(a0);

var _avformat_write_header = Module["_avformat_write_header"] = (a0, a1) => (_avformat_write_header = Module["_avformat_write_header"] = wasmExports["avformat_write_header"])(a0, a1);

var _av_write_frame = Module["_av_write_frame"] = (a0, a1) => (_av_write_frame = Module["_av_write_frame"] = wasmExports["av_write_frame"])(a0, a1);

var _av_write_trailer = Module["_av_write_trailer"] = a0 => (_av_write_trailer = Module["_av_write_trailer"] = wasmExports["av_write_trailer"])(a0);

var _av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = (a0, a1) => (_av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = wasmExports["av_interleaved_write_frame"])(a0, a1);

var _close = Module["_close"] = a0 => (_close = Module["_close"] = wasmExports["close"])(a0);

var _av_shrink_packet = Module["_av_shrink_packet"] = (a0, a1) => (_av_shrink_packet = Module["_av_shrink_packet"] = wasmExports["av_shrink_packet"])(a0, a1);

var _av_seek_frame = Module["_av_seek_frame"] = (a0, a1, a2, a3, a4) => (_av_seek_frame = Module["_av_seek_frame"] = wasmExports["av_seek_frame"])(a0, a1, a2, a3, a4);

var _avformat_flush = Module["_avformat_flush"] = a0 => (_avformat_flush = Module["_avformat_flush"] = wasmExports["avformat_flush"])(a0);

var _avcodec_find_encoder = Module["_avcodec_find_encoder"] = a0 => (_avcodec_find_encoder = Module["_avcodec_find_encoder"] = wasmExports["avcodec_find_encoder"])(a0);

var _avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = a0 => (_avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = wasmExports["avcodec_find_encoder_by_name"])(a0);

var _avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = a0 => (_avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = wasmExports["avcodec_find_decoder_by_name"])(a0);

var _avcodec_close = Module["_avcodec_close"] = a0 => (_avcodec_close = Module["_avcodec_close"] = wasmExports["avcodec_close"])(a0);

var _avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = a0 => (_avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = wasmExports["avcodec_descriptor_next"])(a0);

var _avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = a0 => (_avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = wasmExports["avcodec_descriptor_get_by_name"])(a0);

var _avcodec_send_frame = Module["_avcodec_send_frame"] = (a0, a1) => (_avcodec_send_frame = Module["_avcodec_send_frame"] = wasmExports["avcodec_send_frame"])(a0, a1);

var _avcodec_receive_packet = Module["_avcodec_receive_packet"] = (a0, a1) => (_avcodec_receive_packet = Module["_avcodec_receive_packet"] = wasmExports["avcodec_receive_packet"])(a0, a1);

var _avfilter_get_by_name = Module["_avfilter_get_by_name"] = a0 => (_avfilter_get_by_name = Module["_avfilter_get_by_name"] = wasmExports["avfilter_get_by_name"])(a0);

var _avfilter_link = Module["_avfilter_link"] = (a0, a1, a2, a3) => (_avfilter_link = Module["_avfilter_link"] = wasmExports["avfilter_link"])(a0, a1, a2, a3);

var _avfilter_free = Module["_avfilter_free"] = a0 => (_avfilter_free = Module["_avfilter_free"] = wasmExports["avfilter_free"])(a0);

var _avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = () => (_avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = wasmExports["avfilter_graph_alloc"])();

var _avfilter_graph_free = Module["_avfilter_graph_free"] = a0 => (_avfilter_graph_free = Module["_avfilter_graph_free"] = wasmExports["avfilter_graph_free"])(a0);

var _avfilter_graph_config = Module["_avfilter_graph_config"] = (a0, a1) => (_avfilter_graph_config = Module["_avfilter_graph_config"] = wasmExports["avfilter_graph_config"])(a0, a1);

var _av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = (a0, a1) => (_av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = wasmExports["av_buffersink_get_frame"])(a0, a1);

var _av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = (a0, a1) => (_av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = wasmExports["av_buffersink_set_frame_size"])(a0, a1);

var _av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = (a0, a1, a2) => (_av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = wasmExports["av_buffersrc_add_frame_flags"])(a0, a1, a2);

var _avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = () => (_avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = wasmExports["avfilter_inout_alloc"])();

var _avfilter_inout_free = Module["_avfilter_inout_free"] = a0 => (_avfilter_inout_free = Module["_avfilter_inout_free"] = wasmExports["avfilter_inout_free"])(a0);

var _avfilter_graph_parse = Module["_avfilter_graph_parse"] = (a0, a1, a2, a3, a4) => (_avfilter_graph_parse = Module["_avfilter_graph_parse"] = wasmExports["avfilter_graph_parse"])(a0, a1, a2, a3, a4);

var _malloc = Module["_malloc"] = a0 => (_malloc = Module["_malloc"] = wasmExports["malloc"])(a0);

var __emscripten_tls_init = () => (__emscripten_tls_init = wasmExports["_emscripten_tls_init"])();

var _pthread_self = () => (_pthread_self = wasmExports["pthread_self"])();

var _dup2 = Module["_dup2"] = (a0, a1) => (_dup2 = Module["_dup2"] = wasmExports["dup2"])(a0, a1);

var __emscripten_thread_init = (a0, a1, a2, a3, a4, a5) => (__emscripten_thread_init = wasmExports["_emscripten_thread_init"])(a0, a1, a2, a3, a4, a5);

var __emscripten_thread_crashed = () => (__emscripten_thread_crashed = wasmExports["_emscripten_thread_crashed"])();

var _emscripten_main_thread_process_queued_calls = () => (_emscripten_main_thread_process_queued_calls = wasmExports["emscripten_main_thread_process_queued_calls"])();

var _emscripten_main_runtime_thread_id = () => (_emscripten_main_runtime_thread_id = wasmExports["emscripten_main_runtime_thread_id"])();

var _calloc = Module["_calloc"] = (a0, a1) => (_calloc = Module["_calloc"] = wasmExports["calloc"])(a0, a1);

var __emscripten_run_on_main_thread_js = (a0, a1, a2, a3, a4) => (__emscripten_run_on_main_thread_js = wasmExports["_emscripten_run_on_main_thread_js"])(a0, a1, a2, a3, a4);

var __emscripten_thread_free_data = a0 => (__emscripten_thread_free_data = wasmExports["_emscripten_thread_free_data"])(a0);

var __emscripten_thread_exit = a0 => (__emscripten_thread_exit = wasmExports["_emscripten_thread_exit"])(a0);

var _strerror = Module["_strerror"] = a0 => (_strerror = Module["_strerror"] = wasmExports["strerror"])(a0);

var __emscripten_check_mailbox = () => (__emscripten_check_mailbox = wasmExports["_emscripten_check_mailbox"])();

var __emscripten_tempret_set = a0 => (__emscripten_tempret_set = wasmExports["_emscripten_tempret_set"])(a0);

var _emscripten_stack_set_limits = (a0, a1) => (_emscripten_stack_set_limits = wasmExports["emscripten_stack_set_limits"])(a0, a1);

var __emscripten_stack_restore = a0 => (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(a0);

var __emscripten_stack_alloc = a0 => (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);

var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"])();

var dynCall_ii = Module["dynCall_ii"] = (a0, a1) => (dynCall_ii = Module["dynCall_ii"] = wasmExports["dynCall_ii"])(a0, a1);

var dynCall_iiii = Module["dynCall_iiii"] = (a0, a1, a2, a3) => (dynCall_iiii = Module["dynCall_iiii"] = wasmExports["dynCall_iiii"])(a0, a1, a2, a3);

var dynCall_viiii = Module["dynCall_viiii"] = (a0, a1, a2, a3, a4) => (dynCall_viiii = Module["dynCall_viiii"] = wasmExports["dynCall_viiii"])(a0, a1, a2, a3, a4);

var dynCall_dd = Module["dynCall_dd"] = (a0, a1) => (dynCall_dd = Module["dynCall_dd"] = wasmExports["dynCall_dd"])(a0, a1);

var dynCall_iiiiii = Module["dynCall_iiiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiiii = Module["dynCall_iiiiii"] = wasmExports["dynCall_iiiiii"])(a0, a1, a2, a3, a4, a5);

var dynCall_iii = Module["dynCall_iii"] = (a0, a1, a2) => (dynCall_iii = Module["dynCall_iii"] = wasmExports["dynCall_iii"])(a0, a1, a2);

var dynCall_vii = Module["dynCall_vii"] = (a0, a1, a2) => (dynCall_vii = Module["dynCall_vii"] = wasmExports["dynCall_vii"])(a0, a1, a2);

var dynCall_jiji = Module["dynCall_jiji"] = (a0, a1, a2, a3, a4) => (dynCall_jiji = Module["dynCall_jiji"] = wasmExports["dynCall_jiji"])(a0, a1, a2, a3, a4);

var dynCall_v = Module["dynCall_v"] = a0 => (dynCall_v = Module["dynCall_v"] = wasmExports["dynCall_v"])(a0);

var dynCall_viiiiii = Module["dynCall_viiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_viiiiii = Module["dynCall_viiiiii"] = wasmExports["dynCall_viiiiii"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_vi = Module["dynCall_vi"] = (a0, a1) => (dynCall_vi = Module["dynCall_vi"] = wasmExports["dynCall_vi"])(a0, a1);

var dynCall_iiiji = Module["dynCall_iiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_iiiji = Module["dynCall_iiiji"] = wasmExports["dynCall_iiiji"])(a0, a1, a2, a3, a4, a5);

var dynCall_jiiij = Module["dynCall_jiiij"] = (a0, a1, a2, a3, a4, a5) => (dynCall_jiiij = Module["dynCall_jiiij"] = wasmExports["dynCall_jiiij"])(a0, a1, a2, a3, a4, a5);

var dynCall_iiiii = Module["dynCall_iiiii"] = (a0, a1, a2, a3, a4) => (dynCall_iiiii = Module["dynCall_iiiii"] = wasmExports["dynCall_iiiii"])(a0, a1, a2, a3, a4);

var dynCall_jiiji = Module["dynCall_jiiji"] = (a0, a1, a2, a3, a4, a5) => (dynCall_jiiji = Module["dynCall_jiiji"] = wasmExports["dynCall_jiiji"])(a0, a1, a2, a3, a4, a5);

var dynCall_ijii = Module["dynCall_ijii"] = (a0, a1, a2, a3, a4) => (dynCall_ijii = Module["dynCall_ijii"] = wasmExports["dynCall_ijii"])(a0, a1, a2, a3, a4);

var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = wasmExports["dynCall_iiiiiii"])(a0, a1, a2, a3, a4, a5, a6);

var dynCall_viiiiij = Module["dynCall_viiiiij"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiij = Module["dynCall_viiiiij"] = wasmExports["dynCall_viiiiij"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_viiiii = Module["dynCall_viiiii"] = (a0, a1, a2, a3, a4, a5) => (dynCall_viiiii = Module["dynCall_viiiii"] = wasmExports["dynCall_viiiii"])(a0, a1, a2, a3, a4, a5);

var dynCall_viii = Module["dynCall_viii"] = (a0, a1, a2, a3) => (dynCall_viii = Module["dynCall_viii"] = wasmExports["dynCall_viii"])(a0, a1, a2, a3);

var dynCall_diii = Module["dynCall_diii"] = (a0, a1, a2, a3) => (dynCall_diii = Module["dynCall_diii"] = wasmExports["dynCall_diii"])(a0, a1, a2, a3);

var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = wasmExports["dynCall_viiiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);

var dynCall_viifi = Module["dynCall_viifi"] = (a0, a1, a2, a3, a4) => (dynCall_viifi = Module["dynCall_viifi"] = wasmExports["dynCall_viifi"])(a0, a1, a2, a3, a4);

var dynCall_fiii = Module["dynCall_fiii"] = (a0, a1, a2, a3) => (dynCall_fiii = Module["dynCall_fiii"] = wasmExports["dynCall_fiii"])(a0, a1, a2, a3);

var dynCall_viidi = Module["dynCall_viidi"] = (a0, a1, a2, a3, a4) => (dynCall_viidi = Module["dynCall_viidi"] = wasmExports["dynCall_viidi"])(a0, a1, a2, a3, a4);

var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = wasmExports["dynCall_viiiiiii"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_viiijj = Module["dynCall_viiijj"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (dynCall_viiijj = Module["dynCall_viiijj"] = wasmExports["dynCall_viiijj"])(a0, a1, a2, a3, a4, a5, a6, a7);

var dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => (dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = wasmExports["dynCall_iiiiiiidiiddii"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);

var dynCall_jij = Module["dynCall_jij"] = (a0, a1, a2, a3) => (dynCall_jij = Module["dynCall_jij"] = wasmExports["dynCall_jij"])(a0, a1, a2, a3);

var dynCall_jii = Module["dynCall_jii"] = (a0, a1, a2) => (dynCall_jii = Module["dynCall_jii"] = wasmExports["dynCall_jii"])(a0, a1, a2);

var dynCall_iidiiii = Module["dynCall_iidiiii"] = (a0, a1, a2, a3, a4, a5, a6) => (dynCall_iidiiii = Module["dynCall_iidiiii"] = wasmExports["dynCall_iidiiii"])(a0, a1, a2, a3, a4, a5, a6);

var _asyncify_start_unwind = a0 => (_asyncify_start_unwind = wasmExports["asyncify_start_unwind"])(a0);

var _asyncify_stop_unwind = () => (_asyncify_stop_unwind = wasmExports["asyncify_stop_unwind"])();

var _asyncify_start_rewind = a0 => (_asyncify_start_rewind = wasmExports["asyncify_start_rewind"])(a0);

var _asyncify_stop_rewind = () => (_asyncify_stop_rewind = wasmExports["asyncify_stop_rewind"])();


// === Auto-generated postamble setup entry stuff ===
Module["ccall"] = ccall;

Module["cwrap"] = cwrap;

Module["PThread"] = PThread;

var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller;
};

// try this again later, after new deps are fulfilled
function run() {
  if (runDependencies > 0) {
    return;
  }
  if (ENVIRONMENT_IS_PTHREAD) {
    // The promise resolve function typically gets called as part of the execution
    // of `doRun` below. The workers/pthreads don't execute `doRun` so the
    // creation promise can be resolved, marking the pthread-Module as initialized.
    readyPromiseResolve(Module);
    initRuntime();
    startWorker(Module);
    return;
  }
  preRun();
  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }
  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module["calledRun"] = true;
    if (ABORT) return;
    initRuntime();
    readyPromiseResolve(Module);
    Module["onRuntimeInitialized"]?.();
    postRun();
  }
  if (Module["setStatus"]) {
    Module["setStatus"]("Running...");
    setTimeout(() => {
      setTimeout(() => Module["setStatus"](""), 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}

if (Module["preInit"]) {
  if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
  while (Module["preInit"].length > 0) {
    Module["preInit"].pop()();
  }
}

run();



/*
 * Copyright (C) 2019-2024 Yahweasel and contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */ // A global promise chain for serialization of asyncify components
Module.serializationPromise = Promise.all([]);

// A global error passed through filesystem operations
Module.fsThrownError = null;

var ERRNO_CODES = {
  EPERM: 1,
  EIO: 5,
  EAGAIN: 6,
  ECANCELED: 11,
  ESPIPE: 29
};

// Callbacks for stream-based reader
var readerCallbacks = {
  open: function(stream) {
    if (stream.flags & 3) {
      // Opened in write mode, which can't work
      throw new FS.ErrnoError(ERRNO_CODES.EPERM);
    }
  },
  close: function() {},
  read: function(stream, buffer, offset, length, position) {
    var data = Module.readBuffers[stream.node.name];
    if (!data) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
    if (data.error) {
      Module.fsThrownError = data.error;
      throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
    }
    if (data.errorCode) throw new FS.ErrnoError(data.errorCode);
    if (data.buf.length === 0) {
      if (data.eof) {
        return 0;
      } else {
        data.ready = false;
        throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
      }
    }
    var ret;
    if (length < data.buf.length) {
      // Cut a slice
      ret = data.buf.subarray(0, length);
      data.buf = data.buf.slice(length);
    } else {
      // Get the beginning
      ret = data.buf;
      data.buf = new Uint8Array(0);
    }
    (new Uint8Array(buffer.buffer)).set(ret, offset);
    return ret.length;
  },
  write: function() {
    throw new FS.ErrnoError(ERRNO_CODES.EIO);
  },
  llseek: function() {
    throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
  }
};

// Callbacks for block-based reader
var blockReaderCallbacks = {
  open: function(stream) {
    if (stream.flags & 3) throw new FS.ErrnoError(ERRNO_CODES.EPERM);
  },
  close: function() {},
  read: function(stream, buffer, offset, length, position) {
    var data = Module.blockReadBuffers[stream.node.name];
    if (!data) throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
    if (data.error) {
      Module.fsThrownError = data.error;
      throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
    }
    if (data.errorCode) throw new FS.ErrnoError(data.errorCode);
    var bufMin = data.position;
    var bufMax = data.position + data.buf.length;
    if (position < bufMin || position >= bufMax) {
      if (position >= stream.node.ff_block_reader_dev_size) return 0;
      // EOF
      if (!Module.onblockread) throw new FS.ErrnoError(ERRNO_CODES.EIO);
      try {
        var brr = Module.onblockread(stream.node.name, position, length);
        if (brr && brr.then && brr.catch) {
          brr.catch(function(ex) {
            ff_block_reader_dev_send(stream.node.name, position, null, {
              error: ex
            });
          });
        }
      } catch (ex) {
        Module.fsThrownError = ex;
        throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
      }
      // If it was asynchronous, this won't be ready yet
      bufMin = data.position;
      bufMax = data.position + data.buf.length;
      if (position < bufMin || position >= bufMax) {
        data.ready = false;
        throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
      }
    }
    var bufPos = position - bufMin;
    var ret;
    if (bufPos + length < data.buf.length) {
      // Cut a slice
      ret = data.buf.subarray(bufPos, bufPos + length);
    } else {
      // Get the beginning of what was requested
      ret = data.buf.subarray(bufPos, data.buf.length);
    }
    (new Uint8Array(buffer.buffer)).set(ret, offset);
    return ret.length;
  },
  write: function() {
    throw new FS.ErrnoError(ERRNO_CODES.EIO);
  },
  llseek: function(stream, offset, whence) {
    if (whence === 2) /* SEEK_END */ offset = stream.node.size + offset; else if (whence === 1) /* SEEK_CUR */ offset += stream.position;
    return offset;
  }
};

// Callbacks for block-based writer
var writerCallbacks = {
  open: function(stream) {
    if (!(stream.flags & 1)) {
      // Opened in read mode, which can't work
      throw new FS.ErrnoError(ERRNO_CODES.EPERM);
    }
  },
  close: function() {},
  read: function() {
    throw new FS.ErrnoError(ERRNO_CODES.EIO);
  },
  write: function(stream, buffer, offset, length, position) {
    if (!Module.onwrite) throw new FS.ErrnoError(ERRNO_CODES.EIO);
    Module.onwrite(stream.node.name, position, buffer.subarray(offset, offset + length));
    return length;
  },
  llseek: function(stream, offset, whence) {
    if (whence === 2) throw new FS.ErrnoError(ERRNO_CODES.EIO); else if (whence === 1) offset += stream.position;
    return offset;
  }
};

// Callbacks for stream-based writer
var streamWriterCallbacks = Object.create(writerCallbacks);

streamWriterCallbacks.write = function(stream, buffer, offset, length, position) {
  if (position != stream.position) throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
  return writerCallbacks.write(stream, buffer, offset, length, position);
};

streamWriterCallbacks.llseek = function() {
  throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
};

/* Filesystem for a writer directory. This is done by using MEMFS, but overriding
 * the stream operations. */ var streamWriterFS = Object.create(MEMFS);

streamWriterFS.mount = function(mount) {
  return streamWriterFS.createNode(null, "/", 16384 | /* S_IFDIR */ 511, 0);
};

streamWriterFS.createNode = function() {
  var node = MEMFS.createNode.apply(MEMFS, arguments);
  if (FS.isDir(node.mode)) {
    if (!streamWriterFS.dir_node_ops) {
      streamWriterFS.dir_node_ops = Object.create(node.node_ops);
      streamWriterFS.dir_node_ops.mknod = function(parent, name, mode, dev) {
        return streamWriterFS.createNode(parent, name, mode, dev);
      };
    }
    node.node_ops = streamWriterFS.dir_node_ops;
  } else if (FS.isFile(node.mode)) {
    node.stream_ops = writerCallbacks;
  }
  return node;
};

/* Original versions of all our functions, since the Module version is replaced
 * if we're a Worker */ var CAccessors = {};

var av_get_bytes_per_sample = Module.av_get_bytes_per_sample = CAccessors.av_get_bytes_per_sample = Module.cwrap("av_get_bytes_per_sample", "number", [ "number" ]);

var av_compare_ts_js = Module.av_compare_ts_js = CAccessors.av_compare_ts_js = Module.cwrap("av_compare_ts_js", "number", [ "number", "number", "number", "number", "number", "number", "number", "number" ]);

var av_opt_set = Module.av_opt_set = CAccessors.av_opt_set = Module.cwrap("av_opt_set", "number", [ "number", "string", "string", "number" ]);

var av_opt_set_int_list_js = Module.av_opt_set_int_list_js = CAccessors.av_opt_set_int_list_js = Module.cwrap("av_opt_set_int_list_js", "number", [ "number", "string", "number", "number", "number", "number" ]);

var av_frame_alloc = Module.av_frame_alloc = CAccessors.av_frame_alloc = Module.cwrap("av_frame_alloc", "number", []);

var av_frame_clone = Module.av_frame_clone = CAccessors.av_frame_clone = Module.cwrap("av_frame_clone", "number", [ "number", "number" ]);

var av_frame_free = Module.av_frame_free = CAccessors.av_frame_free = Module.cwrap("av_frame_free", null, [ "number" ]);

var av_frame_get_buffer = Module.av_frame_get_buffer = CAccessors.av_frame_get_buffer = Module.cwrap("av_frame_get_buffer", "number", [ "number", "number" ]);

var av_frame_make_writable = Module.av_frame_make_writable = CAccessors.av_frame_make_writable = Module.cwrap("av_frame_make_writable", "number", [ "number" ]);

var av_frame_ref = Module.av_frame_ref = CAccessors.av_frame_ref = Module.cwrap("av_frame_ref", "number", [ "number", "number" ]);

var av_frame_unref = Module.av_frame_unref = CAccessors.av_frame_unref = Module.cwrap("av_frame_unref", null, [ "number" ]);

var ff_frame_rescale_ts_js = Module.ff_frame_rescale_ts_js = CAccessors.ff_frame_rescale_ts_js = Module.cwrap("ff_frame_rescale_ts_js", null, [ "number", "number", "number", "number", "number" ]);

var av_log_get_level = Module.av_log_get_level = CAccessors.av_log_get_level = Module.cwrap("av_log_get_level", "number", []);

var av_log_set_level = Module.av_log_set_level = CAccessors.av_log_set_level = Module.cwrap("av_log_set_level", null, [ "number" ]);

var av_packet_alloc = Module.av_packet_alloc = CAccessors.av_packet_alloc = Module.cwrap("av_packet_alloc", "number", []);

var av_packet_clone = Module.av_packet_clone = CAccessors.av_packet_clone = Module.cwrap("av_packet_clone", "number", [ "number" ]);

var av_packet_free = Module.av_packet_free = CAccessors.av_packet_free = Module.cwrap("av_packet_free", null, [ "number" ]);

var av_packet_new_side_data = Module.av_packet_new_side_data = CAccessors.av_packet_new_side_data = Module.cwrap("av_packet_new_side_data", "number", [ "number", "number", "number" ]);

var av_packet_ref = Module.av_packet_ref = CAccessors.av_packet_ref = Module.cwrap("av_packet_ref", "number", [ "number", "number" ]);

var av_packet_rescale_ts_js = Module.av_packet_rescale_ts_js = CAccessors.av_packet_rescale_ts_js = Module.cwrap("av_packet_rescale_ts_js", null, [ "number", "number", "number", "number", "number" ]);

var av_packet_unref = Module.av_packet_unref = CAccessors.av_packet_unref = Module.cwrap("av_packet_unref", null, [ "number" ]);

var av_strdup = Module.av_strdup = CAccessors.av_strdup = Module.cwrap("av_strdup", "number", [ "string" ]);

var av_buffersink_get_frame = Module.av_buffersink_get_frame = CAccessors.av_buffersink_get_frame = Module.cwrap("av_buffersink_get_frame", "number", [ "number", "number" ]);

var av_buffersink_get_time_base_num = Module.av_buffersink_get_time_base_num = CAccessors.av_buffersink_get_time_base_num = Module.cwrap("av_buffersink_get_time_base_num", "number", [ "number" ]);

var av_buffersink_get_time_base_den = Module.av_buffersink_get_time_base_den = CAccessors.av_buffersink_get_time_base_den = Module.cwrap("av_buffersink_get_time_base_den", "number", [ "number" ]);

var av_buffersink_set_frame_size = Module.av_buffersink_set_frame_size = CAccessors.av_buffersink_set_frame_size = Module.cwrap("av_buffersink_set_frame_size", null, [ "number", "number" ]);

var ff_buffersink_set_ch_layout = Module.ff_buffersink_set_ch_layout = CAccessors.ff_buffersink_set_ch_layout = Module.cwrap("ff_buffersink_set_ch_layout", "number", [ "number", "number", "number" ]);

var av_buffersrc_add_frame_flags = Module.av_buffersrc_add_frame_flags = CAccessors.av_buffersrc_add_frame_flags = Module.cwrap("av_buffersrc_add_frame_flags", "number", [ "number", "number", "number" ]);

var avfilter_free = Module.avfilter_free = CAccessors.avfilter_free = Module.cwrap("avfilter_free", null, [ "number" ]);

var avfilter_get_by_name = Module.avfilter_get_by_name = CAccessors.avfilter_get_by_name = Module.cwrap("avfilter_get_by_name", "number", [ "string" ]);

var avfilter_graph_alloc = Module.avfilter_graph_alloc = CAccessors.avfilter_graph_alloc = Module.cwrap("avfilter_graph_alloc", "number", []);

var avfilter_graph_config = Module.avfilter_graph_config = CAccessors.avfilter_graph_config = Module.cwrap("avfilter_graph_config", "number", [ "number", "number" ]);

var avfilter_graph_create_filter_js = Module.avfilter_graph_create_filter_js = CAccessors.avfilter_graph_create_filter_js = Module.cwrap("avfilter_graph_create_filter_js", "number", [ "number", "string", "string", "number", "number" ]);

var avfilter_graph_free = Module.avfilter_graph_free = CAccessors.avfilter_graph_free = Module.cwrap("avfilter_graph_free", null, [ "number" ]);

var avfilter_graph_parse = Module.avfilter_graph_parse = CAccessors.avfilter_graph_parse = Module.cwrap("avfilter_graph_parse", "number", [ "number", "string", "number", "number", "number" ]);

var avfilter_inout_alloc = Module.avfilter_inout_alloc = CAccessors.avfilter_inout_alloc = Module.cwrap("avfilter_inout_alloc", "number", []);

var avfilter_inout_free = Module.avfilter_inout_free = CAccessors.avfilter_inout_free = Module.cwrap("avfilter_inout_free", null, [ "number" ]);

var avfilter_link = Module.avfilter_link = CAccessors.avfilter_link = Module.cwrap("avfilter_link", "number", [ "number", "number", "number", "number" ]);

var avcodec_alloc_context3 = Module.avcodec_alloc_context3 = CAccessors.avcodec_alloc_context3 = Module.cwrap("avcodec_alloc_context3", "number", [ "number" ]);

var avcodec_close = Module.avcodec_close = CAccessors.avcodec_close = Module.cwrap("avcodec_close", "number", [ "number" ]);

var avcodec_descriptor_get = Module.avcodec_descriptor_get = CAccessors.avcodec_descriptor_get = Module.cwrap("avcodec_descriptor_get", "number", [ "number" ]);

var avcodec_descriptor_get_by_name = Module.avcodec_descriptor_get_by_name = CAccessors.avcodec_descriptor_get_by_name = Module.cwrap("avcodec_descriptor_get_by_name", "number", [ "string" ]);

var avcodec_descriptor_next = Module.avcodec_descriptor_next = CAccessors.avcodec_descriptor_next = Module.cwrap("avcodec_descriptor_next", "number", [ "number" ]);

var avcodec_find_decoder = Module.avcodec_find_decoder = CAccessors.avcodec_find_decoder = Module.cwrap("avcodec_find_decoder", "number", [ "number" ]);

var avcodec_find_decoder_by_name = Module.avcodec_find_decoder_by_name = CAccessors.avcodec_find_decoder_by_name = Module.cwrap("avcodec_find_decoder_by_name", "number", [ "string" ]);

var avcodec_find_encoder = Module.avcodec_find_encoder = CAccessors.avcodec_find_encoder = Module.cwrap("avcodec_find_encoder", "number", [ "number" ]);

var avcodec_find_encoder_by_name = Module.avcodec_find_encoder_by_name = CAccessors.avcodec_find_encoder_by_name = Module.cwrap("avcodec_find_encoder_by_name", "number", [ "string" ]);

var avcodec_free_context = Module.avcodec_free_context = CAccessors.avcodec_free_context = Module.cwrap("avcodec_free_context", null, [ "number" ]);

var avcodec_get_name = Module.avcodec_get_name = CAccessors.avcodec_get_name = Module.cwrap("avcodec_get_name", "string", [ "number" ]);

var avcodec_open2 = Module.avcodec_open2 = CAccessors.avcodec_open2 = Module.cwrap("avcodec_open2", "number", [ "number", "number", "number" ]);

var avcodec_open2_js = Module.avcodec_open2_js = CAccessors.avcodec_open2_js = Module.cwrap("avcodec_open2_js", "number", [ "number", "number", "number" ]);

var avcodec_parameters_alloc = Module.avcodec_parameters_alloc = CAccessors.avcodec_parameters_alloc = Module.cwrap("avcodec_parameters_alloc", "number", []);

var avcodec_parameters_copy = Module.avcodec_parameters_copy = CAccessors.avcodec_parameters_copy = Module.cwrap("avcodec_parameters_copy", "number", [ "number", "number" ]);

var avcodec_parameters_free = Module.avcodec_parameters_free = CAccessors.avcodec_parameters_free = Module.cwrap("avcodec_parameters_free", null, [ "number" ]);

var avcodec_parameters_from_context = Module.avcodec_parameters_from_context = CAccessors.avcodec_parameters_from_context = Module.cwrap("avcodec_parameters_from_context", "number", [ "number", "number" ]);

var avcodec_parameters_to_context = Module.avcodec_parameters_to_context = CAccessors.avcodec_parameters_to_context = Module.cwrap("avcodec_parameters_to_context", "number", [ "number", "number" ]);

var avcodec_receive_frame = Module.avcodec_receive_frame = CAccessors.avcodec_receive_frame = Module.cwrap("avcodec_receive_frame", "number", [ "number", "number" ]);

var avcodec_receive_packet = Module.avcodec_receive_packet = CAccessors.avcodec_receive_packet = Module.cwrap("avcodec_receive_packet", "number", [ "number", "number" ]);

var avcodec_send_frame = Module.avcodec_send_frame = CAccessors.avcodec_send_frame = Module.cwrap("avcodec_send_frame", "number", [ "number", "number" ]);

var avcodec_send_packet = Module.avcodec_send_packet = CAccessors.avcodec_send_packet = Module.cwrap("avcodec_send_packet", "number", [ "number", "number" ]);

var av_find_input_format = Module.av_find_input_format = CAccessors.av_find_input_format = Module.cwrap("av_find_input_format", "number", [ "string" ]);

var avformat_alloc_context = Module.avformat_alloc_context = CAccessors.avformat_alloc_context = Module.cwrap("avformat_alloc_context", "number", []);

var avformat_alloc_output_context2_js = Module.avformat_alloc_output_context2_js = CAccessors.avformat_alloc_output_context2_js = Module.cwrap("avformat_alloc_output_context2_js", "number", [ "number", "string", "string" ]);

var avformat_close_input = Module.avformat_close_input = CAccessors.avformat_close_input = Module.cwrap("avformat_close_input", null, [ "number" ]);

var avformat_find_stream_info = Module.avformat_find_stream_info = CAccessors.avformat_find_stream_info = Module.cwrap("avformat_find_stream_info", "number", [ "number", "number" ], {
  async: true
});

var avformat_find_stream_info__raw = avformat_find_stream_info;

avformat_find_stream_info = Module.avformat_find_stream_info = function() {
  var args = arguments;
  var ret = avformat_find_stream_info__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_find_stream_info = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_find_stream_info.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_flush = Module.avformat_flush = CAccessors.avformat_flush = Module.cwrap("avformat_flush", "number", [ "number" ]);

var avformat_free_context = Module.avformat_free_context = CAccessors.avformat_free_context = Module.cwrap("avformat_free_context", null, [ "number" ]);

var avformat_new_stream = Module.avformat_new_stream = CAccessors.avformat_new_stream = Module.cwrap("avformat_new_stream", "number", [ "number", "number" ]);

var avformat_open_input = Module.avformat_open_input = CAccessors.avformat_open_input = Module.cwrap("avformat_open_input", "number", [ "number", "string", "number", "number" ], {
  async: true
});

var avformat_open_input__raw = avformat_open_input;

avformat_open_input = Module.avformat_open_input = function() {
  var args = arguments;
  var ret = avformat_open_input__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_open_input = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_open_input.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_open_input_js = Module.avformat_open_input_js = CAccessors.avformat_open_input_js = Module.cwrap("avformat_open_input_js", "number", [ "string", "number", "number" ], {
  async: true
});

var avformat_open_input_js__raw = avformat_open_input_js;

avformat_open_input_js = Module.avformat_open_input_js = function() {
  var args = arguments;
  var ret = avformat_open_input_js__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_open_input_js = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_open_input_js.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var av_seek_frame = Module.av_seek_frame = CAccessors.av_seek_frame = Module.cwrap("av_seek_frame", "number", [ "number", "number", "number", "number" ], {
  async: true
});

var av_seek_frame__raw = av_seek_frame;

av_seek_frame = Module.av_seek_frame = function() {
  var args = arguments;
  var ret = av_seek_frame__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.av_seek_frame = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return av_seek_frame.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_seek_file = Module.avformat_seek_file = CAccessors.avformat_seek_file = Module.cwrap("avformat_seek_file", "number", [ "number", "number", "number", "number", "number", "number" ], {
  async: true
});

var avformat_seek_file__raw = avformat_seek_file;

avformat_seek_file = Module.avformat_seek_file = function() {
  var args = arguments;
  var ret = avformat_seek_file__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_seek_file = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_seek_file.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_seek_file_min = Module.avformat_seek_file_min = CAccessors.avformat_seek_file_min = Module.cwrap("avformat_seek_file_min", "number", [ "number", "number", "number", "number" ], {
  async: true
});

var avformat_seek_file_min__raw = avformat_seek_file_min;

avformat_seek_file_min = Module.avformat_seek_file_min = function() {
  var args = arguments;
  var ret = avformat_seek_file_min__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_seek_file_min = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_seek_file_min.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_seek_file_max = Module.avformat_seek_file_max = CAccessors.avformat_seek_file_max = Module.cwrap("avformat_seek_file_max", "number", [ "number", "number", "number", "number" ], {
  async: true
});

var avformat_seek_file_max__raw = avformat_seek_file_max;

avformat_seek_file_max = Module.avformat_seek_file_max = function() {
  var args = arguments;
  var ret = avformat_seek_file_max__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_seek_file_max = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_seek_file_max.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_seek_file_approx = Module.avformat_seek_file_approx = CAccessors.avformat_seek_file_approx = Module.cwrap("avformat_seek_file_approx", "number", [ "number", "number", "number", "number" ], {
  async: true
});

var avformat_seek_file_approx__raw = avformat_seek_file_approx;

avformat_seek_file_approx = Module.avformat_seek_file_approx = function() {
  var args = arguments;
  var ret = avformat_seek_file_approx__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.avformat_seek_file_approx = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return avformat_seek_file_approx.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var avformat_write_header = Module.avformat_write_header = CAccessors.avformat_write_header = Module.cwrap("avformat_write_header", "number", [ "number", "number" ]);

var avio_open2_js = Module.avio_open2_js = CAccessors.avio_open2_js = Module.cwrap("avio_open2_js", "number", [ "string", "number", "number", "number" ]);

var avio_close = Module.avio_close = CAccessors.avio_close = Module.cwrap("avio_close", "number", [ "number" ]);

var avio_flush = Module.avio_flush = CAccessors.avio_flush = Module.cwrap("avio_flush", null, [ "number" ]);

var av_find_best_stream = Module.av_find_best_stream = CAccessors.av_find_best_stream = Module.cwrap("av_find_best_stream", "number", [ "number", "number", "number", "number", "number", "number" ]);

var av_get_sample_fmt_name = Module.av_get_sample_fmt_name = CAccessors.av_get_sample_fmt_name = Module.cwrap("av_get_sample_fmt_name", "string", [ "number" ]);

var av_grow_packet = Module.av_grow_packet = CAccessors.av_grow_packet = Module.cwrap("av_grow_packet", "number", [ "number", "number" ]);

var av_interleaved_write_frame = Module.av_interleaved_write_frame = CAccessors.av_interleaved_write_frame = Module.cwrap("av_interleaved_write_frame", "number", [ "number", "number" ]);

var av_packet_make_writable = Module.av_packet_make_writable = CAccessors.av_packet_make_writable = Module.cwrap("av_packet_make_writable", "number", [ "number" ]);

var av_pix_fmt_desc_get = Module.av_pix_fmt_desc_get = CAccessors.av_pix_fmt_desc_get = Module.cwrap("av_pix_fmt_desc_get", "number", [ "number" ]);

var av_read_frame = Module.av_read_frame = CAccessors.av_read_frame = Module.cwrap("av_read_frame", "number", [ "number", "number" ], {
  async: true
});

var av_read_frame__raw = av_read_frame;

av_read_frame = Module.av_read_frame = function() {
  var args = arguments;
  var ret = av_read_frame__raw.apply(void 0, args);
  if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) {
    return ret.then(function(ret) {
      if (ret === -11) throw Module.fsThrownError;
      return ret;
    });
  }
  return ret;
};

Module.av_read_frame = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return av_read_frame.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var av_shrink_packet = Module.av_shrink_packet = CAccessors.av_shrink_packet = Module.cwrap("av_shrink_packet", null, [ "number", "number" ]);

var av_write_frame = Module.av_write_frame = CAccessors.av_write_frame = Module.cwrap("av_write_frame", "number", [ "number", "number" ]);

var av_write_trailer = Module.av_write_trailer = CAccessors.av_write_trailer = Module.cwrap("av_write_trailer", "number", [ "number" ]);

var av_dict_copy_js = Module.av_dict_copy_js = CAccessors.av_dict_copy_js = Module.cwrap("av_dict_copy_js", "number", [ "number", "number", "number" ]);

var av_dict_free = Module.av_dict_free = CAccessors.av_dict_free = Module.cwrap("av_dict_free", null, [ "number" ]);

var av_dict_set_js = Module.av_dict_set_js = CAccessors.av_dict_set_js = Module.cwrap("av_dict_set_js", "number", [ "number", "string", "string", "number" ]);

var sws_getContext = Module.sws_getContext = CAccessors.sws_getContext = Module.cwrap("sws_getContext", "number", [ "number", "number", "number", "number", "number", "number", "number", "number", "number", "number" ]);

var sws_freeContext = Module.sws_freeContext = CAccessors.sws_freeContext = Module.cwrap("sws_freeContext", null, [ "number" ]);

var sws_scale_frame = Module.sws_scale_frame = CAccessors.sws_scale_frame = Module.cwrap("sws_scale_frame", "number", [ "number", "number", "number" ]);

var AVPacketSideData_data = Module.AVPacketSideData_data = CAccessors.AVPacketSideData_data = Module.cwrap("AVPacketSideData_data", "number", [ "number", "number" ]);

var AVPacketSideData_size = Module.AVPacketSideData_size = CAccessors.AVPacketSideData_size = Module.cwrap("AVPacketSideData_size", "number", [ "number", "number" ]);

var AVPacketSideData_type = Module.AVPacketSideData_type = CAccessors.AVPacketSideData_type = Module.cwrap("AVPacketSideData_type", "number", [ "number", "number" ]);

var AVPixFmtDescriptor_comp_depth = Module.AVPixFmtDescriptor_comp_depth = CAccessors.AVPixFmtDescriptor_comp_depth = Module.cwrap("AVPixFmtDescriptor_comp_depth", "number", [ "number", "number" ]);

var ff_error = Module.ff_error = CAccessors.ff_error = Module.cwrap("ff_error", "string", [ "number" ]);

var ff_nothing = Module.ff_nothing = CAccessors.ff_nothing = Module.cwrap("ff_nothing", null, [], {
  async: true
});

Module.ff_nothing = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return ff_nothing.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var calloc = Module.calloc = CAccessors.calloc = Module.cwrap("calloc", "number", [ "number", "number" ]);

var close = Module.close = CAccessors.close = Module.cwrap("close", "number", [ "number" ]);

var dup2 = Module.dup2 = CAccessors.dup2 = Module.cwrap("dup2", "number", [ "number", "number" ]);

var free = Module.free = CAccessors.free = Module.cwrap("free", null, [ "number" ]);

var malloc = Module.malloc = CAccessors.malloc = Module.cwrap("malloc", "number", [ "number" ]);

var mallinfo_uordblks = Module.mallinfo_uordblks = CAccessors.mallinfo_uordblks = Module.cwrap("mallinfo_uordblks", "number", []);

var open = Module.open = CAccessors.open = Module.cwrap("open", "number", [ "string", "number", "number" ]);

var strerror = Module.strerror = CAccessors.strerror = Module.cwrap("strerror", "string", [ "number" ]);

var libavjs_with_swscale = Module.libavjs_with_swscale = CAccessors.libavjs_with_swscale = Module.cwrap("libavjs_with_swscale", "number", []);

var libavjs_create_main_thread = Module.libavjs_create_main_thread = CAccessors.libavjs_create_main_thread = Module.cwrap("libavjs_create_main_thread", "number", []);

var ffmpeg_main = Module.ffmpeg_main = CAccessors.ffmpeg_main = Module.cwrap("ffmpeg_main", "number", [ "number", "number" ], {
  async: true
});

Module.ffmpeg_main = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return ffmpeg_main.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var ffprobe_main = Module.ffprobe_main = CAccessors.ffprobe_main = Module.cwrap("ffprobe_main", "number", [ "number", "number" ], {
  async: true
});

Module.ffprobe_main = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return ffprobe_main.apply(void 0, args);
  });
  return Module.serializationPromise;
};

var AVFrame_channel_layout = Module.AVFrame_channel_layout = CAccessors.AVFrame_channel_layout = Module.cwrap("AVFrame_channel_layout", "number", [ "number" ]);

var AVFrame_channel_layout_s = Module.AVFrame_channel_layout_s = CAccessors.AVFrame_channel_layout_s = Module.cwrap("AVFrame_channel_layout_s", null, [ "number", "number" ]);

var AVFrame_channel_layouthi = Module.AVFrame_channel_layouthi = CAccessors.AVFrame_channel_layouthi = Module.cwrap("AVFrame_channel_layouthi", "number", [ "number" ]);

var AVFrame_channel_layouthi_s = Module.AVFrame_channel_layouthi_s = CAccessors.AVFrame_channel_layouthi_s = Module.cwrap("AVFrame_channel_layouthi_s", null, [ "number", "number" ]);

var AVFrame_channels = Module.AVFrame_channels = CAccessors.AVFrame_channels = Module.cwrap("AVFrame_channels", "number", [ "number" ]);

var AVFrame_channels_s = Module.AVFrame_channels_s = CAccessors.AVFrame_channels_s = Module.cwrap("AVFrame_channels_s", null, [ "number", "number" ]);

var AVFrame_channel_layoutmask = Module.AVFrame_channel_layoutmask = CAccessors.AVFrame_channel_layoutmask = Module.cwrap("AVFrame_channel_layoutmask", "number", [ "number" ]);

var AVFrame_channel_layoutmask_s = Module.AVFrame_channel_layoutmask_s = CAccessors.AVFrame_channel_layoutmask_s = Module.cwrap("AVFrame_channel_layoutmask_s", null, [ "number", "number" ]);

var AVFrame_ch_layout_nb_channels = Module.AVFrame_ch_layout_nb_channels = CAccessors.AVFrame_ch_layout_nb_channels = Module.cwrap("AVFrame_ch_layout_nb_channels", "number", [ "number" ]);

var AVFrame_ch_layout_nb_channels_s = Module.AVFrame_ch_layout_nb_channels_s = CAccessors.AVFrame_ch_layout_nb_channels_s = Module.cwrap("AVFrame_ch_layout_nb_channels_s", null, [ "number", "number" ]);

var AVFrame_crop_bottom = Module.AVFrame_crop_bottom = CAccessors.AVFrame_crop_bottom = Module.cwrap("AVFrame_crop_bottom", "number", [ "number" ]);

var AVFrame_crop_bottom_s = Module.AVFrame_crop_bottom_s = CAccessors.AVFrame_crop_bottom_s = Module.cwrap("AVFrame_crop_bottom_s", null, [ "number", "number" ]);

var AVFrame_crop_left = Module.AVFrame_crop_left = CAccessors.AVFrame_crop_left = Module.cwrap("AVFrame_crop_left", "number", [ "number" ]);

var AVFrame_crop_left_s = Module.AVFrame_crop_left_s = CAccessors.AVFrame_crop_left_s = Module.cwrap("AVFrame_crop_left_s", null, [ "number", "number" ]);

var AVFrame_crop_right = Module.AVFrame_crop_right = CAccessors.AVFrame_crop_right = Module.cwrap("AVFrame_crop_right", "number", [ "number" ]);

var AVFrame_crop_right_s = Module.AVFrame_crop_right_s = CAccessors.AVFrame_crop_right_s = Module.cwrap("AVFrame_crop_right_s", null, [ "number", "number" ]);

var AVFrame_crop_top = Module.AVFrame_crop_top = CAccessors.AVFrame_crop_top = Module.cwrap("AVFrame_crop_top", "number", [ "number" ]);

var AVFrame_crop_top_s = Module.AVFrame_crop_top_s = CAccessors.AVFrame_crop_top_s = Module.cwrap("AVFrame_crop_top_s", null, [ "number", "number" ]);

var AVFrame_data_a = Module.AVFrame_data_a = CAccessors.AVFrame_data_a = Module.cwrap("AVFrame_data_a", "number", [ "number", "number" ]);

var AVFrame_data_a_s = Module.AVFrame_data_a_s = CAccessors.AVFrame_data_a_s = Module.cwrap("AVFrame_data_a_s", null, [ "number", "number", "number" ]);

var AVFrame_format = Module.AVFrame_format = CAccessors.AVFrame_format = Module.cwrap("AVFrame_format", "number", [ "number" ]);

var AVFrame_format_s = Module.AVFrame_format_s = CAccessors.AVFrame_format_s = Module.cwrap("AVFrame_format_s", null, [ "number", "number" ]);

var AVFrame_height = Module.AVFrame_height = CAccessors.AVFrame_height = Module.cwrap("AVFrame_height", "number", [ "number" ]);

var AVFrame_height_s = Module.AVFrame_height_s = CAccessors.AVFrame_height_s = Module.cwrap("AVFrame_height_s", null, [ "number", "number" ]);

var AVFrame_key_frame = Module.AVFrame_key_frame = CAccessors.AVFrame_key_frame = Module.cwrap("AVFrame_key_frame", "number", [ "number" ]);

var AVFrame_key_frame_s = Module.AVFrame_key_frame_s = CAccessors.AVFrame_key_frame_s = Module.cwrap("AVFrame_key_frame_s", null, [ "number", "number" ]);

var AVFrame_linesize_a = Module.AVFrame_linesize_a = CAccessors.AVFrame_linesize_a = Module.cwrap("AVFrame_linesize_a", "number", [ "number", "number" ]);

var AVFrame_linesize_a_s = Module.AVFrame_linesize_a_s = CAccessors.AVFrame_linesize_a_s = Module.cwrap("AVFrame_linesize_a_s", null, [ "number", "number", "number" ]);

var AVFrame_nb_samples = Module.AVFrame_nb_samples = CAccessors.AVFrame_nb_samples = Module.cwrap("AVFrame_nb_samples", "number", [ "number" ]);

var AVFrame_nb_samples_s = Module.AVFrame_nb_samples_s = CAccessors.AVFrame_nb_samples_s = Module.cwrap("AVFrame_nb_samples_s", null, [ "number", "number" ]);

var AVFrame_pict_type = Module.AVFrame_pict_type = CAccessors.AVFrame_pict_type = Module.cwrap("AVFrame_pict_type", "number", [ "number" ]);

var AVFrame_pict_type_s = Module.AVFrame_pict_type_s = CAccessors.AVFrame_pict_type_s = Module.cwrap("AVFrame_pict_type_s", null, [ "number", "number" ]);

var AVFrame_pts = Module.AVFrame_pts = CAccessors.AVFrame_pts = Module.cwrap("AVFrame_pts", "number", [ "number" ]);

var AVFrame_pts_s = Module.AVFrame_pts_s = CAccessors.AVFrame_pts_s = Module.cwrap("AVFrame_pts_s", null, [ "number", "number" ]);

var AVFrame_ptshi = Module.AVFrame_ptshi = CAccessors.AVFrame_ptshi = Module.cwrap("AVFrame_ptshi", "number", [ "number" ]);

var AVFrame_ptshi_s = Module.AVFrame_ptshi_s = CAccessors.AVFrame_ptshi_s = Module.cwrap("AVFrame_ptshi_s", null, [ "number", "number" ]);

var AVFrame_sample_aspect_ratio_num = Module.AVFrame_sample_aspect_ratio_num = CAccessors.AVFrame_sample_aspect_ratio_num = Module.cwrap("AVFrame_sample_aspect_ratio_num", "number", [ "number" ]);

var AVFrame_sample_aspect_ratio_num_s = Module.AVFrame_sample_aspect_ratio_num_s = CAccessors.AVFrame_sample_aspect_ratio_num_s = Module.cwrap("AVFrame_sample_aspect_ratio_num_s", null, [ "number", "number" ]);

var AVFrame_sample_aspect_ratio_den = Module.AVFrame_sample_aspect_ratio_den = CAccessors.AVFrame_sample_aspect_ratio_den = Module.cwrap("AVFrame_sample_aspect_ratio_den", "number", [ "number" ]);

var AVFrame_sample_aspect_ratio_den_s = Module.AVFrame_sample_aspect_ratio_den_s = CAccessors.AVFrame_sample_aspect_ratio_den_s = Module.cwrap("AVFrame_sample_aspect_ratio_den_s", null, [ "number", "number" ]);

var AVFrame_sample_aspect_ratio_s = Module.AVFrame_sample_aspect_ratio_s = CAccessors.AVFrame_sample_aspect_ratio_s = Module.cwrap("AVFrame_sample_aspect_ratio_s", null, [ "number", "number", "number" ]);

var AVFrame_sample_rate = Module.AVFrame_sample_rate = CAccessors.AVFrame_sample_rate = Module.cwrap("AVFrame_sample_rate", "number", [ "number" ]);

var AVFrame_sample_rate_s = Module.AVFrame_sample_rate_s = CAccessors.AVFrame_sample_rate_s = Module.cwrap("AVFrame_sample_rate_s", null, [ "number", "number" ]);

var AVFrame_time_base_num = Module.AVFrame_time_base_num = CAccessors.AVFrame_time_base_num = Module.cwrap("AVFrame_time_base_num", "number", [ "number" ]);

var AVFrame_time_base_num_s = Module.AVFrame_time_base_num_s = CAccessors.AVFrame_time_base_num_s = Module.cwrap("AVFrame_time_base_num_s", null, [ "number", "number" ]);

var AVFrame_time_base_den = Module.AVFrame_time_base_den = CAccessors.AVFrame_time_base_den = Module.cwrap("AVFrame_time_base_den", "number", [ "number" ]);

var AVFrame_time_base_den_s = Module.AVFrame_time_base_den_s = CAccessors.AVFrame_time_base_den_s = Module.cwrap("AVFrame_time_base_den_s", null, [ "number", "number" ]);

var AVFrame_time_base_s = Module.AVFrame_time_base_s = CAccessors.AVFrame_time_base_s = Module.cwrap("AVFrame_time_base_s", null, [ "number", "number", "number" ]);

var AVFrame_width = Module.AVFrame_width = CAccessors.AVFrame_width = Module.cwrap("AVFrame_width", "number", [ "number" ]);

var AVFrame_width_s = Module.AVFrame_width_s = CAccessors.AVFrame_width_s = Module.cwrap("AVFrame_width_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_flags = Module.AVPixFmtDescriptor_flags = CAccessors.AVPixFmtDescriptor_flags = Module.cwrap("AVPixFmtDescriptor_flags", "number", [ "number" ]);

var AVPixFmtDescriptor_flags_s = Module.AVPixFmtDescriptor_flags_s = CAccessors.AVPixFmtDescriptor_flags_s = Module.cwrap("AVPixFmtDescriptor_flags_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_log2_chroma_h = Module.AVPixFmtDescriptor_log2_chroma_h = CAccessors.AVPixFmtDescriptor_log2_chroma_h = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h", "number", [ "number" ]);

var AVPixFmtDescriptor_log2_chroma_h_s = Module.AVPixFmtDescriptor_log2_chroma_h_s = CAccessors.AVPixFmtDescriptor_log2_chroma_h_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_log2_chroma_w = Module.AVPixFmtDescriptor_log2_chroma_w = CAccessors.AVPixFmtDescriptor_log2_chroma_w = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w", "number", [ "number" ]);

var AVPixFmtDescriptor_log2_chroma_w_s = Module.AVPixFmtDescriptor_log2_chroma_w_s = CAccessors.AVPixFmtDescriptor_log2_chroma_w_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w_s", null, [ "number", "number" ]);

var AVPixFmtDescriptor_nb_components = Module.AVPixFmtDescriptor_nb_components = CAccessors.AVPixFmtDescriptor_nb_components = Module.cwrap("AVPixFmtDescriptor_nb_components", "number", [ "number" ]);

var AVPixFmtDescriptor_nb_components_s = Module.AVPixFmtDescriptor_nb_components_s = CAccessors.AVPixFmtDescriptor_nb_components_s = Module.cwrap("AVPixFmtDescriptor_nb_components_s", null, [ "number", "number" ]);

var AVCodec_sample_fmts = Module.AVCodec_sample_fmts = CAccessors.AVCodec_sample_fmts = Module.cwrap("AVCodec_sample_fmts", "number", [ "number" ]);

var AVCodec_sample_fmts_s = Module.AVCodec_sample_fmts_s = CAccessors.AVCodec_sample_fmts_s = Module.cwrap("AVCodec_sample_fmts_s", null, [ "number", "number" ]);

var AVCodec_sample_fmts_a = Module.AVCodec_sample_fmts_a = CAccessors.AVCodec_sample_fmts_a = Module.cwrap("AVCodec_sample_fmts_a", "number", [ "number", "number" ]);

var AVCodec_sample_fmts_a_s = Module.AVCodec_sample_fmts_a_s = CAccessors.AVCodec_sample_fmts_a_s = Module.cwrap("AVCodec_sample_fmts_a_s", null, [ "number", "number", "number" ]);

var AVCodec_supported_samplerates = Module.AVCodec_supported_samplerates = CAccessors.AVCodec_supported_samplerates = Module.cwrap("AVCodec_supported_samplerates", "number", [ "number" ]);

var AVCodec_supported_samplerates_s = Module.AVCodec_supported_samplerates_s = CAccessors.AVCodec_supported_samplerates_s = Module.cwrap("AVCodec_supported_samplerates_s", null, [ "number", "number" ]);

var AVCodec_supported_samplerates_a = Module.AVCodec_supported_samplerates_a = CAccessors.AVCodec_supported_samplerates_a = Module.cwrap("AVCodec_supported_samplerates_a", "number", [ "number", "number" ]);

var AVCodec_supported_samplerates_a_s = Module.AVCodec_supported_samplerates_a_s = CAccessors.AVCodec_supported_samplerates_a_s = Module.cwrap("AVCodec_supported_samplerates_a_s", null, [ "number", "number", "number" ]);

var AVCodec_type = Module.AVCodec_type = CAccessors.AVCodec_type = Module.cwrap("AVCodec_type", "number", [ "number" ]);

var AVCodec_type_s = Module.AVCodec_type_s = CAccessors.AVCodec_type_s = Module.cwrap("AVCodec_type_s", null, [ "number", "number" ]);

var AVCodecContext_codec_id = Module.AVCodecContext_codec_id = CAccessors.AVCodecContext_codec_id = Module.cwrap("AVCodecContext_codec_id", "number", [ "number" ]);

var AVCodecContext_codec_id_s = Module.AVCodecContext_codec_id_s = CAccessors.AVCodecContext_codec_id_s = Module.cwrap("AVCodecContext_codec_id_s", null, [ "number", "number" ]);

var AVCodecContext_codec_type = Module.AVCodecContext_codec_type = CAccessors.AVCodecContext_codec_type = Module.cwrap("AVCodecContext_codec_type", "number", [ "number" ]);

var AVCodecContext_codec_type_s = Module.AVCodecContext_codec_type_s = CAccessors.AVCodecContext_codec_type_s = Module.cwrap("AVCodecContext_codec_type_s", null, [ "number", "number" ]);

var AVCodecContext_bit_rate = Module.AVCodecContext_bit_rate = CAccessors.AVCodecContext_bit_rate = Module.cwrap("AVCodecContext_bit_rate", "number", [ "number" ]);

var AVCodecContext_bit_rate_s = Module.AVCodecContext_bit_rate_s = CAccessors.AVCodecContext_bit_rate_s = Module.cwrap("AVCodecContext_bit_rate_s", null, [ "number", "number" ]);

var AVCodecContext_bit_ratehi = Module.AVCodecContext_bit_ratehi = CAccessors.AVCodecContext_bit_ratehi = Module.cwrap("AVCodecContext_bit_ratehi", "number", [ "number" ]);

var AVCodecContext_bit_ratehi_s = Module.AVCodecContext_bit_ratehi_s = CAccessors.AVCodecContext_bit_ratehi_s = Module.cwrap("AVCodecContext_bit_ratehi_s", null, [ "number", "number" ]);

var AVCodecContext_channel_layout = Module.AVCodecContext_channel_layout = CAccessors.AVCodecContext_channel_layout = Module.cwrap("AVCodecContext_channel_layout", "number", [ "number" ]);

var AVCodecContext_channel_layout_s = Module.AVCodecContext_channel_layout_s = CAccessors.AVCodecContext_channel_layout_s = Module.cwrap("AVCodecContext_channel_layout_s", null, [ "number", "number" ]);

var AVCodecContext_channel_layouthi = Module.AVCodecContext_channel_layouthi = CAccessors.AVCodecContext_channel_layouthi = Module.cwrap("AVCodecContext_channel_layouthi", "number", [ "number" ]);

var AVCodecContext_channel_layouthi_s = Module.AVCodecContext_channel_layouthi_s = CAccessors.AVCodecContext_channel_layouthi_s = Module.cwrap("AVCodecContext_channel_layouthi_s", null, [ "number", "number" ]);

var AVCodecContext_channels = Module.AVCodecContext_channels = CAccessors.AVCodecContext_channels = Module.cwrap("AVCodecContext_channels", "number", [ "number" ]);

var AVCodecContext_channels_s = Module.AVCodecContext_channels_s = CAccessors.AVCodecContext_channels_s = Module.cwrap("AVCodecContext_channels_s", null, [ "number", "number" ]);

var AVCodecContext_channel_layoutmask = Module.AVCodecContext_channel_layoutmask = CAccessors.AVCodecContext_channel_layoutmask = Module.cwrap("AVCodecContext_channel_layoutmask", "number", [ "number" ]);

var AVCodecContext_channel_layoutmask_s = Module.AVCodecContext_channel_layoutmask_s = CAccessors.AVCodecContext_channel_layoutmask_s = Module.cwrap("AVCodecContext_channel_layoutmask_s", null, [ "number", "number" ]);

var AVCodecContext_ch_layout_nb_channels = Module.AVCodecContext_ch_layout_nb_channels = CAccessors.AVCodecContext_ch_layout_nb_channels = Module.cwrap("AVCodecContext_ch_layout_nb_channels", "number", [ "number" ]);

var AVCodecContext_ch_layout_nb_channels_s = Module.AVCodecContext_ch_layout_nb_channels_s = CAccessors.AVCodecContext_ch_layout_nb_channels_s = Module.cwrap("AVCodecContext_ch_layout_nb_channels_s", null, [ "number", "number" ]);

var AVCodecContext_extradata = Module.AVCodecContext_extradata = CAccessors.AVCodecContext_extradata = Module.cwrap("AVCodecContext_extradata", "number", [ "number" ]);

var AVCodecContext_extradata_s = Module.AVCodecContext_extradata_s = CAccessors.AVCodecContext_extradata_s = Module.cwrap("AVCodecContext_extradata_s", null, [ "number", "number" ]);

var AVCodecContext_extradata_size = Module.AVCodecContext_extradata_size = CAccessors.AVCodecContext_extradata_size = Module.cwrap("AVCodecContext_extradata_size", "number", [ "number" ]);

var AVCodecContext_extradata_size_s = Module.AVCodecContext_extradata_size_s = CAccessors.AVCodecContext_extradata_size_s = Module.cwrap("AVCodecContext_extradata_size_s", null, [ "number", "number" ]);

var AVCodecContext_frame_size = Module.AVCodecContext_frame_size = CAccessors.AVCodecContext_frame_size = Module.cwrap("AVCodecContext_frame_size", "number", [ "number" ]);

var AVCodecContext_frame_size_s = Module.AVCodecContext_frame_size_s = CAccessors.AVCodecContext_frame_size_s = Module.cwrap("AVCodecContext_frame_size_s", null, [ "number", "number" ]);

var AVCodecContext_framerate_num = Module.AVCodecContext_framerate_num = CAccessors.AVCodecContext_framerate_num = Module.cwrap("AVCodecContext_framerate_num", "number", [ "number" ]);

var AVCodecContext_framerate_num_s = Module.AVCodecContext_framerate_num_s = CAccessors.AVCodecContext_framerate_num_s = Module.cwrap("AVCodecContext_framerate_num_s", null, [ "number", "number" ]);

var AVCodecContext_framerate_den = Module.AVCodecContext_framerate_den = CAccessors.AVCodecContext_framerate_den = Module.cwrap("AVCodecContext_framerate_den", "number", [ "number" ]);

var AVCodecContext_framerate_den_s = Module.AVCodecContext_framerate_den_s = CAccessors.AVCodecContext_framerate_den_s = Module.cwrap("AVCodecContext_framerate_den_s", null, [ "number", "number" ]);

var AVCodecContext_framerate_s = Module.AVCodecContext_framerate_s = CAccessors.AVCodecContext_framerate_s = Module.cwrap("AVCodecContext_framerate_s", null, [ "number", "number", "number" ]);

var AVCodecContext_gop_size = Module.AVCodecContext_gop_size = CAccessors.AVCodecContext_gop_size = Module.cwrap("AVCodecContext_gop_size", "number", [ "number" ]);

var AVCodecContext_gop_size_s = Module.AVCodecContext_gop_size_s = CAccessors.AVCodecContext_gop_size_s = Module.cwrap("AVCodecContext_gop_size_s", null, [ "number", "number" ]);

var AVCodecContext_height = Module.AVCodecContext_height = CAccessors.AVCodecContext_height = Module.cwrap("AVCodecContext_height", "number", [ "number" ]);

var AVCodecContext_height_s = Module.AVCodecContext_height_s = CAccessors.AVCodecContext_height_s = Module.cwrap("AVCodecContext_height_s", null, [ "number", "number" ]);

var AVCodecContext_keyint_min = Module.AVCodecContext_keyint_min = CAccessors.AVCodecContext_keyint_min = Module.cwrap("AVCodecContext_keyint_min", "number", [ "number" ]);

var AVCodecContext_keyint_min_s = Module.AVCodecContext_keyint_min_s = CAccessors.AVCodecContext_keyint_min_s = Module.cwrap("AVCodecContext_keyint_min_s", null, [ "number", "number" ]);

var AVCodecContext_level = Module.AVCodecContext_level = CAccessors.AVCodecContext_level = Module.cwrap("AVCodecContext_level", "number", [ "number" ]);

var AVCodecContext_level_s = Module.AVCodecContext_level_s = CAccessors.AVCodecContext_level_s = Module.cwrap("AVCodecContext_level_s", null, [ "number", "number" ]);

var AVCodecContext_max_b_frames = Module.AVCodecContext_max_b_frames = CAccessors.AVCodecContext_max_b_frames = Module.cwrap("AVCodecContext_max_b_frames", "number", [ "number" ]);

var AVCodecContext_max_b_frames_s = Module.AVCodecContext_max_b_frames_s = CAccessors.AVCodecContext_max_b_frames_s = Module.cwrap("AVCodecContext_max_b_frames_s", null, [ "number", "number" ]);

var AVCodecContext_pix_fmt = Module.AVCodecContext_pix_fmt = CAccessors.AVCodecContext_pix_fmt = Module.cwrap("AVCodecContext_pix_fmt", "number", [ "number" ]);

var AVCodecContext_pix_fmt_s = Module.AVCodecContext_pix_fmt_s = CAccessors.AVCodecContext_pix_fmt_s = Module.cwrap("AVCodecContext_pix_fmt_s", null, [ "number", "number" ]);

var AVCodecContext_profile = Module.AVCodecContext_profile = CAccessors.AVCodecContext_profile = Module.cwrap("AVCodecContext_profile", "number", [ "number" ]);

var AVCodecContext_profile_s = Module.AVCodecContext_profile_s = CAccessors.AVCodecContext_profile_s = Module.cwrap("AVCodecContext_profile_s", null, [ "number", "number" ]);

var AVCodecContext_rc_max_rate = Module.AVCodecContext_rc_max_rate = CAccessors.AVCodecContext_rc_max_rate = Module.cwrap("AVCodecContext_rc_max_rate", "number", [ "number" ]);

var AVCodecContext_rc_max_rate_s = Module.AVCodecContext_rc_max_rate_s = CAccessors.AVCodecContext_rc_max_rate_s = Module.cwrap("AVCodecContext_rc_max_rate_s", null, [ "number", "number" ]);

var AVCodecContext_rc_max_ratehi = Module.AVCodecContext_rc_max_ratehi = CAccessors.AVCodecContext_rc_max_ratehi = Module.cwrap("AVCodecContext_rc_max_ratehi", "number", [ "number" ]);

var AVCodecContext_rc_max_ratehi_s = Module.AVCodecContext_rc_max_ratehi_s = CAccessors.AVCodecContext_rc_max_ratehi_s = Module.cwrap("AVCodecContext_rc_max_ratehi_s", null, [ "number", "number" ]);

var AVCodecContext_rc_min_rate = Module.AVCodecContext_rc_min_rate = CAccessors.AVCodecContext_rc_min_rate = Module.cwrap("AVCodecContext_rc_min_rate", "number", [ "number" ]);

var AVCodecContext_rc_min_rate_s = Module.AVCodecContext_rc_min_rate_s = CAccessors.AVCodecContext_rc_min_rate_s = Module.cwrap("AVCodecContext_rc_min_rate_s", null, [ "number", "number" ]);

var AVCodecContext_rc_min_ratehi = Module.AVCodecContext_rc_min_ratehi = CAccessors.AVCodecContext_rc_min_ratehi = Module.cwrap("AVCodecContext_rc_min_ratehi", "number", [ "number" ]);

var AVCodecContext_rc_min_ratehi_s = Module.AVCodecContext_rc_min_ratehi_s = CAccessors.AVCodecContext_rc_min_ratehi_s = Module.cwrap("AVCodecContext_rc_min_ratehi_s", null, [ "number", "number" ]);

var AVCodecContext_sample_aspect_ratio_num = Module.AVCodecContext_sample_aspect_ratio_num = CAccessors.AVCodecContext_sample_aspect_ratio_num = Module.cwrap("AVCodecContext_sample_aspect_ratio_num", "number", [ "number" ]);

var AVCodecContext_sample_aspect_ratio_num_s = Module.AVCodecContext_sample_aspect_ratio_num_s = CAccessors.AVCodecContext_sample_aspect_ratio_num_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_num_s", null, [ "number", "number" ]);

var AVCodecContext_sample_aspect_ratio_den = Module.AVCodecContext_sample_aspect_ratio_den = CAccessors.AVCodecContext_sample_aspect_ratio_den = Module.cwrap("AVCodecContext_sample_aspect_ratio_den", "number", [ "number" ]);

var AVCodecContext_sample_aspect_ratio_den_s = Module.AVCodecContext_sample_aspect_ratio_den_s = CAccessors.AVCodecContext_sample_aspect_ratio_den_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_den_s", null, [ "number", "number" ]);

var AVCodecContext_sample_aspect_ratio_s = Module.AVCodecContext_sample_aspect_ratio_s = CAccessors.AVCodecContext_sample_aspect_ratio_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_s", null, [ "number", "number", "number" ]);

var AVCodecContext_sample_fmt = Module.AVCodecContext_sample_fmt = CAccessors.AVCodecContext_sample_fmt = Module.cwrap("AVCodecContext_sample_fmt", "number", [ "number" ]);

var AVCodecContext_sample_fmt_s = Module.AVCodecContext_sample_fmt_s = CAccessors.AVCodecContext_sample_fmt_s = Module.cwrap("AVCodecContext_sample_fmt_s", null, [ "number", "number" ]);

var AVCodecContext_sample_rate = Module.AVCodecContext_sample_rate = CAccessors.AVCodecContext_sample_rate = Module.cwrap("AVCodecContext_sample_rate", "number", [ "number" ]);

var AVCodecContext_sample_rate_s = Module.AVCodecContext_sample_rate_s = CAccessors.AVCodecContext_sample_rate_s = Module.cwrap("AVCodecContext_sample_rate_s", null, [ "number", "number" ]);

var AVCodecContext_time_base_num = Module.AVCodecContext_time_base_num = CAccessors.AVCodecContext_time_base_num = Module.cwrap("AVCodecContext_time_base_num", "number", [ "number" ]);

var AVCodecContext_time_base_num_s = Module.AVCodecContext_time_base_num_s = CAccessors.AVCodecContext_time_base_num_s = Module.cwrap("AVCodecContext_time_base_num_s", null, [ "number", "number" ]);

var AVCodecContext_time_base_den = Module.AVCodecContext_time_base_den = CAccessors.AVCodecContext_time_base_den = Module.cwrap("AVCodecContext_time_base_den", "number", [ "number" ]);

var AVCodecContext_time_base_den_s = Module.AVCodecContext_time_base_den_s = CAccessors.AVCodecContext_time_base_den_s = Module.cwrap("AVCodecContext_time_base_den_s", null, [ "number", "number" ]);

var AVCodecContext_time_base_s = Module.AVCodecContext_time_base_s = CAccessors.AVCodecContext_time_base_s = Module.cwrap("AVCodecContext_time_base_s", null, [ "number", "number", "number" ]);

var AVCodecContext_qmax = Module.AVCodecContext_qmax = CAccessors.AVCodecContext_qmax = Module.cwrap("AVCodecContext_qmax", "number", [ "number" ]);

var AVCodecContext_qmax_s = Module.AVCodecContext_qmax_s = CAccessors.AVCodecContext_qmax_s = Module.cwrap("AVCodecContext_qmax_s", null, [ "number", "number" ]);

var AVCodecContext_qmin = Module.AVCodecContext_qmin = CAccessors.AVCodecContext_qmin = Module.cwrap("AVCodecContext_qmin", "number", [ "number" ]);

var AVCodecContext_qmin_s = Module.AVCodecContext_qmin_s = CAccessors.AVCodecContext_qmin_s = Module.cwrap("AVCodecContext_qmin_s", null, [ "number", "number" ]);

var AVCodecContext_width = Module.AVCodecContext_width = CAccessors.AVCodecContext_width = Module.cwrap("AVCodecContext_width", "number", [ "number" ]);

var AVCodecContext_width_s = Module.AVCodecContext_width_s = CAccessors.AVCodecContext_width_s = Module.cwrap("AVCodecContext_width_s", null, [ "number", "number" ]);

var AVCodecDescriptor_id = Module.AVCodecDescriptor_id = CAccessors.AVCodecDescriptor_id = Module.cwrap("AVCodecDescriptor_id", "number", [ "number" ]);

var AVCodecDescriptor_id_s = Module.AVCodecDescriptor_id_s = CAccessors.AVCodecDescriptor_id_s = Module.cwrap("AVCodecDescriptor_id_s", null, [ "number", "number" ]);

var AVCodecDescriptor_long_name = Module.AVCodecDescriptor_long_name = CAccessors.AVCodecDescriptor_long_name = Module.cwrap("AVCodecDescriptor_long_name", "number", [ "number" ]);

var AVCodecDescriptor_long_name_s = Module.AVCodecDescriptor_long_name_s = CAccessors.AVCodecDescriptor_long_name_s = Module.cwrap("AVCodecDescriptor_long_name_s", null, [ "number", "number" ]);

var AVCodecDescriptor_mime_types_a = Module.AVCodecDescriptor_mime_types_a = CAccessors.AVCodecDescriptor_mime_types_a = Module.cwrap("AVCodecDescriptor_mime_types_a", "number", [ "number", "number" ]);

var AVCodecDescriptor_mime_types_a_s = Module.AVCodecDescriptor_mime_types_a_s = CAccessors.AVCodecDescriptor_mime_types_a_s = Module.cwrap("AVCodecDescriptor_mime_types_a_s", null, [ "number", "number", "number" ]);

var AVCodecDescriptor_name = Module.AVCodecDescriptor_name = CAccessors.AVCodecDescriptor_name = Module.cwrap("AVCodecDescriptor_name", "number", [ "number" ]);

var AVCodecDescriptor_name_s = Module.AVCodecDescriptor_name_s = CAccessors.AVCodecDescriptor_name_s = Module.cwrap("AVCodecDescriptor_name_s", null, [ "number", "number" ]);

var AVCodecDescriptor_props = Module.AVCodecDescriptor_props = CAccessors.AVCodecDescriptor_props = Module.cwrap("AVCodecDescriptor_props", "number", [ "number" ]);

var AVCodecDescriptor_props_s = Module.AVCodecDescriptor_props_s = CAccessors.AVCodecDescriptor_props_s = Module.cwrap("AVCodecDescriptor_props_s", null, [ "number", "number" ]);

var AVCodecDescriptor_type = Module.AVCodecDescriptor_type = CAccessors.AVCodecDescriptor_type = Module.cwrap("AVCodecDescriptor_type", "number", [ "number" ]);

var AVCodecDescriptor_type_s = Module.AVCodecDescriptor_type_s = CAccessors.AVCodecDescriptor_type_s = Module.cwrap("AVCodecDescriptor_type_s", null, [ "number", "number" ]);

var AVCodecParameters_bit_rate = Module.AVCodecParameters_bit_rate = CAccessors.AVCodecParameters_bit_rate = Module.cwrap("AVCodecParameters_bit_rate", "number", [ "number" ]);

var AVCodecParameters_bit_rate_s = Module.AVCodecParameters_bit_rate_s = CAccessors.AVCodecParameters_bit_rate_s = Module.cwrap("AVCodecParameters_bit_rate_s", null, [ "number", "number" ]);

var AVCodecParameters_channel_layoutmask = Module.AVCodecParameters_channel_layoutmask = CAccessors.AVCodecParameters_channel_layoutmask = Module.cwrap("AVCodecParameters_channel_layoutmask", "number", [ "number" ]);

var AVCodecParameters_channel_layoutmask_s = Module.AVCodecParameters_channel_layoutmask_s = CAccessors.AVCodecParameters_channel_layoutmask_s = Module.cwrap("AVCodecParameters_channel_layoutmask_s", null, [ "number", "number" ]);

var AVCodecParameters_channels = Module.AVCodecParameters_channels = CAccessors.AVCodecParameters_channels = Module.cwrap("AVCodecParameters_channels", "number", [ "number" ]);

var AVCodecParameters_channels_s = Module.AVCodecParameters_channels_s = CAccessors.AVCodecParameters_channels_s = Module.cwrap("AVCodecParameters_channels_s", null, [ "number", "number" ]);

var AVCodecParameters_ch_layout_nb_channels = Module.AVCodecParameters_ch_layout_nb_channels = CAccessors.AVCodecParameters_ch_layout_nb_channels = Module.cwrap("AVCodecParameters_ch_layout_nb_channels", "number", [ "number" ]);

var AVCodecParameters_ch_layout_nb_channels_s = Module.AVCodecParameters_ch_layout_nb_channels_s = CAccessors.AVCodecParameters_ch_layout_nb_channels_s = Module.cwrap("AVCodecParameters_ch_layout_nb_channels_s", null, [ "number", "number" ]);

var AVCodecParameters_chroma_location = Module.AVCodecParameters_chroma_location = CAccessors.AVCodecParameters_chroma_location = Module.cwrap("AVCodecParameters_chroma_location", "number", [ "number" ]);

var AVCodecParameters_chroma_location_s = Module.AVCodecParameters_chroma_location_s = CAccessors.AVCodecParameters_chroma_location_s = Module.cwrap("AVCodecParameters_chroma_location_s", null, [ "number", "number" ]);

var AVCodecParameters_codec_id = Module.AVCodecParameters_codec_id = CAccessors.AVCodecParameters_codec_id = Module.cwrap("AVCodecParameters_codec_id", "number", [ "number" ]);

var AVCodecParameters_codec_id_s = Module.AVCodecParameters_codec_id_s = CAccessors.AVCodecParameters_codec_id_s = Module.cwrap("AVCodecParameters_codec_id_s", null, [ "number", "number" ]);

var AVCodecParameters_codec_tag = Module.AVCodecParameters_codec_tag = CAccessors.AVCodecParameters_codec_tag = Module.cwrap("AVCodecParameters_codec_tag", "number", [ "number" ]);

var AVCodecParameters_codec_tag_s = Module.AVCodecParameters_codec_tag_s = CAccessors.AVCodecParameters_codec_tag_s = Module.cwrap("AVCodecParameters_codec_tag_s", null, [ "number", "number" ]);

var AVCodecParameters_codec_type = Module.AVCodecParameters_codec_type = CAccessors.AVCodecParameters_codec_type = Module.cwrap("AVCodecParameters_codec_type", "number", [ "number" ]);

var AVCodecParameters_codec_type_s = Module.AVCodecParameters_codec_type_s = CAccessors.AVCodecParameters_codec_type_s = Module.cwrap("AVCodecParameters_codec_type_s", null, [ "number", "number" ]);

var AVCodecParameters_color_primaries = Module.AVCodecParameters_color_primaries = CAccessors.AVCodecParameters_color_primaries = Module.cwrap("AVCodecParameters_color_primaries", "number", [ "number" ]);

var AVCodecParameters_color_primaries_s = Module.AVCodecParameters_color_primaries_s = CAccessors.AVCodecParameters_color_primaries_s = Module.cwrap("AVCodecParameters_color_primaries_s", null, [ "number", "number" ]);

var AVCodecParameters_color_range = Module.AVCodecParameters_color_range = CAccessors.AVCodecParameters_color_range = Module.cwrap("AVCodecParameters_color_range", "number", [ "number" ]);

var AVCodecParameters_color_range_s = Module.AVCodecParameters_color_range_s = CAccessors.AVCodecParameters_color_range_s = Module.cwrap("AVCodecParameters_color_range_s", null, [ "number", "number" ]);

var AVCodecParameters_color_space = Module.AVCodecParameters_color_space = CAccessors.AVCodecParameters_color_space = Module.cwrap("AVCodecParameters_color_space", "number", [ "number" ]);

var AVCodecParameters_color_space_s = Module.AVCodecParameters_color_space_s = CAccessors.AVCodecParameters_color_space_s = Module.cwrap("AVCodecParameters_color_space_s", null, [ "number", "number" ]);

var AVCodecParameters_color_trc = Module.AVCodecParameters_color_trc = CAccessors.AVCodecParameters_color_trc = Module.cwrap("AVCodecParameters_color_trc", "number", [ "number" ]);

var AVCodecParameters_color_trc_s = Module.AVCodecParameters_color_trc_s = CAccessors.AVCodecParameters_color_trc_s = Module.cwrap("AVCodecParameters_color_trc_s", null, [ "number", "number" ]);

var AVCodecParameters_extradata = Module.AVCodecParameters_extradata = CAccessors.AVCodecParameters_extradata = Module.cwrap("AVCodecParameters_extradata", "number", [ "number" ]);

var AVCodecParameters_extradata_s = Module.AVCodecParameters_extradata_s = CAccessors.AVCodecParameters_extradata_s = Module.cwrap("AVCodecParameters_extradata_s", null, [ "number", "number" ]);

var AVCodecParameters_extradata_size = Module.AVCodecParameters_extradata_size = CAccessors.AVCodecParameters_extradata_size = Module.cwrap("AVCodecParameters_extradata_size", "number", [ "number" ]);

var AVCodecParameters_extradata_size_s = Module.AVCodecParameters_extradata_size_s = CAccessors.AVCodecParameters_extradata_size_s = Module.cwrap("AVCodecParameters_extradata_size_s", null, [ "number", "number" ]);

var AVCodecParameters_format = Module.AVCodecParameters_format = CAccessors.AVCodecParameters_format = Module.cwrap("AVCodecParameters_format", "number", [ "number" ]);

var AVCodecParameters_format_s = Module.AVCodecParameters_format_s = CAccessors.AVCodecParameters_format_s = Module.cwrap("AVCodecParameters_format_s", null, [ "number", "number" ]);

var AVCodecParameters_framerate_num = Module.AVCodecParameters_framerate_num = CAccessors.AVCodecParameters_framerate_num = Module.cwrap("AVCodecParameters_framerate_num", "number", [ "number" ]);

var AVCodecParameters_framerate_num_s = Module.AVCodecParameters_framerate_num_s = CAccessors.AVCodecParameters_framerate_num_s = Module.cwrap("AVCodecParameters_framerate_num_s", null, [ "number", "number" ]);

var AVCodecParameters_framerate_den = Module.AVCodecParameters_framerate_den = CAccessors.AVCodecParameters_framerate_den = Module.cwrap("AVCodecParameters_framerate_den", "number", [ "number" ]);

var AVCodecParameters_framerate_den_s = Module.AVCodecParameters_framerate_den_s = CAccessors.AVCodecParameters_framerate_den_s = Module.cwrap("AVCodecParameters_framerate_den_s", null, [ "number", "number" ]);

var AVCodecParameters_framerate_s = Module.AVCodecParameters_framerate_s = CAccessors.AVCodecParameters_framerate_s = Module.cwrap("AVCodecParameters_framerate_s", null, [ "number", "number", "number" ]);

var AVCodecParameters_height = Module.AVCodecParameters_height = CAccessors.AVCodecParameters_height = Module.cwrap("AVCodecParameters_height", "number", [ "number" ]);

var AVCodecParameters_height_s = Module.AVCodecParameters_height_s = CAccessors.AVCodecParameters_height_s = Module.cwrap("AVCodecParameters_height_s", null, [ "number", "number" ]);

var AVCodecParameters_level = Module.AVCodecParameters_level = CAccessors.AVCodecParameters_level = Module.cwrap("AVCodecParameters_level", "number", [ "number" ]);

var AVCodecParameters_level_s = Module.AVCodecParameters_level_s = CAccessors.AVCodecParameters_level_s = Module.cwrap("AVCodecParameters_level_s", null, [ "number", "number" ]);

var AVCodecParameters_profile = Module.AVCodecParameters_profile = CAccessors.AVCodecParameters_profile = Module.cwrap("AVCodecParameters_profile", "number", [ "number" ]);

var AVCodecParameters_profile_s = Module.AVCodecParameters_profile_s = CAccessors.AVCodecParameters_profile_s = Module.cwrap("AVCodecParameters_profile_s", null, [ "number", "number" ]);

var AVCodecParameters_sample_rate = Module.AVCodecParameters_sample_rate = CAccessors.AVCodecParameters_sample_rate = Module.cwrap("AVCodecParameters_sample_rate", "number", [ "number" ]);

var AVCodecParameters_sample_rate_s = Module.AVCodecParameters_sample_rate_s = CAccessors.AVCodecParameters_sample_rate_s = Module.cwrap("AVCodecParameters_sample_rate_s", null, [ "number", "number" ]);

var AVCodecParameters_width = Module.AVCodecParameters_width = CAccessors.AVCodecParameters_width = Module.cwrap("AVCodecParameters_width", "number", [ "number" ]);

var AVCodecParameters_width_s = Module.AVCodecParameters_width_s = CAccessors.AVCodecParameters_width_s = Module.cwrap("AVCodecParameters_width_s", null, [ "number", "number" ]);

var AVPacket_data = Module.AVPacket_data = CAccessors.AVPacket_data = Module.cwrap("AVPacket_data", "number", [ "number" ]);

var AVPacket_data_s = Module.AVPacket_data_s = CAccessors.AVPacket_data_s = Module.cwrap("AVPacket_data_s", null, [ "number", "number" ]);

var AVPacket_dts = Module.AVPacket_dts = CAccessors.AVPacket_dts = Module.cwrap("AVPacket_dts", "number", [ "number" ]);

var AVPacket_dts_s = Module.AVPacket_dts_s = CAccessors.AVPacket_dts_s = Module.cwrap("AVPacket_dts_s", null, [ "number", "number" ]);

var AVPacket_dtshi = Module.AVPacket_dtshi = CAccessors.AVPacket_dtshi = Module.cwrap("AVPacket_dtshi", "number", [ "number" ]);

var AVPacket_dtshi_s = Module.AVPacket_dtshi_s = CAccessors.AVPacket_dtshi_s = Module.cwrap("AVPacket_dtshi_s", null, [ "number", "number" ]);

var AVPacket_duration = Module.AVPacket_duration = CAccessors.AVPacket_duration = Module.cwrap("AVPacket_duration", "number", [ "number" ]);

var AVPacket_duration_s = Module.AVPacket_duration_s = CAccessors.AVPacket_duration_s = Module.cwrap("AVPacket_duration_s", null, [ "number", "number" ]);

var AVPacket_durationhi = Module.AVPacket_durationhi = CAccessors.AVPacket_durationhi = Module.cwrap("AVPacket_durationhi", "number", [ "number" ]);

var AVPacket_durationhi_s = Module.AVPacket_durationhi_s = CAccessors.AVPacket_durationhi_s = Module.cwrap("AVPacket_durationhi_s", null, [ "number", "number" ]);

var AVPacket_flags = Module.AVPacket_flags = CAccessors.AVPacket_flags = Module.cwrap("AVPacket_flags", "number", [ "number" ]);

var AVPacket_flags_s = Module.AVPacket_flags_s = CAccessors.AVPacket_flags_s = Module.cwrap("AVPacket_flags_s", null, [ "number", "number" ]);

var AVPacket_pos = Module.AVPacket_pos = CAccessors.AVPacket_pos = Module.cwrap("AVPacket_pos", "number", [ "number" ]);

var AVPacket_pos_s = Module.AVPacket_pos_s = CAccessors.AVPacket_pos_s = Module.cwrap("AVPacket_pos_s", null, [ "number", "number" ]);

var AVPacket_poshi = Module.AVPacket_poshi = CAccessors.AVPacket_poshi = Module.cwrap("AVPacket_poshi", "number", [ "number" ]);

var AVPacket_poshi_s = Module.AVPacket_poshi_s = CAccessors.AVPacket_poshi_s = Module.cwrap("AVPacket_poshi_s", null, [ "number", "number" ]);

var AVPacket_pts = Module.AVPacket_pts = CAccessors.AVPacket_pts = Module.cwrap("AVPacket_pts", "number", [ "number" ]);

var AVPacket_pts_s = Module.AVPacket_pts_s = CAccessors.AVPacket_pts_s = Module.cwrap("AVPacket_pts_s", null, [ "number", "number" ]);

var AVPacket_ptshi = Module.AVPacket_ptshi = CAccessors.AVPacket_ptshi = Module.cwrap("AVPacket_ptshi", "number", [ "number" ]);

var AVPacket_ptshi_s = Module.AVPacket_ptshi_s = CAccessors.AVPacket_ptshi_s = Module.cwrap("AVPacket_ptshi_s", null, [ "number", "number" ]);

var AVPacket_side_data = Module.AVPacket_side_data = CAccessors.AVPacket_side_data = Module.cwrap("AVPacket_side_data", "number", [ "number" ]);

var AVPacket_side_data_s = Module.AVPacket_side_data_s = CAccessors.AVPacket_side_data_s = Module.cwrap("AVPacket_side_data_s", null, [ "number", "number" ]);

var AVPacket_side_data_elems = Module.AVPacket_side_data_elems = CAccessors.AVPacket_side_data_elems = Module.cwrap("AVPacket_side_data_elems", "number", [ "number" ]);

var AVPacket_side_data_elems_s = Module.AVPacket_side_data_elems_s = CAccessors.AVPacket_side_data_elems_s = Module.cwrap("AVPacket_side_data_elems_s", null, [ "number", "number" ]);

var AVPacket_size = Module.AVPacket_size = CAccessors.AVPacket_size = Module.cwrap("AVPacket_size", "number", [ "number" ]);

var AVPacket_size_s = Module.AVPacket_size_s = CAccessors.AVPacket_size_s = Module.cwrap("AVPacket_size_s", null, [ "number", "number" ]);

var AVPacket_stream_index = Module.AVPacket_stream_index = CAccessors.AVPacket_stream_index = Module.cwrap("AVPacket_stream_index", "number", [ "number" ]);

var AVPacket_stream_index_s = Module.AVPacket_stream_index_s = CAccessors.AVPacket_stream_index_s = Module.cwrap("AVPacket_stream_index_s", null, [ "number", "number" ]);

var AVPacket_time_base_num = Module.AVPacket_time_base_num = CAccessors.AVPacket_time_base_num = Module.cwrap("AVPacket_time_base_num", "number", [ "number" ]);

var AVPacket_time_base_num_s = Module.AVPacket_time_base_num_s = CAccessors.AVPacket_time_base_num_s = Module.cwrap("AVPacket_time_base_num_s", null, [ "number", "number" ]);

var AVPacket_time_base_den = Module.AVPacket_time_base_den = CAccessors.AVPacket_time_base_den = Module.cwrap("AVPacket_time_base_den", "number", [ "number" ]);

var AVPacket_time_base_den_s = Module.AVPacket_time_base_den_s = CAccessors.AVPacket_time_base_den_s = Module.cwrap("AVPacket_time_base_den_s", null, [ "number", "number" ]);

var AVPacket_time_base_s = Module.AVPacket_time_base_s = CAccessors.AVPacket_time_base_s = Module.cwrap("AVPacket_time_base_s", null, [ "number", "number", "number" ]);

var AVFormatContext_flags = Module.AVFormatContext_flags = CAccessors.AVFormatContext_flags = Module.cwrap("AVFormatContext_flags", "number", [ "number" ]);

var AVFormatContext_flags_s = Module.AVFormatContext_flags_s = CAccessors.AVFormatContext_flags_s = Module.cwrap("AVFormatContext_flags_s", null, [ "number", "number" ]);

var AVFormatContext_nb_streams = Module.AVFormatContext_nb_streams = CAccessors.AVFormatContext_nb_streams = Module.cwrap("AVFormatContext_nb_streams", "number", [ "number" ]);

var AVFormatContext_nb_streams_s = Module.AVFormatContext_nb_streams_s = CAccessors.AVFormatContext_nb_streams_s = Module.cwrap("AVFormatContext_nb_streams_s", null, [ "number", "number" ]);

var AVFormatContext_oformat = Module.AVFormatContext_oformat = CAccessors.AVFormatContext_oformat = Module.cwrap("AVFormatContext_oformat", "number", [ "number" ]);

var AVFormatContext_oformat_s = Module.AVFormatContext_oformat_s = CAccessors.AVFormatContext_oformat_s = Module.cwrap("AVFormatContext_oformat_s", null, [ "number", "number" ]);

var AVFormatContext_pb = Module.AVFormatContext_pb = CAccessors.AVFormatContext_pb = Module.cwrap("AVFormatContext_pb", "number", [ "number" ]);

var AVFormatContext_pb_s = Module.AVFormatContext_pb_s = CAccessors.AVFormatContext_pb_s = Module.cwrap("AVFormatContext_pb_s", null, [ "number", "number" ]);

var AVFormatContext_streams_a = Module.AVFormatContext_streams_a = CAccessors.AVFormatContext_streams_a = Module.cwrap("AVFormatContext_streams_a", "number", [ "number", "number" ]);

var AVFormatContext_streams_a_s = Module.AVFormatContext_streams_a_s = CAccessors.AVFormatContext_streams_a_s = Module.cwrap("AVFormatContext_streams_a_s", null, [ "number", "number", "number" ]);

var AVStream_codecpar = Module.AVStream_codecpar = CAccessors.AVStream_codecpar = Module.cwrap("AVStream_codecpar", "number", [ "number" ]);

var AVStream_codecpar_s = Module.AVStream_codecpar_s = CAccessors.AVStream_codecpar_s = Module.cwrap("AVStream_codecpar_s", null, [ "number", "number" ]);

var AVStream_discard = Module.AVStream_discard = CAccessors.AVStream_discard = Module.cwrap("AVStream_discard", "number", [ "number" ]);

var AVStream_discard_s = Module.AVStream_discard_s = CAccessors.AVStream_discard_s = Module.cwrap("AVStream_discard_s", null, [ "number", "number" ]);

var AVStream_duration = Module.AVStream_duration = CAccessors.AVStream_duration = Module.cwrap("AVStream_duration", "number", [ "number" ]);

var AVStream_duration_s = Module.AVStream_duration_s = CAccessors.AVStream_duration_s = Module.cwrap("AVStream_duration_s", null, [ "number", "number" ]);

var AVStream_durationhi = Module.AVStream_durationhi = CAccessors.AVStream_durationhi = Module.cwrap("AVStream_durationhi", "number", [ "number" ]);

var AVStream_durationhi_s = Module.AVStream_durationhi_s = CAccessors.AVStream_durationhi_s = Module.cwrap("AVStream_durationhi_s", null, [ "number", "number" ]);

var AVStream_time_base_num = Module.AVStream_time_base_num = CAccessors.AVStream_time_base_num = Module.cwrap("AVStream_time_base_num", "number", [ "number" ]);

var AVStream_time_base_num_s = Module.AVStream_time_base_num_s = CAccessors.AVStream_time_base_num_s = Module.cwrap("AVStream_time_base_num_s", null, [ "number", "number" ]);

var AVStream_time_base_den = Module.AVStream_time_base_den = CAccessors.AVStream_time_base_den = Module.cwrap("AVStream_time_base_den", "number", [ "number" ]);

var AVStream_time_base_den_s = Module.AVStream_time_base_den_s = CAccessors.AVStream_time_base_den_s = Module.cwrap("AVStream_time_base_den_s", null, [ "number", "number" ]);

var AVStream_time_base_s = Module.AVStream_time_base_s = CAccessors.AVStream_time_base_s = Module.cwrap("AVStream_time_base_s", null, [ "number", "number", "number" ]);

var AVFilterInOut_filter_ctx = Module.AVFilterInOut_filter_ctx = CAccessors.AVFilterInOut_filter_ctx = Module.cwrap("AVFilterInOut_filter_ctx", "number", [ "number" ]);

var AVFilterInOut_filter_ctx_s = Module.AVFilterInOut_filter_ctx_s = CAccessors.AVFilterInOut_filter_ctx_s = Module.cwrap("AVFilterInOut_filter_ctx_s", null, [ "number", "number" ]);

var AVFilterInOut_name = Module.AVFilterInOut_name = CAccessors.AVFilterInOut_name = Module.cwrap("AVFilterInOut_name", "number", [ "number" ]);

var AVFilterInOut_name_s = Module.AVFilterInOut_name_s = CAccessors.AVFilterInOut_name_s = Module.cwrap("AVFilterInOut_name_s", null, [ "number", "number" ]);

var AVFilterInOut_next = Module.AVFilterInOut_next = CAccessors.AVFilterInOut_next = Module.cwrap("AVFilterInOut_next", "number", [ "number" ]);

var AVFilterInOut_next_s = Module.AVFilterInOut_next_s = CAccessors.AVFilterInOut_next_s = Module.cwrap("AVFilterInOut_next_s", null, [ "number", "number" ]);

var AVFilterInOut_pad_idx = Module.AVFilterInOut_pad_idx = CAccessors.AVFilterInOut_pad_idx = Module.cwrap("AVFilterInOut_pad_idx", "number", [ "number" ]);

var AVFilterInOut_pad_idx_s = Module.AVFilterInOut_pad_idx_s = CAccessors.AVFilterInOut_pad_idx_s = Module.cwrap("AVFilterInOut_pad_idx_s", null, [ "number", "number" ]);

var av_frame_free_js = Module.av_frame_free_js = CAccessors.av_frame_free_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.av_frame_free(p2);
  free(p2);
};

var av_packet_free_js = Module.av_packet_free_js = CAccessors.av_packet_free_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.av_packet_free(p2);
  free(p2);
};

var avformat_close_input_js = Module.avformat_close_input_js = CAccessors.avformat_close_input_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.avformat_close_input(p2);
  free(p2);
};

var avcodec_free_context_js = Module.avcodec_free_context_js = CAccessors.avcodec_free_context_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.avcodec_free_context(p2);
  free(p2);
};

var avcodec_parameters_free_js = Module.avcodec_parameters_free_js = CAccessors.avcodec_parameters_free_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.avcodec_parameters_free(p2);
  free(p2);
};

var avfilter_graph_free_js = Module.avfilter_graph_free_js = CAccessors.avfilter_graph_free_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.avfilter_graph_free(p2);
  free(p2);
};

var avfilter_inout_free_js = Module.avfilter_inout_free_js = CAccessors.avfilter_inout_free_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.avfilter_inout_free(p2);
  free(p2);
};

var av_dict_free_js = Module.av_dict_free_js = CAccessors.av_dict_free_js = function(p) {
  var p2 = malloc(4);
  if (p2 === 0) throw new Error("Could not malloc");
  (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p;
  CAccessors.av_dict_free(p2);
  free(p2);
};

var copyin_u8 = Module.copyin_u8 = CAccessors.copyin_u8 = function(ptr, arr) {
  var buf = new Uint8Array(Module.HEAPU8.buffer, ptr);
  buf.set(arr);
};

var copyout_u8 = Module.copyout_u8 = CAccessors.copyout_u8 = function(ptr, len) {
  var ret = (new Uint8Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
  ret.libavjsTransfer = [ ret.buffer ];
  return ret;
};

var copyin_s16 = Module.copyin_s16 = CAccessors.copyin_s16 = function(ptr, arr) {
  var buf = new Int16Array(Module.HEAPU8.buffer, ptr);
  buf.set(arr);
};

var copyout_s16 = Module.copyout_s16 = CAccessors.copyout_s16 = function(ptr, len) {
  var ret = (new Int16Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
  ret.libavjsTransfer = [ ret.buffer ];
  return ret;
};

var copyin_s32 = Module.copyin_s32 = CAccessors.copyin_s32 = function(ptr, arr) {
  var buf = new Int32Array(Module.HEAPU8.buffer, ptr);
  buf.set(arr);
};

var copyout_s32 = Module.copyout_s32 = CAccessors.copyout_s32 = function(ptr, len) {
  var ret = (new Int32Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
  ret.libavjsTransfer = [ ret.buffer ];
  return ret;
};

var copyin_f32 = Module.copyin_f32 = CAccessors.copyin_f32 = function(ptr, arr) {
  var buf = new Float32Array(Module.HEAPU8.buffer, ptr);
  buf.set(arr);
};

var copyout_f32 = Module.copyout_f32 = CAccessors.copyout_f32 = function(ptr, len) {
  var ret = (new Float32Array(Module.HEAPU8.buffer, ptr, len)).slice(0);
  ret.libavjsTransfer = [ ret.buffer ];
  return ret;
};

// Filesystem
function fsBinding(of) {
  Module[of] = function() {
    try {
      return FS[of].apply(FS, arguments);
    } catch (ex) {
      if (ex && ex.name === "ErrnoError") {
        // Give a more useful error
        ex.message = strerror(ex.errno);
        if (typeof arguments[0] === "string") ex.message = arguments[0] + ": " + ex.message;
      }
      throw ex;
    }
  };
}

var readerDev = FS.makedev(44, 0);

FS.registerDevice(readerDev, readerCallbacks);

Module.readBuffers = {};

Module.blockReadBuffers = {};

var writerDev = FS.makedev(44, 1);

FS.registerDevice(writerDev, writerCallbacks);

var streamWriterDev = FS.makedev(44, 2);

FS.registerDevice(streamWriterDev, streamWriterCallbacks);

/**
 * Read a complete file from the in-memory filesystem.
 * @param name  Filename to read
 */ /// @types readFile@sync(name: string): @promise@Uint8Array@
fsBinding("readFile");

/**
 * Write a complete file to the in-memory filesystem.
 * @param name  Filename to write
 * @param content  Content to write to the file
 */ /// @types writeFile@sync(name: string, content: Uint8Array): @promise@Uint8Array@
fsBinding("writeFile");

/**
 * Delete a file in the in-memory filesystem.
 * @param name  Filename to delete
 */ /// @types unlink@sync(name: string): @promise@void@
fsBinding("unlink");

/**
 * Unmount a mounted filesystem.
 * @param mountpoint  Path where the filesystem is mounted
 */ /// @types unmount@sync(mountpoint: string): @promise@void@
fsBinding("unmount");

fsBinding("mkdev");

/**
 * Make a lazy file. Direct link to createLazyFile.
 */ /* @types
 * createLazyFile@sync(
 *     parent: string, name: string, url: string, canRead: boolean,
 *     canWrite: boolean
 * ): @promise@void@
 */ fsBinding("createLazyFile");

/**
 * Make a reader device.
 * @param name  Filename to create.
 * @param mode  Unix permissions (pointless since this is an in-memory
 *              filesystem)
 */ /// @types mkreaderdev@sync(name: string, mode?: number): @promise@void@
Module.mkreaderdev = function(loc, mode) {
  FS.mkdev(loc, mode ? mode : 511, readerDev);
  return 0;
};

/**
 * Make a block reader "device". Technically a file that we then hijack to have
 * our behavior.
 * @param name  Filename to create.
 * @param size  Size of the device to present.
 */ /// @types mkblockreaderdev@sync(name: string, size: number): @promise@void@
var mkblockreaderdev = Module.mkblockreaderdev = function(name, size) {
  FS.writeFile(name, new Uint8Array(0));
  var f = FS.open(name, 0);
  var super_node_ops = f.node.node_ops;
  var node_ops = f.node.node_ops = Object.create(super_node_ops);
  node_ops.getattr = function(node) {
    var ret = super_node_ops.getattr(node);
    ret.size = size;
    ret.blksize = 4096;
    ret.blocks = Math.ceil(size / 4096);
    return ret;
  };
  f.node.stream_ops = blockReaderCallbacks;
  f.node.ff_block_reader_dev_size = size;
  Module.blockReadBuffers[name] = {
    position: -1,
    buf: new Uint8Array(0),
    ready: false,
    errorCode: 0,
    error: null
  };
  FS.close(f);
};

// Readahead devices
var readaheads = {};

// Original onblockread
var preReadaheadOnBlockRead = null;

// Passthru for readahead.
function readaheadOnBlockRead(name, position, length) {
  if (!(name in readaheads)) {
    if (preReadaheadOnBlockRead) return preReadaheadOnBlockRead(name, position, length);
    return;
  }
  var ra = readaheads[name];
  function then() {
    if (ra.position !== position) {
      ra.position = position;
      ra.buf = null;
      ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer().then(function(ret) {
        ra.buf = ret;
      }).catch(function(ex) {
        console.error(ex + "\n" + ex.stack);
        ra.buf = new Uint8Array(0);
      }).then(then);
      return;
    }
    ff_block_reader_dev_send(name, position, new Uint8Array(ra.buf));
    // Attempt to predict the next read
    position += length;
    ra.position = position;
    ra.buf = null;
    ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer().then(function(ret) {
      ra.buf = ret;
    }).catch(function(ex) {
      console.error(ex + "\n" + ex.stack);
      ra.buf = new Uint8Array(0);
    });
  }
  if (!ra.buf && ra.bufPromise) ra.bufPromise.then(then); else then();
}

/**
 * Make a readahead device. This reads a File (or other Blob) and attempts to
 * read ahead of whatever libav actually asked for. Note that this overrides
 * onblockread, so if you want to support both kinds of files, make sure you set
 * onblockread before calling this.
 * @param name  Filename to create.
 * @param file  Blob or file to read.
 */ /// @types mkreadaheadfile@sync(name: string, file: Blob): @promise@void@
Module.mkreadaheadfile = function(name, file) {
  if (Module.onblockread !== readaheadOnBlockRead) {
    preReadaheadOnBlockRead = Module.onblockread;
    Module.onblockread = readaheadOnBlockRead;
  }
  mkblockreaderdev(name, file.size);
  readaheads[name] = {
    file,
    position: -1,
    bufPromise: null,
    buf: null
  };
};

/**
 * Unlink a readahead file. Also gets rid of the File reference.
 * @param name  Filename to unlink.
 */ /// @types unlinkreadaheadfile@sync(name: string): @promise@void@
Module.unlinkreadaheadfile = function(name) {
  FS.unlink(name);
  delete readaheads[name];
};

/**
 * Make a writer device.
 * @param name  Filename to create
 * @param mode  Unix permissions
 */ /// @types mkwriterdev@sync(name: string, mode?: number): @promise@void@
var mkwriterdev = Module.mkwriterdev = function(loc, mode) {
  FS.mkdev(loc, mode ? mode : 511, writerDev);
  return 0;
};

/**
 * Make a stream writer device. The same as a writer device but does not allow
 * seeking.
 * @param name  Filename to create
 * @param mode  Unix permissions
 */ /// @types mkstreamwriterdev@sync(name: string, mode?: number): @promise@void@
Module.mkstreamwriterdev = function(loc, mode) {
  FS.mkdev(loc, mode ? mode : 511, streamWriterDev);
  return 0;
};

/**
 * Mount a writer *filesystem*. All files created in this filesystem will be
 * redirected as writers. The directory will be created for you if it doesn't
 * already exist, but it may already exist.
 * @param mountpoint  Directory to mount as a writer filesystem
 */ /// @types mountwriterfs@sync(mountpoint: string): @promise@void@
Module.mountwriterfs = function(mountpoint) {
  try {
    FS.mkdir(mountpoint);
  } catch (ex) {}
  FS.mount(streamWriterFS, {}, mountpoint);
  return 0;
};

// Users waiting to read
Module.ff_reader_dev_waiters = Object.create(null);

/**
 * Make a workerfs file. Returns the filename that it's mounted to.
 * @param name  Filename to use.
 * @param blob  Blob to load at that file.
 */ /// @types mkworkerfsfile@sync(name: string, blob: Blob): @promise@string@
Module.mkworkerfsfile = function(name, blob) {
  FS.mkdir("/" + name + ".d");
  FS.mount(WORKERFS, {
    blobs: [ {
      name,
      data: blob
    } ]
  }, "/" + name + ".d");
  return "/" + name + ".d/" + name;
};

/**
 * Unmount (unmake) a workerfs file. Give the *original name you provided*, not
 * the name mkworkerfsfile returned.
 * @param name  Filename to unmount.
 */ /// @types unlinkworkerfsfile@sync(name: string): @promise@void@
Module.unlinkworkerfsfile = function(name) {
  FS.unmount("/" + name + ".d");
  FS.rmdir("/" + name + ".d");
};

// FileSystemFileHandle devices
var fsfhs = {};

// Original onwrite
var preFSFHOnWrite = null;

// Passthru for FSFH writing.
function fsfhOnWrite(name, position, buffer) {
  if (!(name in fsfhs)) {
    if (preFSFHOnWrite) return preFSFHOnWrite(name, position, buffer);
    return;
  }
  var h = fsfhs[name];
  buffer = buffer.slice(0);
  if (h.syncHandle) {
    h.syncHandle.write(buffer.buffer, {
      at: position
    });
    return;
  }
  var p = h.promise.then(function() {
    return h.handle.write({
      type: "write",
      position,
      data: buffer
    });
  });
  h.promise = p.catch(console.error);
  return p;
}

/**
 * Make a FileSystemFileHandle device. This writes via a FileSystemFileHandle,
 * synchronously if possible. Note that this overrides onwrite, so if you want
 * to support both kinds of files, make sure you set onwrite before calling
 * this.
 * @param name  Filename to create.
 * @param fsfh  FileSystemFileHandle corresponding to this filename.
 */ /// @types mkfsfhfile(name: string, fsfh: FileSystemFileHandle): Promise<void>
Module.mkfsfhfile = function(name, fsfh) {
  if (Module.onwrite !== fsfhOnWrite) {
    preFSFHOnWrite = Module.onwrite;
    Module.onwrite = fsfhOnWrite;
  }
  mkwriterdev(name);
  var h = fsfhs[name] = {
    promise: Promise.all([])
  };
  h.promise = h.promise.then(function() {
    return fsfh.createSyncAccessHandle();
  }).then(function(syncHandle) {
    h.syncHandle = syncHandle;
  }).catch(function() {
    return fsfh.createWritable();
  }).then(function(handle) {
    h.handle = handle;
  });
  return h.promise;
};

/**
 * Unlink a FileSystemFileHandle file. Also closes the file handle.
 * @param name  Filename to unlink.
 */ /// @types unlinkfsfhfile(name: string): Promise<void>
Module.unlinkfsfhfile = function(name) {
  FS.unlink(name);
  var h = fsfhs[name];
  delete fsfhs[name];
  if (h.syncHandle) {
    h.syncHandle.close();
    return Promise.all([]);
  }
  return h.promise.then(function() {
    return h.handle.close();
  });
};

/**
 * Send some data to a reader device. To indicate EOF, send null. To indicate an
 * error, send EOF and include an error code in the options.
 * @param name  Filename of the reader device.
 * @param data  Data to send.
 * @param opts  Optional send options, such as an error code.
 */ /* @types
 * ff_reader_dev_send@sync(
 *     name: string, data: Uint8Array | null,
 *     opts?: {
 *         errorCode?: number,
 *         error?: any // any other error, used internally
 *     }
 * ): @promise@void@
 */ var ff_reader_dev_send = Module.ff_reader_dev_send = function(name, data, opts) {
  opts = opts || {};
  var idata;
  if (!(name in Module.readBuffers)) {
    Module.readBuffers[name] = {
      buf: new Uint8Array(0),
      eof: false,
      errorCode: 0,
      error: null
    };
  }
  idata = Module.readBuffers[name];
  if (data === null) {
    // EOF or error
    idata.eof = true;
  } else {
    var newbuf = new Uint8Array(idata.buf.length + data.length);
    newbuf.set(idata.buf);
    newbuf.set(data, idata.buf.length);
    idata.buf = newbuf;
  }
  idata.ready = true;
  idata.errorCode = 0;
  if (typeof opts.errorCode === "number") idata.errorCode = opts.errorCode;
  idata.error = null;
  if (opts.error) idata.error = opts.error;
  // Wake up waiters
  var waiters = Module.ff_reader_dev_waiters[name] || [];
  delete Module.ff_reader_dev_waiters[name];
  for (var i = 0; i < waiters.length; i++) waiters[i]();
};

/**
 * Send some data to a block reader device. To indicate EOF, send null (but note
 * that block read devices have a fixed size, and will automatically send EOF
 * for reads outside of that size, so you should not normally need to send EOF).
 * To indicate an error, send EOF and include an error code in the options.
 * @param name  Filename of the reader device.
 * @param pos  Position of the data in the file.
 * @param data  Data to send.
 * @param opts  Optional send options, such as an error code.
 */ /* @types
 * ff_block_reader_dev_send@sync(
 *     name: string, pos: number, data: Uint8Array | null,
 *     opts?: {
 *         errorCode?: number,
 *         error?: any // any other error, used internally
 *     }
 * ): @promise@void@
 */ var ff_block_reader_dev_send = Module.ff_block_reader_dev_send = function(name, pos, data, opts) {
  opts = opts || {};
  var idata;
  if (!(name in Module.blockReadBuffers)) {
    idata = Module.blockReadBuffers[name] = {
      position: pos,
      buf: data,
      ready: true,
      errorCode: 0,
      error: null
    };
  } else {
    idata = Module.blockReadBuffers[name];
    idata.position = pos;
    idata.buf = data;
    idata.ready = true;
    idata.errorCode = 0;
    idata.error = null;
  }
  if (data === null) idata.buf = new Uint8Array(0);
  if (typeof opts.errorCode === "number") idata.errorCode = opts.errorCode;
  if (opts.error) idata.error = opts.error;
  // Wake up waiters
  var waiters = Module.ff_reader_dev_waiters[name] || [];
  delete Module.ff_reader_dev_waiters[name];
  for (var i = 0; i < waiters.length; i++) waiters[i]();
};

/**
 * Metafunction to determine whether any device has any waiters. This can be
 * used to determine whether more data needs to be sent before a previous step
 * will be fully resolved.
 * @param name  Optional name of file to check for waiters
 */ /// @types ff_reader_dev_waiting@sync(name?: string): @promise@boolean@
var ff_reader_dev_waiting = Module.ff_reader_dev_waiting = function(name) {
  return ff_nothing().then(function() {
    if (name) return !!Module.ff_reader_dev_waiters[name]; else return !!Object.keys(Module.ff_reader_dev_waiters).length;
  });
};

/**
 * Internal function to determine if this device is ready (to avoid race
 * conditions).
 */ Module.readerDevReady = function(fd) {
  var stream = FS.streams[fd].node.name;
  if (stream in Module.readBuffers) return Module.readBuffers[stream].ready; else if (stream in Module.blockReadBuffers) return Module.blockReadBuffers[stream].ready;
  return false;
};

/**
 * Internal function to get the name of a file being read by an FD.
 */ Module.fdName = function(fd) {
  return FS.streams[fd].node.name;
};

/**
 * Metafunction to initialize an encoder with all the bells and whistles.
 * Returns [AVCodec, AVCodecContext, AVFrame, AVPacket, frame_size]
 * @param name  libav name of the codec
 * @param opts  Encoder options
 */ /* @types
 * ff_init_encoder@sync(
 *     name: string, opts?: {
 *         ctx?: AVCodecContextProps,
 *         time_base?: [number, number],
 *         options?: Record<string, string>
 *     }
 * ): @promise@[number, number, number, number, number]@
 */ var ff_init_encoder = Module.ff_init_encoder = function(name, opts) {
  opts = opts || {};
  var codec = avcodec_find_encoder_by_name(name);
  if (codec === 0) throw new Error("Codec not found");
  var c = avcodec_alloc_context3(codec);
  if (c === 0) throw new Error("Could not allocate audio codec context");
  var ctxProps = opts.ctx || {};
  for (var prop in ctxProps) this["AVCodecContext_" + prop + "_s"](c, ctxProps[prop]);
  var time_base = opts.time_base || [ 1, 1e3 ];
  AVCodecContext_time_base_s(c, time_base[0], time_base[1]);
  var options = 0;
  if (opts.options) {
    for (var prop in opts.options) options = av_dict_set_js(options, prop, opts.options[prop], 0);
  }
  var ret = avcodec_open2_js(c, codec, options);
  if (ret < 0) throw new Error("Could not open codec: " + ff_error(ret));
  var frame = av_frame_alloc();
  if (frame === 0) throw new Error("Could not allocate frame");
  var pkt = av_packet_alloc();
  if (pkt === 0) throw new Error("Could not allocate packet");
  var frame_size = AVCodecContext_frame_size(c);
  return [ codec, c, frame, pkt, frame_size ];
};

/**
 * Metafunction to initialize a decoder with all the bells and whistles.
 * Similar to ff_init_encoder but doesn't need to initialize the frame.
 * Returns [AVCodec, AVCodecContext, AVPacket, AVFrame]
 * @param name  libav decoder identifier or name
 * @param codecpar  Optional AVCodecParameters
 */ /* @types
 * ff_init_decoder@sync(
 *     name: string | number, codecpar?: number
 * ): @promise@[number, number, number, number]@
 */ var ff_init_decoder = Module.ff_init_decoder = function(name, codecpar) {
  var codec, ret;
  if (typeof name === "string") codec = avcodec_find_decoder_by_name(name); else codec = avcodec_find_decoder(name);
  if (codec === 0) throw new Error("Codec not found");
  var c = avcodec_alloc_context3(codec);
  if (c === 0) throw new Error("Could not allocate audio codec context");
  var codecid = AVCodecContext_codec_id(c);
  if (codecpar) {
    ret = avcodec_parameters_to_context(c, codecpar);
    if (ret < 0) throw new Error("Could not set codec parameters: " + ff_error(ret));
  }
  // if it is not set, use the copy.
  if (AVCodecContext_codec_id(c) === 0) AVCodecContext_codec_id_s(c, codecid);
  ret = avcodec_open2(c, codec, 0);
  if (ret < 0) throw new Error("Could not open codec: " + ff_error(ret));
  var pkt = av_packet_alloc();
  if (pkt === 0) throw new Error("Could not allocate packet");
  var frame = av_frame_alloc();
  if (frame === 0) throw new Error("Could not allocate frame");
  return [ codec, c, pkt, frame ];
};

/**
 * Free everything allocated by ff_init_encoder.
 * @param c  AVCodecContext
 * @param frame  AVFrame
 * @param pkt  AVPacket
 */ /* @types
 * ff_free_encoder@sync(
 *     c: number, frame: number, pkt: number
 * ): @promise@void@
 */ var ff_free_encoder = Module.ff_free_encoder = function(c, frame, pkt) {
  av_frame_free_js(frame);
  av_packet_free_js(pkt);
  avcodec_free_context_js(c);
};

/**
 * Free everything allocated by ff_init_decoder
 * @param c  AVCodecContext
 * @param pkt  AVPacket
 * @param frame  AVFrame
 */ /* @types
 * ff_free_decoder@sync(
 *     c: number, pkt: number, frame: number
 * ): @promise@void@
 */ var ff_free_decoder = Module.ff_free_decoder = function(c, pkt, frame) {
  ff_free_encoder(c, frame, pkt);
};

/**
 * Encode some number of frames at once. Done in one go to avoid excess message
 * passing.
 * @param ctx  AVCodecContext
 * @param frame  AVFrame
 * @param pkt  AVPacket
 * @param inFrames  Array of frames in libav.js format
 * @param fin  Set to true if this is the end of encoding
 */ /* @types
 * ff_encode_multi@sync(
 *     ctx: number, frame: number, pkt: number, inFrames: (Frame | number)[],
 *     fin?: boolean
 * ): @promise@Packet[]@
 */ var ff_encode_multi = Module.ff_encode_multi = function(ctx, frame, pkt, inFrames, fin) {
  var outPackets = [];
  var tbNum = AVCodecContext_time_base_num(ctx);
  var tbDen = AVCodecContext_time_base_den(ctx);
  function handleFrame(inFrame) {
    if (inFrame !== null) {
      ff_copyin_frame(frame, inFrame);
      if (tbNum && typeof inFrame === "object" && inFrame.time_base_num) {
        ff_frame_rescale_ts_js(frame, tbNum, tbDen, inFrame.time_base_num, inFrame.time_base_den);
        AVFrame_time_base_s(frame, tbNum, tbDen);
      }
    }
    var ret = avcodec_send_frame(ctx, inFrame ? frame : 0);
    if (ret < 0) throw new Error("Error sending the frame to the encoder: " + ff_error(ret));
    if (inFrame) av_frame_unref(frame);
    while (true) {
      ret = avcodec_receive_packet(ctx, pkt);
      if (ret === -6 || /* EAGAIN */ ret === -541478725) /* AVERROR_EOF */ return; else if (ret < 0) throw new Error("Error encoding audio frame: " + ff_error(ret));
      var outPacket = ff_copyout_packet(pkt);
      if (!outPacket.time_base_num) {
        outPacket.time_base_num = tbNum;
        outPacket.time_base_den = tbDen;
      }
      outPackets.push(outPacket);
      av_packet_unref(pkt);
    }
  }
  inFrames.forEach(handleFrame);
  if (fin) handleFrame(null);
  return outPackets;
};

/**
 * Decode some number of packets at once. Done in one go to avoid excess
 * message passing.
 * @param ctx  AVCodecContext
 * @param pkt  AVPacket
 * @param frame  AVFrame
 * @param inPackets  Incoming packets to decode
 * @param config  Decoding options. May be "true" to indicate end of stream.
 */ /* @types
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@
 */ var ff_decode_multi = Module.ff_decode_multi = function(ctx, pkt, frame, inPackets, config) {
  var outFrames = [];
  var transfer = [];
  if (typeof config === "boolean") {
    config = {
      fin: config
    };
  } else {
    config = config || {};
  }
  var tbNum = AVCodecContext_time_base_num(ctx);
  var tbDen = AVCodecContext_time_base_den(ctx);
  var copyoutFrame = ff_copyout_frame;
  if (config.copyoutFrame) copyoutFrame = ff_copyout_frame_versions[config.copyoutFrame];
  function handlePacket(inPacket) {
    var ret;
    if (inPacket !== null) {
      ret = av_packet_make_writable(pkt);
      if (ret < 0) throw new Error("Failed to make packet writable: " + ff_error(ret));
      ff_copyin_packet(pkt, inPacket);
      if (inPacket.time_base_num && tbNum) {
        av_packet_rescale_ts_js(pkt, inPacket.time_base_num, inPacket.time_base_den, tbNum, tbDen);
        AVPacket_time_base_s(pkt, tbNum, tbDen);
      }
    } else {
      av_packet_unref(pkt);
    }
    ret = avcodec_send_packet(ctx, pkt);
    if (ret < 0) {
      var err = "Error submitting the packet to the decoder: " + ff_error(ret);
      if (!config.ignoreErrors) throw new Error(err); else {
        console.log(err);
        av_packet_unref(pkt);
        return;
      }
    }
    av_packet_unref(pkt);
    while (true) {
      ret = avcodec_receive_frame(ctx, frame);
      if (ret === -6 || /* EAGAIN */ ret === -541478725) /* AVERROR_EOF */ return; else if (ret < 0) throw new Error("Error decoding audio frame: " + ff_error(ret));
      var outFrame = copyoutFrame(frame);
      if (typeof outFrame === "object" && !outFrame.time_base_num) {
        outFrame.time_base_num = tbNum;
        outFrame.time_base_den = tbDen;
      }
      if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length) transfer.push.apply(transfer, outFrame.libavjsTransfer);
      outFrames.push(outFrame);
      av_frame_unref(frame);
    }
  }
  inPackets.forEach(handlePacket);
  if (config.fin) handlePacket(null);
  outFrames.libavjsTransfer = transfer;
  return outFrames;
};

/* Set the content of a packet. Necessary because we tend to strip packets of their content. */ var ff_set_packet = Module.ff_set_packet = function(pkt, data) {
  if (data.length === 0) {
    av_packet_unref(pkt);
  } else {
    var size = AVPacket_size(pkt);
    if (size < data.length) {
      var ret = av_grow_packet(pkt, data.length - size);
      if (ret < 0) throw new Error("Error growing packet: " + ff_error(ret));
    } else if (size > data.length) av_shrink_packet(pkt, data.length);
  }
  var ptr = AVPacket_data(pkt);
  Module.HEAPU8.set(data, ptr);
};

/**
 * Initialize a muxer format, format context and some number of streams.
 * Returns [AVFormatContext, AVOutputFormat, AVIOContext, AVStream[]]
 * @param opts  Muxer options
 * @param stramCtxs  Context info for each stream to mux
 */ /* @types
 * ff_init_muxer@sync(
 *     opts: {
 *         oformat?: number, // format pointer
 *         format_name?: string, // libav name
 *         filename?: string,
 *         device?: boolean, // Create a writer device
 *         open?: boolean, // Open the file for writing
 *         codecpars?: boolean // Streams is in terms of codecpars, not codecctx
 *     },
 *     streamCtxs: [number, number, number][] // AVCodecContext | AVCodecParameters, time_base_num, time_base_den
 * ): @promise@[number, number, number, number[]]@
 */ var ff_init_muxer = Module.ff_init_muxer = function(opts, streamCtxs) {
  var oformat = opts.oformat ? opts.oformat : 0;
  var format_name = opts.format_name ? opts.format_name : null;
  var filename = opts.filename ? opts.filename : null;
  var oc = avformat_alloc_output_context2_js(oformat, format_name, filename);
  if (oc === 0) throw new Error("Failed to allocate output context");
  var fmt = AVFormatContext_oformat(oc);
  var sts = [];
  streamCtxs.forEach(function(ctx) {
    var st = avformat_new_stream(oc, 0);
    if (st === 0) throw new Error("Could not allocate stream");
    sts.push(st);
    var codecpar = AVStream_codecpar(st);
    var ret;
    if (opts.codecpars) {
      ret = avcodec_parameters_copy(codecpar, ctx[0]);
      AVCodecParameters_codec_tag_s(codecpar, 0);
    } else {
      ret = avcodec_parameters_from_context(codecpar, ctx[0]);
    }
    if (ret < 0) throw new Error("Could not copy the stream parameters: " + ff_error(ret));
    AVStream_time_base_s(st, ctx[1], ctx[2]);
  });
  // Set up the device if requested
  if (opts.device) FS.mkdev(opts.filename, 511, writerDev);
  // Open the actual file if requested
  var pb = null;
  if (opts.open) {
    pb = avio_open2_js(opts.filename, 2, /* AVIO_FLAG_WRITE */ 0, 0);
    if (pb === 0) throw new Error("Could not open file");
    AVFormatContext_pb_s(oc, pb);
  }
  return [ oc, fmt, pb, sts ];
};

/**
 * Free up a muxer format and/or file
 * @param oc  AVFormatContext
 * @param pb  AVIOContext
 */ /// @types ff_free_muxer@sync(oc: number, pb: number): @promise@void@
var ff_free_muxer = Module.ff_free_muxer = function(oc, pb) {
  avformat_free_context(oc);
  if (pb) avio_close(pb);
};

/**
 * Initialize a demuxer from a file and format context, and get the list of
 * codecs/types.
 * Returns [AVFormatContext, Stream[]]
 * @param filename  Filename to open
 * @param fmt  Format to use (optional)
 */ /* @types
 * ff_init_demuxer_file@sync(
 *     filename: string, fmt?: string
 * ): @promsync@[number, Stream[]]@
 */ function ff_init_demuxer_file(filename, fmt) {
  var fmt_ctx;
  return Promise.all([]).then(function() {
    return avformat_open_input_js(filename, fmt ? fmt : null, null);
  }).then(function(ret) {
    fmt_ctx = ret;
    if (fmt_ctx === 0) throw new Error("Could not open source file");
    return avformat_find_stream_info(fmt_ctx, 0);
  }).then(function() {
    var nb_streams = AVFormatContext_nb_streams(fmt_ctx);
    var streams = [];
    for (var i = 0; i < nb_streams; i++) {
      var inStream = AVFormatContext_streams_a(fmt_ctx, i);
      var outStream = {
        ptr: inStream,
        index: i
      };
      // Codec info
      var codecpar = AVStream_codecpar(inStream);
      outStream.codecpar = codecpar;
      outStream.codec_type = AVCodecParameters_codec_type(codecpar);
      outStream.codec_id = AVCodecParameters_codec_id(codecpar);
      // Duration and related
      outStream.time_base_num = AVStream_time_base_num(inStream);
      outStream.time_base_den = AVStream_time_base_den(inStream);
      outStream.duration_time_base = AVStream_duration(inStream) + (AVStream_durationhi(inStream) * 4294967296);
      outStream.duration = outStream.duration_time_base * outStream.time_base_num / outStream.time_base_den;
      streams.push(outStream);
    }
    return [ fmt_ctx, streams ];
  });
}

Module.ff_init_demuxer_file = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return ff_init_demuxer_file.apply(void 0, args);
  });
  return Module.serializationPromise;
};

/**
 * Write some number of packets at once.
 * @param oc  AVFormatContext
 * @param pkt  AVPacket
 * @param inPackets  Packets to write
 * @param interleave  Set to false to *not* use the interleaved writer.
 *                    Interleaving is the default.
 */ /* @types
 * ff_write_multi@sync(
 *     oc: number, pkt: number, inPackets: (Packet | number)[], interleave?: boolean
 * ): @promise@void@
 */ var ff_write_multi = Module.ff_write_multi = function(oc, pkt, inPackets, interleave) {
  var step = av_interleaved_write_frame;
  if (interleave === false) step = av_write_frame;
  var tbs = {};
  inPackets.forEach(function(inPacket) {
    var ret = av_packet_make_writable(pkt);
    if (ret < 0) throw new Error("Error making packet writable: " + ff_error(ret));
    ff_copyin_packet(pkt, inPacket);
    var sti = inPacket.stream_index || 0;
    if (typeof inPacket === "object" && inPacket.time_base_num) {
      var tb = tbs[sti];
      if (!tb) {
        var str = AVFormatContext_streams_a(oc, sti);
        tb = tbs[sti] = [ AVStream_time_base_num(str), AVStream_time_base_den(str) ];
      }
      if (tb[0]) {
        av_packet_rescale_ts_js(pkt, inPacket.time_base_num, inPacket.time_base_den, tb[0], tb[1]);
        AVPacket_time_base_s(pkt, tb[0], tb[1]);
      }
    }
    step(oc, pkt);
    av_packet_unref(pkt);
  });
  av_packet_unref(pkt);
};

/**
 * Read many packets at once. If you don't set any limits, this function will
 * block (asynchronously) until the whole file is read, so make sure you set
 * some limits if you want to read a bit at a time. Returns a pair [result,
 * packets], where the result indicates whether an error was encountered, an
 * EOF, or simply limits (EAGAIN), and packets is a dictionary indexed by the
 * stream number in which each element is an array of packets from that stream.
 * @param fmt_ctx  AVFormatContext
 * @param pkt  AVPacket
 * @param opts  Other options
 */ /* @types
 * ff_read_frame_multi@sync(
 *     fmt_ctx: number, pkt: number, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket?: "default" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, Packet[]>]@
 * ff_read_frame_multi@sync(
 *     fmt_ctx: number, pkt: number, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket: "ptr" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, number[]>]@
 */ function ff_read_frame_multi(fmt_ctx, pkt, opts) {
  var sz = 0;
  var outPackets = {};
  var tbs = {};
  if (typeof opts === "number") opts = {
    limit: opts
  };
  if (typeof opts === "undefined") opts = {};
  var unify = !!opts.unify;
  var copyoutPacket = ff_copyout_packet;
  if (opts.copyoutPacket) copyoutPacket = ff_copyout_packet_versions[opts.copyoutPacket];
  function step() {
    return Promise.all([]).then(function() {
      // Read the frame
      return av_read_frame(fmt_ctx, pkt);
    }).then(function(ret) {
      if (ret < 0) return [ ret, outPackets ];
      // And copy it out
      var packet = copyoutPacket(pkt);
      var stri = AVPacket_stream_index(pkt);
      // Get the time base correct
      if (typeof packet === "object" && !packet.time_base_num) {
        var tb = tbs[stri];
        if (!tb) {
          var str = AVFormatContext_streams_a(fmt_ctx, stri);
          tb = tbs[stri] = [ AVStream_time_base_num(str), AVStream_time_base_den(str) ];
        }
        packet.time_base_num = tb[0];
        packet.time_base_den = tb[1];
      }
      // Put it in the output
      var idx = unify ? 0 : stri;
      if (!(idx in outPackets)) outPackets[idx] = [];
      outPackets[idx].push(packet);
      sz += AVPacket_size(pkt);
      av_packet_unref(pkt);
      if (opts.limit && sz >= opts.limit) return [ -6, /* EAGAIN */ outPackets ];
      return Promise.all([]).then(step);
    });
  }
  return Promise.all([]).then(step);
}

Module.ff_read_frame_multi = function() {
  var args = arguments;
  Module.serializationPromise = Module.serializationPromise.catch(function() {}).then(function() {
    return ff_read_frame_multi.apply(void 0, args);
  });
  return Module.serializationPromise;
};

/**
 * @deprecated
 * DEPRECATED. Use `ff_read_frame_multi`.
 * Read many packets at once. This older API is now deprecated. The devfile
 * parameter is unused and unsupported. Dev files should be used via the normal
 * `ff_reader_dev_waiting` API, rather than counting on device file limits, as
 * this function used to.
 * @param fmt_ctx  AVFormatContext
 * @param pkt  AVPacket
 * @param devfile  Unused
 * @param opts  Other options
 */ /* @types
 * ff_read_multi@sync(
 *     fmt_ctx: number, pkt: number, devfile?: string, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket?: "default" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, Packet[]>]@
 * ff_read_multi@sync(
 *     fmt_ctx: number, pkt: number, devfile?: string, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         devLimit?: number, // INPUT limit, in bytes (don't read if less than this much data is available)
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket: "ptr" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, number[]>]@
 */ Module.ff_read_multi = function(fmt_ctx, pkt, devfile, opts) {
  console.log("[libav.js] ff_read_multi is deprecated. Use ff_read_frame_multi.");
  return Module.ff_read_frame_multi(fmt_ctx, pkt, opts);
};

/**
 * Initialize a filter graph. No equivalent free since you just need to free
 * the graph itself (av_filter_graph_free) and everything under it will be
 * freed automatically.
 * Returns [AVFilterGraph, AVFilterContext, AVFilterContext], where the second
 * and third are the input and output buffer source/sink. For multiple
 * inputs/outputs, the second and third will be arrays, as appropriate.
 * @param filters_descr  Filtergraph description
 * @param input  Input settings, or array of input settings for multiple inputs
 * @param output  Output settings, or array of output settings for multiple
 *                outputs
 */ /* @types
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings,
 *     output: FilterIOSettings
 * ): @promise@[number, number, number]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings[],
 *     output: FilterIOSettings
 * ): @promise@[number, number[], number]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings,
 *     output: FilterIOSettings[]
 * ): @promise@[number, number, number[]]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings[],
 *     output: FilterIOSettings[]
 * ): @promise@[number, number[], number[]]@
 */ var ff_init_filter_graph = Module.ff_init_filter_graph = function(filters_descr, input, output) {
  var buffersrc, abuffersrc, buffersink, abuffersink, filter_graph, tmp_src_ctx, tmp_sink_ctx, src_ctxs, sink_ctxs, io_outputs, io_inputs, int32s;
  var instr, outstr;
  var multiple_inputs = !!input.length;
  if (!multiple_inputs) input = [ input ];
  var multiple_outputs = !!output.length;
  if (!multiple_outputs) output = [ output ];
  src_ctxs = [];
  sink_ctxs = [];
  try {
    buffersrc = avfilter_get_by_name("buffer");
    abuffersrc = avfilter_get_by_name("abuffer");
    buffersink = avfilter_get_by_name("buffersink");
    abuffersink = avfilter_get_by_name("abuffersink");
    filter_graph = avfilter_graph_alloc();
    if (filter_graph === 0) throw new Error("Failed to allocate filter graph");
    // Allocate all the "outputs" (our inputs)
    io_outputs = 0;
    var ii = 0;
    input.forEach(function(input) {
      // Allocate the output itself
      var next_io_outputs = avfilter_inout_alloc();
      if (next_io_outputs === 0) throw new Error("Failed to allocate outputs");
      AVFilterInOut_next_s(next_io_outputs, io_outputs);
      io_outputs = next_io_outputs;
      // Now create our input filter
      var nm = "in" + (multiple_inputs ? ii : "");
      if (input.type === 0) /* AVMEDIA_TYPE_VIDEO */ {
        if (buffersrc === 0) throw new Error("Failed to load buffer filter");
        var frame_rate = input.frame_rate;
        var time_base = input.time_base;
        if (typeof frame_rate === "undefined") frame_rate = 30;
        if (typeof time_base === "undefined") time_base = [ 1, frame_rate ];
        tmp_src_ctx = avfilter_graph_create_filter_js(buffersrc, nm, "time_base=" + time_base[0] + "/" + time_base[1] + ":frame_rate=" + frame_rate + ":pix_fmt=" + (input.pix_fmt ? input.pix_fmt : 0) + ":width=" + (input.width ? input.width : 640) + ":height=" + (input.height ? input.height : 360), null, filter_graph);
      } else {
        // audio filter
        if (abuffersrc === 0) throw new Error("Failed to load abuffer filter");
        var sample_rate = input.sample_rate;
        var time_base = input.time_base;
        if (typeof sample_rate === "undefined") sample_rate = 48e3;
        if (typeof time_base === "undefined") time_base = [ 1, sample_rate ];
        tmp_src_ctx = avfilter_graph_create_filter_js(abuffersrc, nm, "time_base=" + time_base[0] + "/" + time_base[1] + ":sample_rate=" + sample_rate + ":sample_fmt=" + (input.sample_fmt ? input.sample_fmt : 3) + ":channel_layout=0x" + (input.channel_layout ? input.channel_layout : 4).toString(/*MONO*/ 16), null, filter_graph);
      }
      if (tmp_src_ctx === 0) throw new Error("Cannot create buffer source");
      src_ctxs.push(tmp_src_ctx);
      // Configure the inout
      instr = av_strdup(nm);
      if (instr === 0) throw new Error("Failed to allocate output");
      AVFilterInOut_name_s(io_outputs, instr);
      instr = 0;
      AVFilterInOut_filter_ctx_s(io_outputs, tmp_src_ctx);
      tmp_src_ctx = 0;
      AVFilterInOut_pad_idx_s(io_outputs, 0);
      ii++;
    });
    // Allocate all the "inputs" (our outputs)
    io_inputs = 0;
    var oi = 0;
    output.forEach(function(output) {
      // Allocate the input itself
      var next_io_inputs = avfilter_inout_alloc();
      if (next_io_inputs === 0) throw new Error("Failed to allocate inputs");
      AVFilterInOut_next_s(next_io_inputs, io_inputs);
      io_inputs = next_io_inputs;
      // Create the output filter
      var nm = "out" + (multiple_outputs ? oi : "");
      if (output.type === 0) /* AVMEDIA_TYPE_VIDEO */ {
        if (buffersink === 0) throw new Error("Failed to load buffersink filter");
        tmp_sink_ctx = avfilter_graph_create_filter_js(buffersink, nm, null, null, filter_graph);
      } else {
        // audio
        tmp_sink_ctx = avfilter_graph_create_filter_js(abuffersink, nm, null, null, filter_graph);
      }
      if (tmp_sink_ctx === 0) throw new Error("Cannot create buffer sink");
      sink_ctxs.push(tmp_sink_ctx);
      if (output.type === 0) /* AVMEDIA_TYPE_VIDEO */ {
        // Allocate space to transfer our options
        int32s = ff_malloc_int32_list([ output.pix_fmt ? output.pix_fmt : 0, /* YUV420P */ -1 ]);
        if (int32s === 0) throw new Error("Failed to transfer parameters");
        if (av_opt_set_int_list_js(tmp_sink_ctx, "pix_fmts", 4, int32s, -1, 1) < 0) {
          throw new Error("Failed to set filter parameters");
        }
        free(int32s);
        int32s = 0;
      } else {
        // audio
        // Allocate space to transfer our options
        int32s = ff_malloc_int32_list([ output.sample_fmt ? output.sample_fmt : 3, /*FLT*/ -1, output.sample_rate ? output.sample_rate : 48e3, -1 ]);
        if (int32s === 0) throw new Error("Failed to transfer parameters");
        var ch_layout = output.channel_layout ? output.channel_layout : 4;
        var ch_layout_i64 = [ ~~ch_layout, Math.floor(ch_layout / 4294967296) ];
        if (av_opt_set_int_list_js(tmp_sink_ctx, "sample_fmts", 4, int32s, -1, 1) < /* AV_OPT_SEARCH_CHILDREN */ 0 || ff_buffersink_set_ch_layout(tmp_sink_ctx, ch_layout_i64[0], ch_layout_i64[1]) < 0 || av_opt_set_int_list_js(tmp_sink_ctx, "sample_rates", 4, int32s + 8, -1, 1) < 0) {
          throw new Error("Failed to set filter parameters");
        }
        free(int32s);
        int32s = 0;
      }
      // Configure it
      outstr = av_strdup(nm);
      if (outstr === 0) throw new Error("Failed to transfer parameters");
      AVFilterInOut_name_s(io_inputs, outstr);
      outstr = 0;
      AVFilterInOut_filter_ctx_s(io_inputs, tmp_sink_ctx);
      tmp_sink_ctx = 0;
      AVFilterInOut_pad_idx_s(io_inputs, 0);
      oi++;
    });
    // Parse it
    var ret = avfilter_graph_parse(filter_graph, filters_descr, io_inputs, io_outputs, 0);
    if (ret < 0) throw new Error("Failed to initialize filters: " + ff_error(ret));
    io_inputs = io_outputs = 0;
    // Set the output frame sizes
    var oi = 0;
    output.forEach(function(output) {
      if (output.frame_size) av_buffersink_set_frame_size(sink_ctxs[oi], output.frame_size);
      oi++;
    });
    // Configure it
    ret = avfilter_graph_config(filter_graph, 0);
    if (ret < 0) throw new Error("Failed to configure filter graph: " + ff_error(ret));
  } catch (ex) {
    // Clean up after ourselves
    if (io_outputs) avfilter_inout_free(io_outputs);
    if (io_inputs) avfilter_inout_free(io_inputs);
    if (filter_graph) avfilter_graph_free(filter_graph);
    if (tmp_src_ctx) avfilter_free(tmp_src_ctx);
    if (tmp_sink_ctx) avfilter_free(tmp_sink_ctx);
    if (int32s) free(int32s);
    if (instr) free(instr);
    if (outstr) free(outstr);
    throw ex;
  }
  // And finally, return the critical parts
  return [ filter_graph, multiple_inputs ? src_ctxs : src_ctxs[0], multiple_outputs ? sink_ctxs : sink_ctxs[0] ];
};

/**
 * Filter some number of frames, possibly corresponding to multiple sources.
 * @param srcs  AVFilterContext(s), input
 * @param buffersink_ctx  AVFilterContext, output
 * @param framePtr  AVFrame
 * @param inFrames  Input frames, either as an array of frames or with frames
 *                  per input
 * @param config  Options. May be "true" to indicate end of stream.
 */ /* @types
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }[]
 * ): @promise@Frame[]@
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         copyoutFrame: "ptr"
 *     }[]
 * ): @promise@number[]@
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         copyoutFrame: "ImageData"
 *     }[]
 * ): @promise@ImageData[]@
 */ var ff_filter_multi = Module.ff_filter_multi = function(srcs, buffersink_ctx, framePtr, inFrames, config) {
  var outFrames = [];
  var transfer = [];
  var tbNum = -1, tbDen = -1;
  if (!srcs.length) {
    srcs = [ srcs ];
    inFrames = [ inFrames ];
    config = [ config ];
  }
  config = config.map(function(config) {
    if (config === true) return {
      fin: true
    };
    return config || {};
  });
  // Find the longest buffer (ideally they're all the same)
  var max = inFrames.map(function(srcFrames) {
    return srcFrames.length;
  }).reduce(function(a, b) {
    return Math.max(a, b);
  });
  function handleFrame(buffersrc_ctx, inFrame, copyoutFrame) {
    if (inFrame !== null) ff_copyin_frame(framePtr, inFrame);
    var ret = av_buffersrc_add_frame_flags(buffersrc_ctx, inFrame ? framePtr : 0, 8);
    /* AV_BUFFERSRC_FLAG_KEEP_REF */ if (ret < 0) throw new Error("Error while feeding the audio filtergraph: " + ff_error(ret));
    av_frame_unref(framePtr);
    while (true) {
      ret = av_buffersink_get_frame(buffersink_ctx, framePtr);
      if (ret === -6 || /* EAGAIN */ ret === -541478725) /* AVERROR_EOF */ break;
      if (ret < 0) throw new Error("Error while receiving a frame from the filtergraph: " + ff_error(ret));
      var outFrame = copyoutFrame(framePtr);
      if (tbNum && typeof outFrame === "object" && !outFrame.time_base_num) {
        if (tbNum < 0) {
          tbNum = av_buffersink_get_time_base_num(buffersink_ctx);
          tbDen = av_buffersink_get_time_base_den(buffersink_ctx);
        }
        outFrame.time_base_num = tbNum;
        outFrame.time_base_den = tbDen;
      }
      if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length) transfer.push.apply(transfer, outFrame.libavjsTransfer);
      outFrames.push(outFrame);
      av_frame_unref(framePtr);
    }
  }
  // Handle in *frame* order
  for (var fi = 0; fi <= max; fi++) {
    for (var ti = 0; ti < inFrames.length; ti++) {
      var inFrame = inFrames[ti][fi];
      var copyoutFrame = ff_copyout_frame;
      if (config[ti].copyoutFrame) copyoutFrame = ff_copyout_frame_versions[config[ti].copyoutFrame];
      if (inFrame) handleFrame(srcs[ti], inFrame, copyoutFrame); else if (config[ti].fin) handleFrame(srcs[ti], null, copyoutFrame);
    }
  }
  outFrames.libavjsTransfer = transfer;
  return outFrames;
};

/**
 * Decode and filter frames. Just a combination of ff_decode_multi and
 * ff_filter_multi that's all done on the libav.js side.
 * @param ctx  AVCodecContext
 * @param buffersrc_ctx  AVFilterContext, input
 * @param buffersink_ctx  AVFilterContext, output
 * @param pkt  AVPacket
 * @param frame  AVFrame
 * @param inPackets  Incoming packets to decode and filter
 * @param config  Decoding and filtering options. May be "true" to indicate end
 *                of stream.
 */ /* @types
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@
 */ var ff_decode_filter_multi = Module.ff_decode_filter_multi = function(ctx, buffersrc_ctx, buffersink_ctx, pkt, frame, inPackets, config) {
  if (typeof config === "boolean") {
    config = {
      fin: config
    };
  } else {
    config = config || {};
  }
  // 1: Decode
  var decodedFrames = ff_decode_multi(ctx, pkt, frame, inPackets, {
    fin: !!config.fin,
    ignoreErrors: !!config.ignoreErrors,
    copyoutFrame: "ptr"
  });
  // 2: Filter
  return ff_filter_multi(buffersrc_ctx, buffersink_ctx, frame, decodedFrames, {
    fin: !!config.fin,
    copyoutFrame: config.copyoutFrame || "default"
  });
};

/**
 * Copy out a frame.
 * @param frame  AVFrame
 */ /// @types ff_copyout_frame@sync(frame: number): @promise@Frame@
var ff_copyout_frame = Module.ff_copyout_frame = function(frame) {
  var nb_samples = AVFrame_nb_samples(frame);
  if (nb_samples === 0) {
    // Maybe a video frame?
    var width = AVFrame_width(frame);
    if (width) return ff_copyout_frame_video_width(frame, width);
  }
  var channels = AVFrame_channels(frame);
  var format = AVFrame_format(frame);
  var transfer = [];
  var outFrame = {
    data: null,
    libavjsTransfer: transfer,
    channel_layout: AVFrame_channel_layout(frame),
    channels,
    format,
    nb_samples,
    pts: AVFrame_pts(frame),
    ptshi: AVFrame_ptshi(frame),
    time_base_num: AVFrame_time_base_num(frame),
    time_base_den: AVFrame_time_base_den(frame),
    sample_rate: AVFrame_sample_rate(frame)
  };
  // FIXME: Need to support *every* format here
  if (format >= 5) /* U8P */ {
    // Planar format, multiple data pointers
    var data = [];
    for (var ci = 0; ci < channels; ci++) {
      var inData = AVFrame_data_a(frame, ci);
      var outData = null;
      switch (format) {
       case 5:
        // U8P
        outData = copyout_u8(inData, nb_samples);
        break;

       case 6:
        // S16P
        outData = copyout_s16(inData, nb_samples);
        break;

       case 7:
        // S32P
        outData = copyout_s32(inData, nb_samples);
        break;

       case 8:
        // FLT
        outData = copyout_f32(inData, nb_samples);
        break;
      }
      if (outData) {
        data.push(outData);
        transfer.push(outData.buffer);
      }
    }
    outFrame.data = data;
  } else {
    var ct = channels * nb_samples;
    var inData = AVFrame_data_a(frame, 0);
    var outData = null;
    switch (format) {
     case 0:
      // U8
      outData = copyout_u8(inData, ct);
      break;

     case 1:
      // S16
      outData = copyout_s16(inData, ct);
      break;

     case 2:
      // S32
      outData = copyout_s32(inData, ct);
      break;

     case 3:
      // FLT
      outData = copyout_f32(inData, ct);
      break;
    }
    if (outData) {
      outFrame.data = outData;
      transfer.push(outData.buffer);
    }
  }
  return outFrame;
};

/**
 * Copy out a video frame. `ff_copyout_frame` will copy out a video frame if a
 * video frame is found, but this may be faster if you know it's a video frame.
 * @param frame  AVFrame
 */ /// @types ff_copyout_frame_video@sync(frame: number): @promise@Frame@
var ff_copyout_frame_video = Module.ff_copyout_frame_video = function(frame) {
  return ff_copyout_frame_video_width(frame, AVFrame_width(frame));
};

// Copy out a video frame. Used internally by ff_copyout_frame.
var ff_copyout_frame_video_width = Module.ff_copyout_frame_video = function(frame, width) {
  var height = AVFrame_height(frame);
  var format = AVFrame_format(frame);
  var desc = av_pix_fmt_desc_get(format);
  var log2ch = AVPixFmtDescriptor_log2_chroma_h(desc);
  var layout = [];
  var transfer = [];
  var outFrame = {
    data: null,
    layout,
    libavjsTransfer: transfer,
    width,
    height,
    crop: {
      top: AVFrame_crop_top(frame),
      bottom: AVFrame_crop_bottom(frame),
      left: AVFrame_crop_left(frame),
      right: AVFrame_crop_right(frame)
    },
    format: AVFrame_format(frame),
    key_frame: AVFrame_key_frame(frame),
    pict_type: AVFrame_pict_type(frame),
    pts: AVFrame_pts(frame),
    ptshi: AVFrame_ptshi(frame),
    time_base_num: AVFrame_time_base_num(frame),
    time_base_den: AVFrame_time_base_den(frame),
    sample_aspect_ratio: [ AVFrame_sample_aspect_ratio_num(frame), AVFrame_sample_aspect_ratio_den(frame) ]
  };
  // Figure out the data range
  var dataLo = 1 / 0;
  var dataHi = 0;
  for (var p = 0; p < 8; /* AV_NUM_DATA_POINTERS */ p++) {
    var linesize = AVFrame_linesize_a(frame, p);
    if (!linesize) break;
    var plane = AVFrame_data_a(frame, p);
    if (plane < dataLo) dataLo = plane;
    var h = height;
    if (p === 1 || p === 2) h >>= log2ch;
    plane += linesize * h;
    if (plane > dataHi) dataHi = plane;
  }
  // Copy out that segment of data
  outFrame.data = Module.HEAPU8.slice(dataLo, dataHi);
  transfer.push(outFrame.data.buffer);
  // And describe the layout
  for (var p = 0; p < 8; p++) {
    var linesize = AVFrame_linesize_a(frame, p);
    if (!linesize) break;
    var plane = AVFrame_data_a(frame, p);
    layout.push({
      offset: plane - dataLo,
      stride: linesize
    });
  }
  return outFrame;
};

/**
 * Get the size of a packed video frame in its native format.
 * @param frame  AVFrame
 */ /// @types ff_frame_video_packed_size@sync(frame: number): @promise@Frame@
var ff_frame_video_packed_size = Module.ff_frame_video_packed_size = function(frame) {
  // FIXME: duplication
  var width = AVFrame_width(frame);
  var height = AVFrame_height(frame);
  var format = AVFrame_format(frame);
  var desc = av_pix_fmt_desc_get(format);
  // VERY simple bpp, assuming all components are 8-bit
  var bpp = 1;
  if (!(AVPixFmtDescriptor_flags(desc) & 16)) /* planar */ bpp *= AVPixFmtDescriptor_nb_components(desc);
  var dataSz = 0;
  for (var i = 0; i < 8; /* AV_NUM_DATA_POINTERS */ i++) {
    var linesize = AVFrame_linesize_a(frame, i);
    if (!linesize) break;
    var w = width * bpp;
    var h = height;
    if (i === 1 || i === 2) {
      w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
      h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
    }
    dataSz += w * h;
  }
  return dataSz;
};

/* Copy out just the packed data from this frame, into the given buffer. Used
 * internally. */ function ff_copyout_frame_data_packed(data, layout, frame) {
  var width = AVFrame_width(frame);
  var height = AVFrame_height(frame);
  var format = AVFrame_format(frame);
  var desc = av_pix_fmt_desc_get(format);
  // VERY simple bpp, assuming all components are 8-bit
  var bpp = 1;
  if (!(AVPixFmtDescriptor_flags(desc) & 16)) /* planar */ bpp *= AVPixFmtDescriptor_nb_components(desc);
  // Copy it out
  var dIdx = 0;
  for (var i = 0; i < 8; /* AV_NUM_DATA_POINTERS */ i++) {
    var linesize = AVFrame_linesize_a(frame, i);
    if (!linesize) break;
    var inData = AVFrame_data_a(frame, i);
    var w = width * bpp;
    var h = height;
    if (i === 1 || i === 2) {
      w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
      h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
    }
    layout.push({
      offset: dIdx,
      stride: w
    });
    for (var y = 0; y < h; y++) {
      var line = inData + y * linesize;
      data.set(Module.HEAPU8.subarray(line, line + w), dIdx);
      dIdx += w;
    }
  }
}

/**
 * Copy out a video frame, as a single packed Uint8Array.
 * @param frame  AVFrame
 */ /// @types ff_copyout_frame_video_packed@sync(frame: number): @promise@Frame@
var ff_copyout_frame_video_packed = Module.ff_copyout_frame_video_packed = function(frame) {
  var data = new Uint8Array(ff_frame_video_packed_size(frame));
  var layout = [];
  ff_copyout_frame_data_packed(data, layout, frame);
  var outFrame = {
    data,
    libavjsTransfer: [ data.buffer ],
    width: AVFrame_width(frame),
    height: AVFrame_height(frame),
    format: AVFrame_format(frame),
    key_frame: AVFrame_key_frame(frame),
    pict_type: AVFrame_pict_type(frame),
    pts: AVFrame_pts(frame),
    ptshi: AVFrame_ptshi(frame),
    time_base_num: AVFrame_time_base_num(frame),
    time_base_den: AVFrame_time_base_den(frame),
    sample_aspect_ratio: [ AVFrame_sample_aspect_ratio_num(frame), AVFrame_sample_aspect_ratio_den(frame) ]
  };
  return outFrame;
};

/**
 * Copy out a video frame as an ImageData. The video frame *must* be RGBA for
 * this to work as expected (though some ImageData will be returned for any
 * frame).
 * @param frame  AVFrame
 */ /* @types
 * ff_copyout_frame_video_imagedata@sync(
 *     frame: number
 * ): @promise@ImageData@
 */ var ff_copyout_frame_video_imagedata = Module.ff_copyout_frame_video_imagedata = function(frame) {
  var width = AVFrame_width(frame);
  var height = AVFrame_height(frame);
  var id = new ImageData(width, height);
  var layout = [];
  ff_copyout_frame_data_packed(id.data, layout, frame);
  id.libavjsTransfer = [ id.data.buffer ];
  return id;
};

/**
 * Copy "out" a video frame by just allocating another frame in libav.
 * @param frame  AVFrame
 */ var ff_copyout_frame_ptr = Module.ff_copyout_frame_ptr = function(frame) {
  var ret = av_frame_clone(frame);
  if (!ret) throw new Error("Failed to allocate new frame");
  return ret;
};

// All of the versions of ff_copyout_frame
var ff_copyout_frame_versions = {
  default: ff_copyout_frame,
  video: ff_copyout_frame_video,
  video_packed: ff_copyout_frame_video_packed,
  ImageData: ff_copyout_frame_video_imagedata,
  ptr: ff_copyout_frame_ptr
};

/**
 * Copy in a frame.
 * @param framePtr  AVFrame
 * @param frame  Frame to copy in, as either a Frame or an AVFrame pointer
 */ /// @types ff_copyin_frame@sync(framePtr: number, frame: Frame | number): @promise@void@
var ff_copyin_frame = Module.ff_copyin_frame = function(framePtr, frame) {
  if (typeof frame === "number") {
    // This is a frame pointer, not a libav.js Frame
    av_frame_unref(framePtr);
    var ret = av_frame_ref(framePtr, frame);
    if (ret < 0) throw new Error("Failed to reference frame data: " + ff_error(ret));
    av_frame_unref(frame);
    av_frame_free_js(frame);
    return;
  }
  if (frame.width) return ff_copyin_frame_video(framePtr, frame);
  var format = frame.format;
  var channels = frame.channels;
  if (!channels) {
    // channel_layout must be set
    var channel_layout = frame.channel_layout;
    channels = 0;
    while (channel_layout) {
      if (channel_layout & 1) channels++;
      channel_layout >>>= 1;
    }
  }
  [ "channel_layout", "channels", "format", "pts", "ptshi", "sample_rate", "time_base_num", "time_base_den" ].forEach(function(key) {
    if (key in frame) CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key]);
  });
  var nb_samples;
  if (format >= 5) /* U8P */ {
    // Planar, so nb_samples is out of data[0]
    nb_samples = frame.data[0].length;
  } else {
    // Non-planar, divide by channel count
    nb_samples = frame.data.length / channels;
  }
  AVFrame_nb_samples_s(framePtr, nb_samples);
  // We may or may not need to actually allocate
  if (av_frame_make_writable(framePtr) < 0) {
    var ret = av_frame_get_buffer(framePtr, 0);
    if (ret < 0) throw new Error("Failed to allocate frame buffers: " + ff_error(ret));
  }
  if (format >= 5) /* U8P */ {
    // A planar format
    for (var ci = 0; ci < channels; ci++) {
      var data = AVFrame_data_a(framePtr, ci);
      var inData = frame.data[ci];
      switch (format) {
       case 5:
        // U8P
        copyin_u8(data, inData);
        break;

       case 6:
        // S16P
        copyin_s16(data, inData);
        break;

       case 7:
        // S32P
        copyin_s32(data, inData);
        break;

       case 8:
        // FLT
        copyin_f32(data, inData);
        break;
      }
    }
  } else {
    var data = AVFrame_data_a(framePtr, 0);
    var inData = frame.data;
    // FIXME: Need to support *every* format here
    switch (format) {
     case 0:
      // U8
      copyin_u8(data, inData);
      break;

     case 1:
      // S16
      copyin_s16(data, inData);
      break;

     case 2:
      // S32
      copyin_s32(data, inData);
      break;

     case 3:
      // FLT
      copyin_f32(data, inData);
      break;
    }
  }
};

// Copy in a video frame. Used internally by ff_copyin_frame.
var ff_copyin_frame_video = Module.ff_copyin_frame_video = function(framePtr, frame) {
  [ "format", "height", "key_frame", "pict_type", "pts", "ptshi", "width", "time_base_num", "time_base_den" ].forEach(function(key) {
    if (key in frame) CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key]);
  });
  if ("sample_aspect_ratio" in frame) {
    AVFrame_sample_aspect_ratio_s(framePtr, frame.sample_aspect_ratio[0], frame.sample_aspect_ratio[1]);
  }
  var crop = frame.crop || {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
  AVFrame_crop_top_s(framePtr, crop.top);
  AVFrame_crop_bottom_s(framePtr, crop.bottom);
  AVFrame_crop_left_s(framePtr, crop.left);
  AVFrame_crop_right_s(framePtr, crop.right);
  var desc = av_pix_fmt_desc_get(frame.format);
  var log2cw = AVPixFmtDescriptor_log2_chroma_w(desc);
  var log2ch = AVPixFmtDescriptor_log2_chroma_h(desc);
  // We may or may not need to actually allocate
  if (av_frame_make_writable(framePtr) < 0) {
    var ret = av_frame_get_buffer(framePtr, 0);
    if (ret < 0) throw new Error("Failed to allocate frame buffers: " + ff_error(ret));
  }
  // If layout is not provided, assume packed
  var layout = frame.layout;
  if (!layout) {
    layout = [];
    // VERY simple bpp, assuming all components are 8-bit
    var bpp = 1;
    if (!(AVPixFmtDescriptor_flags(desc) & 16)) /* planar */ bpp *= AVPixFmtDescriptor_nb_components(desc);
    var off = 0;
    for (var p = 0; p < 8; /* AV_NUM_DATA_POINTERS */ p++) {
      var linesize = AVFrame_linesize_a(framePtr, p);
      if (!linesize) break;
      var w = frame.width;
      var h = frame.height;
      if (p === 1 || p === 2) {
        w >>= log2cw;
        h >>= log2ch;
      }
      layout.push({
        offset: off,
        stride: w * bpp
      });
      off += w * h * bpp;
    }
  }
  // Copy it in
  for (var p = 0; p < layout.length; p++) {
    var lplane = layout[p];
    var linesize = AVFrame_linesize_a(framePtr, p);
    var data = AVFrame_data_a(framePtr, p);
    var h = frame.height;
    if (p === 1 || p === 2) h >>= log2ch;
    var ioff = lplane.offset;
    var ooff = 0;
    var stride = Math.min(lplane.stride, linesize);
    for (var y = 0; y < h; y++) {
      copyin_u8(data + ooff, frame.data.subarray(ioff, ioff + stride));
      ooff += linesize;
      ioff += lplane.stride;
    }
  }
};

/**
 * Copy out a packet.
 * @param pkt  AVPacket
 */ /// @types ff_copyout_packet@sync(pkt: number): @promise@Packet@
var ff_copyout_packet = Module.ff_copyout_packet = function(pkt) {
  var data = AVPacket_data(pkt);
  var size = AVPacket_size(pkt);
  var data = copyout_u8(data, size);
  return {
    data,
    libavjsTransfer: [ data.buffer ],
    pts: AVPacket_pts(pkt),
    ptshi: AVPacket_ptshi(pkt),
    dts: AVPacket_dts(pkt),
    dtshi: AVPacket_dtshi(pkt),
    time_base_num: AVPacket_time_base_num(pkt),
    time_base_den: AVPacket_time_base_den(pkt),
    stream_index: AVPacket_stream_index(pkt),
    flags: AVPacket_flags(pkt),
    duration: AVPacket_duration(pkt),
    durationhi: AVPacket_durationhi(pkt),
    side_data: ff_copyout_side_data(pkt)
  };
};

// Copy out a packet's side data. Used internally by ff_copyout_packet.
var ff_copyout_side_data = Module.ff_copyout_side_data = function(pkt) {
  var side_data = AVPacket_side_data(pkt);
  var side_data_elems = AVPacket_side_data_elems(pkt);
  if (!side_data) return null;
  var ret = [];
  for (var i = 0; i < side_data_elems; i++) {
    var data = AVPacketSideData_data(side_data, i);
    var size = AVPacketSideData_size(side_data, i);
    ret.push({
      data: copyout_u8(data, size),
      type: AVPacketSideData_type(side_data, i)
    });
  }
  return ret;
};

/**
 * Copy "out" a packet by just copying its data into a new AVPacket.
 * @param pkt  AVPacket
 */ /// @types ff_copyout_packet_ptr@sync(pkt: number): @promise@number@
var ff_copyout_packet_ptr = Module.ff_copyout_packet_ptr = function(pkt) {
  var ret = av_packet_clone(pkt);
  if (!ret) throw new Error("Failed to clone packet");
  return ret;
};

// Versions of ff_copyout_packet
var ff_copyout_packet_versions = {
  default: ff_copyout_packet,
  ptr: ff_copyout_packet_ptr
};

/**
 * Copy in a packet.
 * @param pktPtr  AVPacket
 * @param packet  Packet to copy in, as either a Packet or an AVPacket pointer
 */ /// @types ff_copyin_packet@sync(pktPtr: number, packet: Packet | number): @promise@void@
var ff_copyin_packet = Module.ff_copyin_packet = function(pktPtr, packet) {
  if (typeof packet === "number") {
    // Input packet is an AVPacket pointer, duplicate it
    av_packet_unref(pktPtr);
    var res = av_packet_ref(pktPtr, packet);
    if (res < 0) throw new Error("Failed to reference packet: " + ff_error(res));
    av_packet_unref(packet);
    av_packet_free_js(packet);
    return;
  }
  ff_set_packet(pktPtr, packet.data);
  [ "dts", "dtshi", "duration", "durationhi", "flags", "side_data", "side_data_elems", "stream_index", "pts", "ptshi", "time_base_num", "time_base_den" ].forEach(function(key) {
    if (key in packet) CAccessors["AVPacket_" + key + "_s"](pktPtr, packet[key]);
  });
  if (packet.side_data) ff_copyin_side_data(pktPtr, packet.side_data);
};

// Copy in a packet's side data. Used internally by ff_copyin_packet.
var ff_copyin_side_data = Module.ff_copyin_side_data = function(pktPtr, side_data) {
  side_data.forEach(function(elem) {
    var data = av_packet_new_side_data(pktPtr, elem.type, elem.data.length);
    if (data === 0) throw new Error("Failed to allocate side data!");
    copyin_u8(data, elem.data);
  });
};

/**
 * Copy out codec parameters.
 * @param codecpar  AVCodecParameters
 */ /// @types ff_copyout_codecpar@sync(codecpar: number): @promise@CodecParameters@
var ff_copyout_codecpar = Module.ff_copyout_codecpar = function(codecpar) {
  return {
    bit_rate: AVCodecParameters_bit_rate(codecpar),
    channel_layoutmask: AVCodecParameters_channel_layoutmask(codecpar),
    channels: AVCodecParameters_channels(codecpar),
    chroma_location: AVCodecParameters_chroma_location(codecpar),
    codec_id: AVCodecParameters_codec_id(codecpar),
    codec_tag: AVCodecParameters_codec_tag(codecpar),
    codec_type: AVCodecParameters_codec_type(codecpar),
    color_primaries: AVCodecParameters_color_primaries(codecpar),
    color_range: AVCodecParameters_color_range(codecpar),
    color_space: AVCodecParameters_color_space(codecpar),
    color_trc: AVCodecParameters_color_trc(codecpar),
    format: AVCodecParameters_format(codecpar),
    height: AVCodecParameters_height(codecpar),
    level: AVCodecParameters_level(codecpar),
    profile: AVCodecParameters_profile(codecpar),
    sample_rate: AVCodecParameters_sample_rate(codecpar),
    width: AVCodecParameters_width(codecpar),
    extradata: ff_copyout_codecpar_extradata(codecpar)
  };
};

// Copy out codec parameter extradata. Used internally by ff_copyout_codecpar.
var ff_copyout_codecpar_extradata = Module.ff_copyout_codecpar_extradata = function(codecpar) {
  var extradata = AVCodecParameters_extradata(codecpar);
  var extradata_size = AVCodecParameters_extradata_size(codecpar);
  if (!extradata || !extradata_size) return null;
  return copyout_u8(extradata, extradata_size);
};

/**
 * Copy in codec parameters.
 * @param codecparPtr  AVCodecParameters
 * @param codecpar  Codec parameters to copy in.
 */ /// @types ff_copyin_codecpar@sync(codecparPtr: number, codecpar: CodecParameters): @promise@void@
var ff_copyin_codecpar = Module.ff_copyin_codecpar = function(codecparPtr, codecpar) {
  [ "bit_rate", "channel_layoutmask", "channels", "chroma_location", "codec_id", "codec_tag", "codec_type", "color_primaries", "color_range", "color_space", "color_trc", "format", "height", "level", "profile", "sample_rate", "width" ].forEach(function(key) {
    if (key in codecpar) CAccessors["AVCodecParameters_" + key + "_s"](codecparPtr, codecpar[key]);
  });
  if (codecpar.extradata) ff_copyin_codecpar_extradata(codecparPtr, codecpar.extradata);
};

// Copy in codec parameter extradata. Used internally by ff_copyin_codecpar.
var ff_copyin_codecpar_extradata = Module.ff_copyin_codecpar_extradata = function(codecparPtr, extradata) {
  var extradataPtr = malloc(extradata.length);
  copyin_u8(extradataPtr, extradata);
  AVCodecParameters_extradata_s(codecparPtr, extradataPtr);
  AVCodecParameters_extradata_size_s(codecparPtr, extradata.length);
};

/**
 * Allocate and copy in a 32-bit int list.
 * @param list  List of numbers to copy in
 */ /// @types ff_malloc_int32_list@sync(list: number[]): @promise@number@
var ff_malloc_int32_list = Module.ff_malloc_int32_list = function(list) {
  var ptr = malloc(list.length * 4);
  if (ptr === 0) throw new Error("Failed to malloc");
  var arr = new Uint32Array(Module.HEAPU8.buffer, ptr, list.length);
  for (var i = 0; i < list.length; i++) arr[i] = list[i];
  return ptr;
};

/**
 * Allocate and copy in a 64-bit int list.
 * @param list  List of numbers to copy in
 */ /// @types ff_malloc_int64_list@sync(list: number[]): @promise@number@
var ff_malloc_int64_list = Module.ff_malloc_int64_list = function(list) {
  var ptr = malloc(list.length * 8);
  if (ptr === 0) throw new Error("Failed to malloc");
  var arr = new Int32Array(Module.HEAPU8.buffer, ptr, list.length * 2);
  for (var i = 0; i < list.length; i++) {
    arr[i * 2] = list[i];
    arr[i * 2 + 1] = (list[i] < 0) ? -1 : 0;
  }
  return ptr;
};

/**
 * Allocate and copy in a string array. The resulting array will be
 * NULL-terminated.
 * @param arr  Array of strings to copy in.
 */ /// @types ff_malloc_string_array@sync(arr: string[]): @promise@number@
var ff_malloc_string_array = Module.ff_malloc_string_array = function(arr) {
  var ptr = malloc((arr.length + 1) * 4);
  if (ptr === 0) throw new Error("Failed to malloc");
  var inArr = new Uint32Array(Module.HEAPU8.buffer, ptr, arr.length + 1);
  var i;
  for (i = 0; i < arr.length; i++) inArr[i] = av_strdup(arr[i]);
  inArr[i] = 0;
  return ptr;
};

/**
 * Free a string array allocated by ff_malloc_string_array.
 * @param ptr  Pointer to the array to free.
 */ /// @types ff_free_string_array@sync(ptr: number): @promise@void@
var ff_free_string_array = Module.ff_free_string_array = function(ptr) {
  var iPtr = ptr / 4;
  for (;;iPtr++) {
    var elPtr = Module.HEAPU32[iPtr];
    if (!elPtr) break;
    free(elPtr);
  }
  free(ptr);
};

// Convert arguments to an array of string arguments (internal)
function convertArgs(argv0, args) {
  var ret = [ argv0 ];
  ret = ret.concat(Array.prototype.slice.call(args, 0));
  for (var i = 0; i < ret.length; i++) {
    var arg = ret[i];
    if (typeof arg !== "string") {
      if ("length" in arg) {
        // Array of strings
        ret.splice.apply(ret, [ i, 1 ].concat(arg));
      } else {
        // Just stringify it
        ret[i] = "" + arg;
      }
    }
  }
  return ret;
}

// Helper to run a main()
function runMain(main, name, args) {
  args = convertArgs(name, args);
  var argv = ff_malloc_string_array(args);
  Module.fsThrownError = null;
  var ret = null;
  try {
    ret = main(args.length, argv);
  } catch (ex) {
    if (ex && ex.name === "ExitStatus") ret = ex.status; else if (ex === "unwind") ret = EXITSTATUS; else throw ex;
  }
  function cleanup() {
    ff_free_string_array(argv);
  }
  if (ret && ret.then) {
    return ret.then(function(ret) {
      cleanup();
      return ret;
    }).catch(function(ex) {
      cleanup();
      if (ex && ex.name === "ExitStatus") return Promise.resolve(ex.status); else if (ex === "unwind") return Promise.resolve(EXITSTATUS); else return Promise.reject(ex);
    }).then(function(ret) {
      if (Module.fsThrownError) {
        var thr = Module.fsThrownError;
        Module.fsThrownError = null;
        throw thr;
      }
      return ret;
    });
  } else {
    cleanup();
    if (Module.fsThrownError) {
      var thr = Module.fsThrownError;
      Module.fsThrownError = null;
      throw thr;
    }
    return ret;
  }
}

/**
 * Frontend to the ffmpeg CLI (if it's compiled in). Pass arguments as strings,
 * or you may intermix arrays of strings for multiple arguments.
 *
 * NOTE: ffmpeg 6.0 and later require threads for the ffmpeg CLI. libav.js
 * *does* support the ffmpeg CLI on unthreaded environments, but to do so, it
 * uses an earlier version of the CLI, from 5.1.3. The libraries are still
 * modern, and if running libav.js in threaded mode, the ffmpeg CLI is modern as
 * well. As time passes, these two versions will drift apart, so make sure you
 * know whether you're running in threaded mode or not!
 */ /// @types ffmpeg@sync(...args: (string | string[])[]): @promsync@number@
var ffmpeg = Module.ffmpeg = function() {
  return runMain(ffmpeg_main, "ffmpeg", arguments);
};

/**
 * Frontend to the ffprobe CLI (if it's compiled in). Pass arguments as strings,
 * or you may intermix arrays of strings for multiple arguments.
 */ /// @types ffprobe@sync(...args: (string | string[])[]): @promsync@number@
var ffprobe = Module.ffprobe = function() {
  return runMain(ffprobe_main, "ffprobe", arguments);
};



// In MODULARIZE mode we wrap the generated code in a factory function
// and return either the Module itself, or a promise of the module.
// We assign to the `moduleRtn` global here and configure closure to see
// this as and extern so it won't get minified.
moduleRtn = readyPromise;


  return moduleRtn;
}
);
})();
export default LibAVFactory;
var isPthread = globalThis.self?.name === 'em-pthread';
var isNode = typeof globalThis.process?.versions?.node == 'string';
if (isNode) isPthread = (await import('worker_threads')).workerData === 'em-pthread';

// When running as a pthread, construct a new instance on startup
isPthread && LibAVFactory();
/*
 * Copyright (C) 2019-2024 Yahweasel
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

if (/* We're in a worker */
    typeof importScripts !== "undefined" &&
    /* We're not being loaded with noworker from the main code */
    typeof LibAV === "undefined" &&
    /* We're not being loaded as a thread */
    (
        (typeof self === "undefined" && typeof Module === "undefined") ||
        (typeof self !== "undefined" && self.name !== "em-pthread")
    )
    ) (function() {
    var libav;

    Promise.all([]).then(function() {
        /* We're the primary code for this worker. The host should ask us to
         * load immediately. */
        return new Promise(function(res, rej) {
            onmessage = function(e) {
                if (e && e.data && e.data.config) {
                    LibAVFactory({
                        wasmurl: e.data.config.wasmurl,
                        variant: e.data.config.variant
                    }).then(res).catch(rej);
                }
            };
        });

    }).then(function(lib) {
        libav = lib;

        // Now we're ready for normal messages
        onmessage = function(e) {
            var id = e.data[0];
            var fun = e.data[1];
            var args = e.data.slice(2);
            var ret = void 0;
            var succ = true;

            function reply() {
                var transfer = [];
                if (ret && ret.libavjsTransfer)
                    transfer = ret.libavjsTransfer
                try {
                    postMessage([id, fun, succ, ret], transfer);
                } catch (ex) {
                    try {
                        ret = JSON.parse(JSON.stringify(
                            ret, function(k, v) { return v; }
                        ));
                        postMessage([id, fun, succ, ret], transfer);
                    } catch (ex) {
                        postMessage([id, fun, succ, "" + ret]);
                    }
                }
            }

            try {
                ret = libav[fun].apply(libav, args);
            } catch (ex) {
                succ = false;
                ret = ex;
            }
            if (succ && ret && ret.then) {
                // Let the promise resolve
                ret.then(function(res) {
                    ret = res;
                }).catch(function(ex) {
                    succ = false;
                    ret = ex;
                }).then(reply);

            } else reply();
        };

        libav.onwrite = function(name, pos, buf) {
            /* We have to buf.slice(0) so we don't duplicate the entire heap just
             * to get one part of it in postMessage */
            buf = buf.slice(0);
            postMessage(["onwrite", "onwrite", true, [name, pos, buf]], [buf.buffer]);
        };

        libav.onblockread = function(name, pos, len) {
            postMessage(["onblockread", "onblockread", true, [name, pos, len]]);
        };
        postMessage(["onready", "onready", true, null]);

    }).catch(function(ex) {
        console.log("Loading LibAV failed\n" + ex + "\n" + ex.stack);
    });
})();
